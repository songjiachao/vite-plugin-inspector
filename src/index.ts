import type { Plugin } from 'vite'
import { transform, middleware, injectScript } from './core'

export interface  VitePluginInspectorOptions {
  route?: string
}

const DEFAULT_INSPECTOR_OPTIONS:VitePluginInspectorOptions = {
  route:'/open-editor'
}

export default function (options?:VitePluginInspectorOptions): Plugin {
  // 合并默认参数
  const normalizedOptions = { ...DEFAULT_INSPECTOR_OPTIONS, ...options }
  // 文件路径太长，影响页面dom查看效率，使用路径对应6位hash值较为美观
  // const filePathMap = new Map()
  return {
    name: 'vite-plugin-inspector',
    enforce: 'pre',
    apply: 'serve',
    transformIndexHtml: {
      enforce: 'pre',
      transform() {
        return [{
          tag: 'script',
          children: injectScript(normalizedOptions),
          injectTo: 'head',
        }]
      },
    },
    configureServer({ middlewares }) {
      middlewares.use(normalizedOptions.route, middleware)
    },
    transform(code, id) {
      const { code: newCode } = transform(code, id)
      return newCode
    },
  }
}

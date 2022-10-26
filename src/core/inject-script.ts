
import { VitePluginInspectorOptions } from '../index'
export default function (options: VitePluginInspectorOptions) {
  return `
// ---------- vite-plugin-inspector inject code start ----------
(function () {
  // 获取标签loc属性，也就是filePath
  function getFilePath(el) {
    const { loc } = el.dataset;
    if (!loc) {
      return getFilePath(el.parent || el.parentNode);
    } else {
      return loc;
    }
  }
  document.addEventListener('click', (e) => {
    if (e.metaKey || e.shiftKey || e.ctrlKey) {
      e.preventDefault();
      e.stopPropagation();
      const loc = getFilePath(e.target);
      fetch("${options.route}?loc="+loc);
    }
  });
}());
// ---------- vite-plugin-inspector inject code end ----------
`
}

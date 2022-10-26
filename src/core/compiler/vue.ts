function compileVue(code: string) {
  const start = code.indexOf('<template>') + 10
  const end = code.indexOf('</template>')
  return {
    start,
    end,
    content: code.substring(start, end)
  }
}

export default compileVue
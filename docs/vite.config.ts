import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'

const options = {
  encode: function (str: string) {
    return str.split(/[\x00-\x7F]+/)
  }
}

export default defineConfig({
  plugins: [SearchPlugin(options)]
})

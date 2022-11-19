import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'

const options = {
  encode: false,
  tokenize: 'full'
}

export default defineConfig({
  plugins: [SearchPlugin(options)]
})

import { SearchPlugin, type SearchData } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

const searchPluginOptions: Partial<SearchData['Options']> = {
  tokenize: 'full'
}

export default defineConfig({
  plugins: [SearchPlugin(searchPluginOptions), UnoCSS()]
})

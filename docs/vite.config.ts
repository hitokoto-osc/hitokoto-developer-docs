import { SearchPlugin, type SearchData } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

const searchPluginOptions: Partial<SearchData['Options']> = {
  tokenize: 'full'
}

export default defineConfig({
  plugins: [
    SearchPlugin(searchPluginOptions),
    tailwindcss(),
    Icons({ compiler: 'vue3' })
  ]
})

import DefaultTheme from 'vitepress/theme'
// Google Analytics
import googleAnalytics from 'vitepress-plugin-google-analytics'
// Nprogress
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'


import NotFound from './NotFound.vue'
import Layout from './Layout.vue'
import './styles/main.scss'
import { addFontAwesome } from './plugins/addFontAwesome'

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  Layout: Layout,
  NotFound: NotFound, // <- this will replace 404 page
  enhanceApp: (ctx) => {
    addFontAwesome(ctx)
    vitepressNprogress(ctx)
    googleAnalytics({
      id: 'G-QL2J611R9Q' // Replace with your GoogleAnalytics ID, which should start with the 'G-'
    })
  }
}

export default theme

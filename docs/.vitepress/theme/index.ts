import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'
// Google Analytics
import googleAnalytics from 'vitepress-plugin-google-analytics'
// Nprogress
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
// BackToTop
import BackToTop from './components/BackToTop.vue'

import NotFound from './NotFound.vue'
// import Layout from './Layout.vue'

import './styles/main.scss'
import { addFontAwesome } from './plugins/addFontAwesome'

const theme: Theme = {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop)
    })
  },
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

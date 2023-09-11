import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'
// Google Analytics
import googleAnalytics from 'vitepress-plugin-google-analytics'
// Nprogress
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
// import RegisterSW from './components/RegisterSW.vue'
import NotFound from './NotFound.vue'
import Layout from './Layout.vue'

import 'virtual:uno.css'
import './styles/main.scss'
// import { addFontAwesome } from './plugins/addFontAwesome'
import addGoogleAdsProvider from './plugins/addGoogleAdsProvider'

const theme: Theme = {
  ...DefaultTheme,
  Layout: () => h(Layout),
  NotFound: NotFound, // <- this will replace 404 page
  enhanceApp: (ctx) => {
    // addFontAwesome(ctx)
    vitepressNprogress(ctx)
    googleAnalytics({
      id: 'G-QL2J611R9Q' // Replace with your GoogleAnalytics ID, which should start with the 'G-'
    })
    addGoogleAdsProvider(ctx, {
      adClient: 'ca-pub-8868204327924354'
    })
  }
}

export default theme

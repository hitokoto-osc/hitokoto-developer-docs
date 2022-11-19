import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { Theme } from 'vitepress'
// Google Analytics
import googleAnalytics from 'vitepress-plugin-google-analytics'
// Nprogress
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
// Components
import BackToTop from './components/BackToTop.vue'
import GoogleAdDocAside from './components/GoogleAdDocAside.vue'
import GoogleAdDocFooter from './components/GoogleAdDocFooter.vue'
// import RegisterSW from './components/RegisterSW.vue'
import NotFound from './NotFound.vue'
// import Layout from './Layout.vue'

import './styles/main.scss'
// import { addFontAwesome } from './plugins/addFontAwesome'
import addGoogleAdsProvider from './plugins/addGoogleAdsProvider'

const googleAdOptions = {
  adClient: 'ca-pub-8868204327924354',
  docAsideAdSlot: '1137431788',
  docFooterAdSlot: '7449637304'
}

const theme: Theme = {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-ads-before': () =>
        h(
          GoogleAdDocAside,
          {
            adClient: googleAdOptions.adClient,
            adSlot: googleAdOptions.docAsideAdSlot,
            adFormat: 'rectangle, horizontal'
          },
          () => []
        ),
      'doc-after': () =>
        h(
          GoogleAdDocFooter,
          {
            adClient: googleAdOptions.adClient,
            adSlot: googleAdOptions.docFooterAdSlot,
            adFormat: 'horizontal'
          },
          () => []
        ),
      'layout-bottom': () => [
        h(BackToTop)
        // h(RegisterSW)
      ]
    })
  },
  NotFound: NotFound, // <- this will replace 404 page
  enhanceApp: (ctx) => {
    // addFontAwesome(ctx)
    vitepressNprogress(ctx)
    googleAnalytics({
      id: 'G-QL2J611R9Q' // Replace with your GoogleAnalytics ID, which should start with the 'G-'
    })
    addGoogleAdsProvider(ctx, {
      adClient: googleAdOptions.adClient
    })
  }
}

export default theme

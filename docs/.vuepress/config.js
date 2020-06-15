module.exports = {
  title: "一言开发者中心",
  description: "一言，用代码表达言语的魅力，用代码书写山河的壮丽。本文档提供一言开发接口的使用说明，SDK，常见问题。",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/logo.svg', color: '#8921ff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./nav"),
    sidebar: {
      '/core/': [
        '',
        'interface'
      ],
      '/sentence/': [
        '',
        'demo',
        'deploy'
      ],
      '/': [ // 回滚
        ['', '主页'],
        'introduce',
      ],
    },
    sidebarDepth: 2,
    lastUpdated: "最后更新",
    searchMaxSuggestoins: 10,
  },
  plugins: [// you can use this plugin multiple times
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-158766433-2' // UA-00000000-0
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // this is how VuePress Default Theme use this plugin
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    ['vuepress-plugin-smooth-scroll'],
    ['@vuepress/back-to-top'],
    ['@vuepress/active-header-links'],
    ['@vuepress/pwa', {
      erviceWorker: true,
      updatePopup: {
        message: "文章内容已更新。",
        buttonText: "刷新页面"
      }
    }]
  ]
};

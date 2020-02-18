module.exports = {
  title: "一言开发者中心",
  description: "一言，用代码表达言语的魅力，用代码书写山河的壮丽。本文档提供一言开发接口的使用说明，SDK，常见问题。",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "./favicon.ico" }]
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
        'demo'
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
    ['@vuepress/active-header-links']
  ]
};

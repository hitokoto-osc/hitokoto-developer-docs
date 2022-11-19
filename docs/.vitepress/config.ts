import { defineConfig } from 'vitepress'
// import { withPwa } from '@vite-pwa/vitepress'
import Container from 'markdown-it-container'
import Token from 'markdown-it/lib/token'

export default // withPwa(
defineConfig({
  title: '一言开发者中心',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: 'with-subfolders',
  description:
    '一言，用代码表达言语的魅力，用代码书写山河的壮丽。本文档提供一言开发接口的使用说明，SDK，常见问题。',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['link', { rel: 'apple-touch-icon', href: '/icons/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/logo.svg', color: '#8921ff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(Container, 'theorem', {
        render: (tokens: Token[], idx: number) => {
          const token = tokens[idx]
          const info = token.info.trim().slice(7).trim()
          if (token.nesting === 1) {
            const title = md.renderInline(info)
            return `<div class="theorem"><p class="title">${title}</p>\n`
          } else {
            return `</div>\n`
          }
        }
      })
    }
  },
  themeConfig: {
    // smoothScroll: true,
    // nav: require("./nav"),
    outlineTitle: '本页目录',
    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav: [
      // Nav 1
      {
        text: '首页',
        link: '/'
      },
      {
        text: '语句接口',
        link: '/sentence/'
      },
      {
        text: '核心接口',
        link: '/core/'
      },
      // Nav 2
      {
        text: '一言相关',
        items: [
          { text: '主站', link: 'https://hitokoto.cn/' },
          { text: '统计', link: 'https://hitokoto.cn/status' },
          { text: '关于我们', link: 'https://hitokoto.cn/about' }
        ]
      },
      { text: '开源库', link: 'https://github.com/hitokoto-osc' }
    ],
    footer: {
      message: '本文档遵循 MIT 协议',
      copyright: 'Copyright © 2022 MoeTeam'
    },
    sidebar: [
      {
        text: '序',
        collapsible: true,
        items: [
          { text: '主页', link: '/' },
          { text: '介绍', link: '/introduce' }
        ]
      },
      {
        text: '语句接口',
        collapsible: true,
        items: [
          { text: '语句接口', link: '/sentence/' },
          { text: '使用示例', link: '/sentence/demo' },
          { text: '部署实例', link: '/sentence/deploy' }
        ]
      },
      {
        text: '核心接口',
        collapsible: true,
        items: [
          { text: '核心接口', link: '/core/' },
          { text: '接口定义', link: '/core/interface/' }
        ]
      }
    ],
    editLink: {
      pattern:
        'https://github.com/hitokoto-osc/hitokoto-developer-docs/edit/next/docs/:path',
      text: '本页内容有误？修改本页...'
    }
    // lastUpdated: "最后更新",

    // searchMaxSuggestoins: 10,
  }
})
// )

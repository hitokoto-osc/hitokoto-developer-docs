import { defineConfig } from 'vitepress'
// import { withPwa } from '@vite-pwa/vitepress'
import Container from 'markdown-it-container'
import Token from 'markdown-it/lib/token'

const currentYear = new Date().getFullYear()

export default // withPwa(
defineConfig({
  title: '一言开发者中心',
  lang: 'zh-CN',
  lastUpdated: true,
  // cleanUrls: 'without-subfolders',
  description:
    '一言，用代码表达言语的魅力，用代码书写山河的壮丽。本文档提供一言开发接口的使用说明，SDK，常见问题。',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://s4.zstatic.net/ajax/libs/animate.css/4.1.1/animate.min.css', integrity: 'sha384-Gu3KVV2H9d+yA4QDpVB7VcOyhJlAVrcXd0thEjr4KznfaFPLe0xQJyonVxONa4ZC', crossorigin: 'anonymous' }],
    /**
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
     */
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
    logo: './logo.png',
    // smoothScroll: true,
    // nav: require("./nav"),
    outlineTitle: '本页目录',
    lastUpdatedText: '最后更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M433.754 420.445c-11.526 1.393-44.86-52.741-44.86-52.741 0 31.345-16.136 72.247-51.051 101.786 16.842 5.192 54.843 19.167 45.803 34.421-7.316 12.343-125.51 7.881-159.632 4.037-34.122 3.844-152.316 8.306-159.632-4.037-9.045-15.25 28.918-29.214 45.783-34.415-34.92-29.539-51.059-70.445-51.059-101.792 0 0-33.334 54.134-44.859 52.741-5.37-.65-12.424-29.644 9.347-99.704 10.261-33.024 21.995-60.478 40.144-105.779C60.683 98.063 108.982.006 224 0c113.737.006 163.156 96.133 160.264 214.963 18.118 45.223 29.912 72.85 40.144 105.778 21.768 70.06 14.716 99.053 9.346 99.704z"/></svg>'
        },
        link: 'https://jq.qq.com/?_wv=1027&k=kmRXaFqq'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"/></svg>'
        },
        link: 'https://t.me/hitokoto'
      },
      { icon: 'github', link: 'https://github.com/hitokoto-osc' }
    ],
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
      }
    ],
    footer: {
      message: '本文档遵循 MIT 协议',
      copyright: `© ${currentYear} MoeTeam All Rights Reserved.`
    },
    sidebar: [
      {
        text: '序',
        // collapsed: false,
        items: [
          { text: '主页', link: '/' },
          { text: '介绍', link: '/introduce' }
        ]
      },
      {
        text: '语句接口',
        // collapsed: false,
        items: [
          { text: '语句接口', link: '/sentence/' },
          { text: '使用示例', link: '/sentence/demo' },
          { text: '部署实例', link: '/sentence/deploy' }
        ]
      },
      {
        text: '核心接口',
        // collapsed: false,
        items: [
          { text: '核心接口', link: '/core/' },
          { text: '接口定义', link: '/core/interface' }
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

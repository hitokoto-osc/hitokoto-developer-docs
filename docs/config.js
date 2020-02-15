module.exports = {
  title: '一言 - 用代码表达语言的魅力',
  description: '一言开发者文档，用代码表达语言的魅力，用代码书写世界的壮丽。开发者中心，提供接口定义，SDK，使用说明等便捷内容。',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: '最后更新' // 文档更新时间：每个文件git最后提交的时间
  }
};

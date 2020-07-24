# 一言开发者社区

一言开发者社区 是以 VuePress 为构建程序进行自助化构建，部署的一言开发文档。

## 贡献

如果文档出现了错误，我们欢迎您提交 issue 或者直接通过 Pull Request 帮助我们纠正错误，十分感谢！

* 所有文件源文件都是 Markdown 文件，您可以在 docs 目录下找到文档（文件名和路径相匹配）
* 由于文档采用自动化构建，部署，当您的 PR 被合并后，它将自动部署至 <developer.hitokoto.cn>

## 本地测试

文档采用 `yarn` 包管理，您可以这样安装包：

```shell
yarn
```

然后，通过这样，启动开发模式（监听文件变化）：

```shell
yarn docs:dev
```

最后，你可以向这样编译文档：

```shell
yarn docs:build
```

编译出来的文件将存放在 `docs/.vuepress/dist` 目录中，直接部署该文件夹就好了 :smile:

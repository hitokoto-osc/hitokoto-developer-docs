# 部署实例

> 自 `v1.5.0` 您可以部署您自己的实例，这个方案十分适合访问量大，站点私密性高的需求。
> **请注意：** 我们会在未来加入统计分析服务，用于统计实例部署情况（不会保存您的请求，IP 信息）。届时，您可以自由选择关闭这个功能。

## 传统方式部署

### 安装依赖

首先您得确保您的环境中存在 `Redis`，`Node.js`，`yarn`。由于网上方法众多，这里不再过多赘述。
如果您说您是小白，啥都不知道，可以按照我之前写的文档配置环境：<https://docs.nodebb-cn.org>

### 克隆项目

在你想要的位置克隆本项目

```shell
git clone https://github.com/hitokoto-osc/hitokoto-api.git
```

### 安装包

Node.js 程序通常需要大量通过包管理安装的包来运行。本程序也不例外，因此，您需要像这样安装包：

> **请注意：** 本项目要求 `Node.js` 版本至少为 12 （当前最新的 LTS 版本）

```shell
yarn # 为了防止意外，我们需要将开发环境和生产环境的包都安装。如果您熟悉本程序的话，可以只安装生产环境的包直接部署。
```

### 启动程序

嗯，让我们试一下能不能启动：

```shell
node core -D # 让我们使用开发模式看看能不能跑得起来，程序会自动生成默认的配置文件。有关配置文件的配置，我们将在稍后一节说明。
```

你会看到屏幕在刷刷刷得刷日记，当你看到类似这样一条时，意味着程序能成功运行：`info: [core] Web Server is started, listening on port: 8000`

如果程序运行过程中发生了错误，请检查一下哪儿没搞好（例如：没启动 redis，Node.js 版本过低）。如果自己搞不定的话，可以加入我们的开发者群讨论一下。如果您确信是程序的问题的话，请尝试更新程序。如果已经最新，欢迎向我们提交 issues。

### 持久化进程

为了使我们的程序能长时间稳定运行，我们通常需要一个进程管理工具来管理进程。本例用的是 `pm2`。有关 `pm2` 的介绍网上有很多，这里就不一一赘述，只简单讲讲怎么使用（运用于本接口）
  
首先，我们需要安装 `pm2`。

```shell
yarn global add pm2
```

配置 `pm2` 自启动

```shell
pm2 startup
```

使用 `pm2` 启动语句接口服务

```shell
pm2 start core.js --name hitokoto-api
```

保存持久化列表

```shell
pm2 save
```

## 使用 Docker 运行

Docker 是目前非常流行的容器管理工具，能很方便，简单得操作实例。Docker 的相关玩法我们就不展开了，我们就介绍最方便的用法。如果您是小白的话，不妨试试这个方法。

在开始之前，我们需要在环境中安装好 Redis。如果不会的话，请看上节的那个地址的教程或者网上搜一下。

然后...

```shell
sudo docker run \
-v /path/to/your/data/dir:/usr/src/app/data \ # 请替换 /path/to/your/data/dir 为您想存储接口持久化数据的目录绝对位置
--network host \
hitokoto/api:latest
```

嗯，启动完毕。是不是很简单呢？
  
其他启动方式你可以自己摸索一下，比如说，不用 host 网络怎么运行。此外，项目也提供了 `docker-compose` 文件，您可以在仓库自行获取。

## 配置文件

以下是对常用配置的简单介绍，在实际使用中，请去除掉注解部分。

```json
{
    "name": "", // 服务名称，例如：hitokoto
    "url": "", // 服务地址，例如：https://v1.hitokoto.cn
    "api_name": "", // 服务表示，例如：cd-01-gugugu
    "server": {
        "host": "127.0.0.1", // 监听的地址
        "port": "8000" // 监听端口
    },
    "mail": { // 通知错误邮件用的，目前已废弃
        "type": "smtp",
        "host": "",
        "username": "",
        "password": "",
        "port": "",
        "encrypt": "ssl"
    },
    "database": "mysql", // 配置数据库用的，目前不再使用
    "mysql": {
        "host": "127.0.0.1",
        "database": "",
        "username": "",
        "password": "",
        "port": ""
    },
    "redis": { // 配置 Redis
        "host": "127.0.0.1", // Redis 主机名
        "port": 6379, // Redis 端口
        "password": "", // Redis 密码（如果有的话）
        "database": 0 // 数据库
    },
    "sentences_ab_switchter": { // 本节是服务 AB 异步更新的配置，如果您不知道这个是什么意思，请保持默认
        "a": 1, // a 状态对应的 redis 数据库
        "b": 2 // b 状态对应的 redis 数据库
    },
    "log_level": "info", // 日记记录级别（写入 log 文件的级别），如果没使用 -D 标识符的话，那么终端输出的级别也与此设置一致
    "remote_sentences_url": "https://cdn.jsdelivr.net/gh/hitokoto-osc/sentences-bundle@latest/", // 语句库地址，通常默认即可。如果您想使用您自己打包部署的语句库，您可以修改此项
    "compress_body": true // 是否使用 GZIP 压缩
}
```

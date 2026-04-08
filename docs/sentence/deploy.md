# 部署实例

> 自 `v1.5.0` 您可以部署您自己的实例，这个方案十分适合访问量大，站点私密性高的需求。  
> **请注意：** 实例中存在 **遥测**服务，将会收集实例的性能、错误、状态状况方面的数据，您可以自由选择关闭遥测功能。

## 传统方式部署

### 安装依赖

首先您得确保您的环境中存在 `Redis`，`Node.js`，`yarn`。由于网上方法众多，这里不再赘述。
如果您是小白，不是很明白怎么安装环境，可以参考我之前写的 NodeBB 安装文档中 **配置环境** 的部分：<https://docs.nodebb-cn.org>

**请确认：您的 yarn 版本是否大于或等于 1.22.4，如果不是——请更新。否则，项目将无法正确安装启动。**

### 克隆项目

在你想要的位置克隆本项目

```shell
git clone https://github.com/hitokoto-osc/hitokoto-api.git
# 如果您或您的机器处于国内，您可以使用这个地址代替：https://gitee.com/hitokoto-osc/hitokoto-api.git
```

### 安装包

Node.js 程序通常需要大量通过包管理安装的包来运行。本程序也不例外，因此，您需要像这样安装包：

> **请注意：** 本项目要求 `Node.js` 版本至少为 14 （当前最新的 LTS 版本）； 自 `v1.6.0` 起，项目要求使用 yarn berry 管理包依赖。

```shell
yarn # 为了防止意外，我们需要将开发环境和生产环境的包都安装。如果您熟悉本程序的话，可以只安装生产环境的包直接部署。
```

### 启动程序

嗯，让我们试一下能不能启动：

```shell
yarn start -D # 让我们使用开发模式看看能不能跑得起来，程序会自动生成默认的配置文件。有关配置文件的配置，我们将在稍后一节说明。
```

你会看到屏幕在刷刷刷得刷日记，当你看到类似这样一条时，意味着程序能成功运行：`info: [core] Web Server is started, listening on port: 8000`

如果程序运行过程中发生了错误，请检查一下哪儿没搞好（例如：没启动 redis，Node.js 版本过低）。如果自己搞不定的话，可以加入我们的开发者群讨论一下。如果您确信是程序的问题的话，请尝试更新程序。如果已经最新，欢迎向我们提交 issues。

### 持久化进程

为了使我们的程序能长时间稳定运行，我们通常需要一个进程管理工具来管理进程。本例用的是 `pm2`。有关 `pm2` 的介绍网上有很多，这里就不赘述，只简单讲讲怎么使用（运用于本接口）
  
首先，我们需要安装 `pm2`。

```shell
npm i -g pm2 # 由于项目内默认环境为 yarn v2，为了避免干扰，这里采用 NPM 安装
```

配置 `pm2` 自启动

```shell
pm2 startup
```

由于项目已经提供了配置文件，所以直接使用配置文件启动语句接口服务

```shell
pm2 start ecosystem.config.js --env production
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

下面是以bridge网络的方式启动

```shell
sudo docker run \
-v /path/to/your/data/dir:/usr/src/app/data \ # 请替换 /path/to/your/data/dir 为您想存储接口持久化数据的目录绝对位置
--network bridge \ #可以使用默认的bridge或者自己创建的网桥
-p 8000:8000 \ #可以将左边的8000修改为自己喜欢的端口号
hitokoto/api:latest
```

其他启动方式你可以自己摸索一下。

### 使用 docker-compose 启动服务



项目也提供了 `docker-compose` 文件（在仓库中），为了节约您的时间，您也可以使用一下这份配置：

```yaml
version: '3'
networks:
  hitokoto_api:
    driver: bridge

services:
  hitokoto_api:
    networks:
      - hitokoto_api
    image: hitokoto/api:release
    container_name: hitokoto_api
    hostname: hitokoto_api
    environment:
      NODE_ENV: production
      # 服务配置
      url: https://v1.hitokoto.cn # 请修改为您想要部署的域名
      api_name: sh-01-X23Hwoc # 改一个好听的标识吧
      requests.hosts: "['v1.hitokoto.cn']" # 改成你想统计的主机名列表
      redis.host: redis # Redis 连接地址，如果您使用本文件提供的 Redis 的话您无需修改此项
      redis.port: 6379 # Redis 连接端口
      # redis.password:
      # redis.database: 0
    ports:
      - 8000:8000
    links: 
      - redis
    restart: unless-stopped
    volumes: 
      - ./etc/api:/usr/src/app/data
    
  redis:
    networks:
      - hitokoto_api
    image: redis
    restart: unless-stopped
    container_name: redis
    hostname: redis
    volumes:
      - ./etc/redis.conf:/etc/redis/redis.conf # 一定要记得把 redis.conf 先放在这个位置哦
      - ./data/redis:/data
    command: redis-server /etc/redis/redis.conf
    # ports:
    #  - 6379:6379 # 如果有必要请取消注释本行
```

然后我们只需要新建个目录，比如说 `hitokoto_api`:

```
mkdir hitokoto_api && cd hitokoto_api
```

启动服务：

```
docker-compose up -d
```

:D 是不是很简单呢？嘻嘻。

## 配置文件

以下是对常用配置的简单介绍，在实际使用中，请去除掉注解部分。

```yaml
# 自 v1.6.0 起使用 yaml 格式的配置文件
name: '' # 服务名称，例如：hitokoto
url: '' # 服务地址，例如：https://v1.hitokoto.cn
api_name: '' # 服务表示，例如：cd-01-demo
server: # 配置 HTTP 服务的信息
  host: 127.0.0.1 # 监听的地址
  port: '8000' # 监听的端口
  compress_body: true # 是否使用 GZIP 压缩
redis: # 配置 Redis
  host: 127.0.0.1 # Redis 主机名
  port: 6379 # Redis 端口
  password: '' # Redis 密码
  database: 0 # Redis 数据库
sentences_ab_switcher: # 本节是服务 AB 异步更新的配置，如果您不知道这个是什么意思，请保持默认
  a: 1 # a 状态对应的 redis 数据库
  b: 2 # b 状态对应的 redis 数据库
log_level: info # 本节已废弃，输出到日记文件的一律为 Error；输出到终端由 flag `-D` 控制。
remote_sentences_url: https://cdn.jsdelivr.net/gh/hitokoto-osc/sentences-bundle@latest/ # 语句库地址，通常默认即可。如果您想使用您自己打包部署的语句库，您可以修改此项
workers: 0 # 启动 Worker 数目。0 表示启动和 CPU 核心数相同数量的 Worker
requests:
  enabled: true # 是否启用请求数目统计
  hosts: # 需要单独统计的主机名
    - v1.hitokoto.cn
    - international.v1.hitokoto.cn
    - api.a632079.me
    - api.hitokoto.cn
    - sslapi.hitokoto.cn
telemetry: # 遥测服务
  performance: true # 性能监控
  error: true # 错误报告
  usage: true # 使用报告
```

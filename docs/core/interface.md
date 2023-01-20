# 接口定义

## 用户部分

### 身份认证

::: theorem 登录接口

* 路径： `/auth/login`
* 方法： `POST`
* 身份认证：否
* 无返回：否
* **此接口存在未来变动的可能，建议定期观察可用性。**

:::

以下为该接口可用的请求参数：

| 参数       | 类型     | 规则        | 示例               | 备注   |
|----------|--------|-----------|------------------|------|
| email    | string | 必须是 Email | user@hitokoto.cn | 用户邮箱 |
| password | string | 非空        | gugugu           | 密码   |

可能存在的错误：
| 错误代码 | 原因      |
|------|---------|
| -1   | 账户或密码错误 |
| 400  | 请求参数错误  |

以下为响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "id": 4943,
            "name": "啪啪啪",
            "email": "a632079@hitokoto.cn",
            "is_suspended": 0, // 账户是否被暂停，如果被暂停的话，鉴权接口都会返回 403
            "is_admin": 0, // 账户是否是管理员
            "is_reviewer": 0, // 账户是否时审核员
            "email_verified_at": "2020-02-17 00:00:00",
            "created_from": "api",
            "created_at": "2020-02-16 18:18:16",
            "updated_at": "2020-02-16 18:29:43",
            "token": "xxxxxxxxxxxxxxxxxxxxxx" // 长度应该为 40
        }
    ],
    "ts": 1582435924917
}
```

--------------------

::: theorem 注册接口

* 路径： `/auth/register`
* 方法： `POST`
* 身份认证：否
* 无返回：否
* **此接口存在未来变动的可能，建议定期观察可用性。**
:::

以下为该接口可用的请求参数：
| 参数       | 类型     | 规则     | 示例               | 备注  |
|----------|--------|--------|------------------|-----|
| name     | string | 非空     | 皮皮喵              | 用户名 |
| password | string | 非空     | gugugu           | 密码  |
| email    | string | 非空; 邮箱 | pipi@hitokoto.cn | 邮箱  |

可能存在的错误：
| 错误代码 | 原因           |
|------|--------------|
| -1   | 邮箱已被占用       |
| -2   | 创建失败，可能是参数问题 |
| 400  | 触发校验器错误      |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "id": 4943,
            "name": "啪啪啪",
            "email": "a632079@hitokoto.cn",
            "token": "EWq9Qq8H3LCW6Jiv3vnVCIqRy5Un08sDgaTztSX4",
            "email_verified_at": null,
            "created_at": "2020-02-16T18:18:16.000000Z",
            "updated_at": "2020-02-16T18:18:16.000000Z"
        }
    ],
    "ts": 1581877097013
}
```

--------------------

::: theorem 重置密码

* 路径： `/auth/password/reset`
* 方法： `POST`
* 身份认证：否
* 无返回：否
* **此接口存在未来变动的可能，建议定期观察可用性。**
:::

以下为该接口可用的请求参数：
| 参数       | 类型     | 规则     | 示例               | 备注  |
|----------|--------|--------|------------------|-----|
| email    | string | 非空; 邮箱 | pipi@hitokoto.cn | 邮箱  |

可能存在的错误：
| 错误代码 | 原因           |
|------|--------------|
| -1   | 发信错误，可能是服务器原因。       |
| 400  | 触发校验器错误      |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [],
    "ts": 1581877220645
}
```

### 用户信息

--------------------

::: theorem 取得用户信息

* 路径： `/user`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

> **此接口无请求参数，无返回错误**

以下是一个响应示例：

```json
{
  "status": 200,
  "message": "Ok.",
  "data": [
    {
      "id": 1044,
      "name": "a632079",
      "email": "a632079@qq.com",
      "is_suspended": 0,
      "is_admin": 1,
      "is_reviewer": 0,
      "email_verified_at": "2020-02-13 19:08:45",
      "created_from": "web",
      "created_at": "2018-01-13T18:20:04.000000Z",
      "updated_at": "2020-02-22T17:06:52.000000Z"
    }
  ],
  "ts": 1582433802658
}
```

--------------------

::: theorem 取得令牌

* 路径： `/user/token`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

> **此接口无请求参数，无返回错误**

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "user": {
                "id": 1044,
                "name": "a632079",
                "email": "a632079@qq.com",
                "token": "xxxxxxxxxxxxxxxxx" // 长度应为 40
            }
        }
    ],
    "ts": 1581877469585
}
```

--------------------

::: theorem 重置令牌

* 路径： `/user/token/refresh`
* 方法： `PUT`
* 身份认证：是
* 无返回：否
:::

> **此接口无请求参数，无返回错误**

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "user": {
                "id": 4943,
                "name": "啪啪啪",
                "email": "a632079@hitokoto.cn",
                "token": "XBufVkcA3Ti0sfB8rJlVe0iQ7cpjxDvtje4zJM62"
            }
        }
    ],
    "ts": 1581877596010
}
```

--------------------

::: theorem 认证邮箱

* 路径： `/user/email/verify`
* 方法： `PUT`
* 身份认证：是
* 无返回：是
:::

> **此接口无请求参数**

可能存在的错误：
| 错误代码 | 原因          |
|------|-------------|
| -1   | 邮箱已认证       |
| -2   | 发信失败，服务器错误。 |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [],
    "ts": 1581877596010
}
```

--------------------

::: theorem 修改密码

* 路径： `/user/password`
* 方法： `PUT`
* 身份认证：是
* 无返回：是
:::

以下为该接口可用的请求参数：
| 参数           | 类型     | 规则         | 示例          | 备注  |
|--------------|--------|------------|-------------|-----|
| password     | string | 非空         | gugugugu    | 密码  |
| new_password | string | 非空;长度至少为 8 | gugugugu!!! | 新密码 |

可能出现的错误：
| 错误代码 | 原因          |
|------|-------------|
| -1   | 密码错误        |
| -2   | 无法修改，服务器问题。 |
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [],
    "ts": 1581877784046
}

```

--------------------

::: theorem 修改邮箱

* 路径： `/user/email`
* 方法： `PUT`
* 身份认证：是
* 无返回：是
* **此接口存在未来变动的可能，建议定期观察可用性。**
:::

以下为该接口可用的请求参数：
| 参数           | 类型     | 规则         | 示例          | 备注  |
|--------------|--------|------------|-------------|-----|
| email     | string | 非空；邮箱         | i@freejishu.com    | 新邮箱   |
| password  | string | 非空              | guguguguguggugu    | 登录密码  |

可能出现的错误：
| 错误代码 | 原因          |
|------|-------------|
| -1   | 邮箱被占用        |
| -2   | 密码不正确        |
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [],
    "ts": 1581877821513
}
```

--------------------

::: theorem 获取通知配置

* 路径： `/user/notification/settings`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

> **此接口无请求参数，无返回错误**

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "id": 1044,
            "name": "a632079",
            "email": "a632079@qq.com",
            "is_suspended": 0,
            "is_admin": 1,
            "is_reviewer": 0,
            "email_verified_at": "2020-02-13T11:08:45.000000Z",
            "created_from": "web",
            "created_at": "2018-01-13T18:20:04.000000Z",
            "updated_at": "2021-12-03T23:34:55.000000Z"
        }
    ],
    "ts": 1674205403715
}
```

--------------------

::: theorem 更新通知配置

* 路径： `/user/notification/settings`
* 方法： `PUT`
* 身份认证：是
* 无返回：否
:::

以下为请求参数：
| 参数                      | 类型      | 规则     | 示例   | 备注                     |
|-------------------------|---------|--------|------|------------------------|
| email_global            | boolean | 布尔; 可选 | TRUE | 全局邮箱通知设定（当为真时，覆盖子通知配置） |
| email_hitokoto_appended | boolean | 布尔; 可选 | TRUE | 成功添加一言时通知              |
| email_hitokoto_reviewed | boolean | 布尔; 可选 | TRUE | 一言审核结果通知               |
| email_poll_created      | boolean | 布尔; 可选 | TRUE | 投票创建时通知                |
| email_poll_result       | boolean | 布尔; 可选 | TRUE | 投票结果公布时通知              |
| email_poll_report_daily | boolean | 布尔; 可选 | TRUE | 每日投票数据报告               |

可能的错误：
| 错误代码 | 原因          |
|------|-------------|
| -1   | 无法修改，服务器错误。       |
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "id": 3,
            "user_id": 1044,
            "email_notification_global": 1,
            "email_notification_hitokoto_appended": 1,
            "email_notification_hitokoto_reviewed": 1,
            "email_notification_poll_created": 1,
            "email_notification_poll_result": 1,
            "email_notification_poll_daily_report": 1,
            "updated_at": "2020-02-24T10:52:05.000000Z",
            "created_at": "2020-02-24T10:39:52.000000Z"
        }
    ],
    "ts": 1582541559807
}
```

--------------------

::: theorem 获取赞过的句子

* 路径： `/user/hitokoto/like`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

以下为请求参数：
| 参数     | 类型      | 规则        | 示例 | 备注     |
|--------|---------|-----------|----|--------|
| offset | integer | >=0       | 0  | 偏移     |
| limit  | integer | [20, 200] | 20 | 句子规模限制 |

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "statistics": {
                "total": 20
            },
            "collection": [
                {
                    "uuid": "c78f853d-63ca-4687-a8fd-a498bd89a8da",
                    "hitokoto": "你知道，我以前是红色的。和我喷出的火焰一样的赤红。那些日子真是美好啊。",
                    "type": "g",
                    "from": "scp-3844",
                    "from_who": null,
                    "creator": "「❦」",
                    "creator_uid": 3191,
                    "reviewer": 0,
                    "commit_from": "web",
                    "operated_at": "2020-02-28T17:52:55.000000Z", // 操作时间
                    "created_at": "1564316816"
                },
                {
                    "uuid": "b67961ac-d89a-4e71-866f-95ca07811605",
                    "hitokoto": "萤火之光看起来比平常要更耀眼是错觉吗？今宵会成为永夜的吧。",
                    "type": "c",
                    "from": "东方永夜抄",
                    "from_who": null,
                    "creator": "Hatate",
                    "creator_uid": 1939,
                    "reviewer": 0,
                    "commit_from": "web",
                    "operated_at": "2020-02-25T16:50:18.000000Z",
                    "created_at": "1534775032"
                }
            ]
        }
    ],
    "ts": 1582919909715
}
```

--------------------

::: theorem 获取句子数据概览

* 路径： `/user/hitokoto/summary`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

> **此接口无请求参数，无返回错误**

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "statistics": { // 请求统计
                "total": 33, // 总共提交的句子数目
                "pending": 0, // 审核中的句子数目
                "refuse": 16, // 被拒绝的句子数目
                "accept": 17 // 上线的句子数目
            },
            "collections": [ // 概览集合，最多 15 句
                {
                    "hitokoto": "或许前路永夜，即便如此我也要前进，因为星光即使微弱也会为我照亮前路。",
                    "uuid": "cd3534d4-d667-4f96-b986-fc65ae28be5b",
                    "type": "a",
                    "from": "四月是你的谎言",
                    "from_who": null,
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": 1,
                    "commit_from": "web",
                    "created_at": "1579534044",
                    "status": "refuse"
                },
                {
                    "hitokoto": "身是菩提树，心如明镜台，时时勤拂拭，勿使惹尘埃。",
                    "uuid": "efab198b-099d-4721-809c-2a42423af01d",
                    "type": "g",
                    "from": "神秀",
                    "from_who": null,
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": 0,
                    "commit_from": "web",
                    "created_at": "1523580040",
                    "status": "accept"
                },
                {
                    "hitokoto": "一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。",
                    "uuid": "75ee1579-ea53-4efb-994f-0e3ec6dfe69a",
                    "type": "g",
                    "from": "三毛",
                    "from_who": null,
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": 0,
                    "commit_from": "web",
                    "created_at": "1523579910",
                    "status": "accept"
                },
                {
                    "hitokoto": "如果有来生，要做一棵树，站成永恒，没有悲欢的姿势。一半在土里安详，一半在风里飞扬，一半洒落阴凉，一半沐浴阳光，非常沉默非常骄傲，从不依靠 从不寻找。",
                    "uuid": "892f50b7-a5e1-4bce-aa52-13325872dc42",
                    "type": "g",
                    "from": "说给自己听",
                    "from_who": null,
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": 0,
                    "commit_from": "web",
                    "created_at": "1523579872",
                    "status": "accept"
                }
            ]
        }
    ],
    "ts": 1581878176495
}
```

--------------------

::: theorem 获取提交记录

* 路径： `/user/hitokoto/history`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

以下为请求参数：
| 参数     | 类型      | 规则        | 示例 | 备注     |
|--------|---------|-----------|----|--------|
| offset | integer | >=0       | 0  | 偏移     |
| limit  | integer | [20, 200] | 20 | 句子规模限制 |

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "statistics": {
                "total": 36, // 提交的句子总数
                "pending": 3, // 进行中的句子数目
                "refuse": 16, // 被驳回的句子数目
                "accept": 17 // 已入库的句子数目
            },
            "collection": [ // 句子集合，受 Offset，和 Limit 约束。默认：offset: 0, limit: 20
                {
                    "hitokoto": "你没有受伤吧，胆小鬼。",
                    "uuid": "53f7ba0a-2b11-4da3-91a4-4a2c6dc7dbb2",
                    "type": "a",
                    "from": null,
                    "from_who": null,
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": null,
                    "commit_from": "api",
                    "created_at": "1581918906",
                    "status": "pending"
                },
                {
                    "hitokoto": "身是菩提树，心如明镜台，时时勤拂拭，勿使惹尘埃。",
                    "uuid": "efab198b-099d-4721-809c-2a42423af01d",
                    "type": "g",
                    "from": "神秀",
                    "from_who": null,
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": 0,
                    "commit_from": "web",
                    "created_at": "1523580040",
                    "status": "accept"
                },
                {
                    "hitokoto": "一个人至少拥有一个梦想，有一个理由去坚强。心若没有栖息的地方，到哪里都是在流浪。",
                    "uuid": "75ee1579-ea53-4efb-994f-0e3ec6dfe69a",
                    "type": "g",
                    "from": "三毛",
                    "from_who": null,
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": 0,
                    "commit_from": "web",
                    "created_at": "1523579910",
                    "status": "accept"
                },
            ],
        }
    ],
    "ts": 1581925677740
}
```

--------------------

::: theorem 获取提交记录（审核中句子）

* 路径： `/user/hitokoto/history/pending`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

以下为请求参数：
| 参数     | 类型      | 规则        | 示例 | 备注     |
|--------|---------|-----------|----|--------|
| offset | integer | >=0       | 0  | 偏移     |
| limit  | integer | [20, 200] | 20 | 句子规模限制 |

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "total": 3, // 审核中的句子总数
            "collection": [
                {
                    "hitokoto": "你没有受伤吧，胆小鬼。",
                    "uuid": "53f7ba0a-2b11-4da3-91a4-4a2c6dc7dbb2",
                    "type": "a",
                    "from": "火影忍者",
                    "from_who": "漩涡鸣人",
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": null,
                    "commit_from": "api",
                    "created_at": "1581918906",
                    "status": "pending"
                }
            ]
        }
    ],
    "ts": 1581926001764
}
```

--------------------

::: theorem 获取提交记录（已驳回句子）

* 路径： `/user/hitokoto/history/refuse`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

以下为请求参数：
| 参数     | 类型      | 规则        | 示例 | 备注     |
|--------|---------|-----------|----|--------|
| offset | integer | >=0       | 0  | 偏移     |
| limit  | integer | [20, 200] | 20 | 句子规模限制 |

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "total": 16, // 拒绝的句子总数
            "collection": [
                {
                    "hitokoto": "蕾姆，蕾姆，看来是个变态呢？！",
                    "uuid": "031bedab-54d9-430e-a767-b55135a8a3c9",
                    "type": "a",
                    "from": "从零开始的异世界生活",
                    "from_who": null,
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": 1,
                    "commit_from": "web",
                    "created_at": "1520850598",
                    "status": "refuse"
                },
                ...
            ]
        }
    ],
    "ts": 1581926276333
}
```

--------------------

::: theorem 获取提交记录（已上线句子）

* 路径： `/user/hitokoto/history/accept`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

以下为请求参数：
| 参数     | 类型      | 规则        | 示例 | 备注     |
|--------|---------|-----------|----|--------|
| offset | integer | >=0       | 0  | 偏移     |
| limit  | integer | [20, 200] | 20 | 句子规模限制 |

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "total": 17, // 已上线的句子数目
            "collection": [
                {
                    "hitokoto": "我要这天，再遮不住我眼，要这地，再埋不了我心，要这众生，都明白我意，要那诸佛，都烟消云散!",
                    "uuid": "e6e4051b-f447-4525-b6f7-12d6626f7e1a",
                    "type": "d",
                    "from": "悟空传",
                    "from_who": null,
                    "creator": "a632079",
                    "creator_uid": 1044,
                    "reviewer": 0,
                    "commit_from": "web",
                    "created_at": "1523579110",
                    "status": "accept"
                },
                ...
            ]
        }
    ],
    "ts": 1581926366834
}
```

### 喜爱接口

--------------------

::: theorem 获得句子喜爱数据

* 路径： `/like`
* 方法： `GET`
* 身份认证：否
* 无返回：否
* **此接口未来可能变动，建议定期观察。**
:::

以下为请求参数：
| 参数     | 类型      | 规则        | 示例 | 备注     |
|--------|---------|-----------|----|--------|
| sentence_uuid | string | uuid     |  34662c58-8eba-4757-a637-c7c11e9f537e | 句子 UUID     |

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "sets": [
                {
                    "user_id": 0, // 用户标识，0 代表游客
                    "created_time": "2016-09-10T03:38:17.000000Z"
                },
                ...
            ],
            "total": 20
        }
    ],
    "ts": 1582539956779
}
```

--------------------

::: theorem 喜爱句子

* 路径： `/like`
* 方法： `POST`
* 身份认证：是（但是不鉴权也是可以用的）
* 无返回：否
* **此接口未来可能变动，建议定期观察。**
:::

以下为请求参数：
| 参数     | 类型      | 规则        | 示例 | 备注     |
|--------|---------|-----------|----|--------|
| sentence_uuid | string | uuid     |  34662c58-8eba-4757-a637-c7c11e9f537e | 句子 UUID     |

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| 400  | 触发校验器错误     |
| -1   | 已经赞过了        |
| -2   | 句子不存在        |

以下是一个响应示例：

```json
{
    "status":200,
    "message":"Ok.",
    "data":[
        {
            "ip":"157.0.165.97", // 客户端 IP
            "user_id":0 // 0 代表游客，其他代表用户标识
        }
    ],
    "ts":1582540053746
}
```

--------------------

::: theorem 撤回喜爱

* 路径： `/like/cancel`
* 方法： `POST`
* 身份认证：是
* 无返回：是
* **此接口未来可能变动，建议定期观察。**
:::

以下为请求参数：
| 参数     | 类型      | 规则        | 示例 | 备注     |
|--------|---------|-----------|----|--------|
| sentence_uuid | string | uuid     |  34662c58-8eba-4757-a637-c7c11e9f537e | 句子 UUID     |

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status":200,
    "message":"Ok.",
    "data":[],
    "ts":1582566052999
}
```

### 句子相关
--------------------

::: theorem 获取审核标记列表

* 路径： `/mark`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

> **此接口无请求参数**

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "id": 1,
            "text": "绝妙好辞，字字珠玑",
            "level": "info",
            "property": 1,
            "updated_at": "2020-03-17T22:44:21.000000Z",
            "created_at": "2020-03-17T22:44:21.000000Z"
        },
        {
            "id": 2,
            "text": "不符合社会主义核心价值观",
            "level": "danger",
            "property": 2,
            "updated_at": "2020-03-17T22:43:59.000000Z",
            "created_at": "2020-03-17T22:43:59.000000Z"
        },
        {
            "id": 3,
            "text": "语言低俗/庸俗/恶劣",
            "level": "danger",
            "property": 2,
            "updated_at": "2020-03-17T22:44:41.000000Z",
            "created_at": "2020-03-17T22:44:41.000000Z"
        },
        {
            "id": 4,
            "text": "没有修改价值",
            "level": "warning",
            "property": 2,
            "updated_at": "2020-03-17T22:46:52.000000Z",
            "created_at": "2020-03-17T22:46:52.000000Z"
        },
        {
            "id": 5,
            "text": "句子过长",
            "level": "warning",
            "property": 2,
            "updated_at": "2020-03-17T22:47:09.000000Z",
            "created_at": "2020-03-17T22:47:09.000000Z"
        },
        {
            "id": 6,
            "text": "存在标点符号缺失/错误使用",
            "level": "warning",
            "property": 3,
            "updated_at": "2020-03-17T22:48:58.000000Z",
            "created_at": "2020-03-17T22:48:58.000000Z"
        },
        {
            "id": 7,
            "text": "存在换行/空格现象",
            "level": "warning",
            "property": 3,
            "updated_at": "2020-03-17T22:47:53.000000Z",
            "created_at": "2020-03-17T22:47:53.000000Z"
        },
        {
            "id": 8,
            "text": "来源错误或误用",
            "level": "danger",
            "property": 3,
            "updated_at": "2020-03-17T22:49:09.000000Z",
            "created_at": "2020-03-17T22:49:09.000000Z"
        },
        {
            "id": 9,
            "text": "作者错误或误用",
            "level": "danger",
            "property": 3,
            "updated_at": "2020-03-17T22:49:19.000000Z",
            "created_at": "2020-03-17T22:49:19.000000Z"
        },
        {
            "id": 10,
            "text": "作者/来源填写有误（位置不对）",
            "level": "info",
            "property": 3,
            "updated_at": "2020-03-17T22:50:09.000000Z",
            "created_at": "2020-03-17T22:50:09.000000Z"
        },
        {
            "id": 11,
            "text": "句子存在错误",
            "level": "danger",
            "property": 3,
            "updated_at": "2020-03-17T22:50:25.000000Z",
            "created_at": "2020-03-17T22:50:25.000000Z"
        },
        {
            "id": 12,
            "text": "句子信息存疑",
            "level": "warning",
            "property": 3,
            "updated_at": "2020-03-17T22:50:41.000000Z",
            "created_at": "2020-03-17T22:50:41.000000Z"
        },
        {
            "id": 13,
            "text": "分类有误",
            "level": "danger",
            "property": 3,
            "updated_at": "2020-03-17T22:50:55.000000Z",
            "created_at": "2020-03-17T22:50:55.000000Z"
        },
        {
            "id": 14,
            "text": "暂不符合一言收录规则",
            "level": "danger",
            "property": 2,
            "updated_at": "2020-04-02T08:00:36.000000Z",
            "created_at": "2020-04-02T08:00:36.000000Z"
        },
        {
            "id": 15,
            "text": "无意义、水",
            "level": "danger",
            "property": 2,
            "updated_at": "2020-04-02T08:01:52.000000Z",
            "created_at": "2020-04-02T08:01:52.000000Z"
        },
        {
            "id": 16,
            "text": "需要管理员直接介入",
            "level": "danger",
            "property": 3,
            "updated_at": "2020-04-02T08:02:45.000000Z",
            "created_at": "2020-04-02T08:02:45.000000Z"
        },
        {
            "id": 17,
            "text": "来源/作者填写有误（不应是“未知”/“不确定”等）",
            "level": "warning",
            "property": 3,
            "updated_at": "2020-04-02T16:33:24.000000Z",
            "created_at": "2020-04-02T16:33:24.000000Z"
        },
        {
            "id": 18,
            "text": "文本中含有广告/推广信息",
            "level": "danger",
            "property": 2,
            "updated_at": "2020-04-02T16:33:21.000000Z",
            "created_at": "2020-04-02T16:33:21.000000Z"
        }
    ],
    "ts": 1674205665433
}
```

--------------------

::: theorem 提交一言

* 路径： `/hitokoto/append`
* 方法： `POST`
* 身份认证：是
* 无返回：否
:::

以下为请求参数：
| 参数       | 类型     | 规则          | 示例          | 备注 |
|----------|--------|-------------|-------------|----|
| from     | string | 非空          | 火影忍者        | 来源 |
| from_who | string | 可选          | 漩涡鸣人        | 作者 |
| hitokoto | string | 非空          | 你没有受伤吧，胆小鬼。 | 句子 |
| type     | string | 非空；符合使用说明定义 | a           | 分类 |

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| -1   | 无法提交，服务器问题。       |
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "uuid": "fc167686-268e-4611-9266-c09db6e3bb3f",
            "hitokoto": "你没有受伤吧，胆小鬼。",
            "type": "a",
            "from": "火影忍者",
            "from_who": "漩涡鸣人",
            "creator": "a632079",
            "creator_uid": 1044,
            "commit_from": "api",
            "created_at": "1581926206",
            "id": 2818
        }
    ],
    "ts": 1581926206137
}
```

--------------------

::: theorem 查看句子

* 路径： `/hitokoto/:uuid`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

> **此接口无请求参数**

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| -1   | 句子不存在       |
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "hitokoto": "英雄意味着强大，英雄意味着孤独，最后一幕一定是英雄渐行渐远，我的英雄也是那样的存在。",
            "uuid": "ddcfb677-4d67-4938-9aec-77448eeb5b6f",
            "type": "a",
            "from": "四月是你的谎言",
            "from_who": null,
            "creator": "yeye",
            "creator_uid": 29,
            "reviewer": 0,
            "commit_from": "web",
            "created_at": "1473562069",
            "status": "accept"
        }
    ],
    "ts": 1581879533419
}
```

--------------------

::: theorem 查看句子审核标记

* 路径： `/hitokoto/:uuid/mark`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

> **此接口无请求参数**

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status":200,
    "message":"Ok.",
    "data":[ // 返回带有审核标识的数组，如果句子不存在或者无记录为空数组
        4,
        6,
        13
    ],
    "ts":1584503923373
}
```

--------------------

::: theorem 提交评分

* 路径： `/hitokoto/:uuid/score`
* 方法： `POST`
* 身份认证：是
* 无返回：否
:::

以下为请求参数：
| 参数       | 类型     | 规则          | 示例          | 备注 |
|----------|--------|-------------|-------------|----|
| score     | integer | [0, 5]          | 5        | 分数 |
| comment     | string | 可选         | 这个句子真棒！        | 评价 |

::: danger
如果低于 3 分（不包含 0 分），而无评价的话，视为无效评分！**此规则待商榷**
:::

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| -1   |   用户已打分     |
| -2   | 句子不存在或未上线       |
| 500   | 无法提交，服务器问题。       |
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "score": "5",
            "comment": "很棒棒哦！",
            "sentence_uuid": "ddcfb677-4d67-4938-9aec-77448eeb5b6f",
            "sentence_score": {
                "total": 5,
                "participants": 1,
                "average": 5
            }
        }
    ],
    "ts": 1581879614503
}
```

--------------------

::: theorem 查看句子评分

* 路径： `/hitokoto/:uuid/score`
* 方法： `GET`
* 身份认证：是
* 无返回：否
:::

> **此句子无请求参数**

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| -1   | 句子不存在或未上线       |
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "id": 1,
            "sentence_uuid": "ddcfb677-4d67-4938-9aec-77448eeb5b6f",
            "score": {
                "total": 5,
                "participants": 1,
                "average": 5
            },
            "logs": [
                {
                    "id": 1,
                    "sentence_uuid": "ddcfb677-4d67-4938-9aec-77448eeb5b6f",
                    "user_id": 1044,
                    "score": 5,
                    "comment": "很棒棒哦！",
                    "updated_at": "2020-02-16T11:00:14.000000Z",
                    "created_at": "2020-02-16T11:00:14.000000Z"
                }
            ],
            "updated_at": "2020-02-16T11:00:14.000000Z",
            "created_at": "2020-02-16T11:00:14.000000Z"
        }
    ],
    "ts": 1581918559301
}
```

--------------------

::: theorem 报告句子问题

* 路径： `/hitokoto/:uuid/report`
* 方法： `POST`
* 身份认证：是
* 无返回：否
:::

以下为请求参数：
| 参数       | 类型     | 规则          | 示例          | 备注 |
|----------|--------|-------------|-------------|----|
| comment | string | 非空          |    个人感觉没啥意义。     | 报告原因 |

::: danger
请勿尝试无意义举报，多次无意义举报将封禁账户。
:::

可能触发的错误：
| 错误代码 | 原因          |
|------|-------------|
| -1   | 句子不存在或未上线       |
| 400  | 触发校验器错误     |

以下是一个响应示例：

```json
{
    "status": 200,
    "message": "Ok.",
    "data": [
        {
            "sentence_uuid": "76f9fa17-ecda-4dd1-8e4e-e5fdee2bd7ee",
            "user_id": 1044,
            "comment": "这个句子缺句号！请管理员看一下！",
            "updated_at": "2020-02-17T05:56:19.000000Z",
            "created_at": "2020-02-17T05:56:19.000000Z",
            "id": 2
        }
    ],
    "ts": 1581918979563
}
```

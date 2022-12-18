# 使用示例

* <https://v1.hitokoto.cn/> （从7种分类中随机抽取）
* <https://v1.hitokoto.cn/?c=b> （请求获得一个分类是漫画的句子）
* <https://v1.hitokoto.cn/?c=f&encode=text> （请求获得一个来自网络的句子，并以纯文本格式输出）

## 网页

### 演示
> **请注意：**  
> 本例所有用法均使用 ES6 语法。如果您想考虑兼容非现代浏览器（如：IE），需要您自行转换。

我们假设您的网页中存在一个块级元素用于显示一言的文本内容，且我们想让它能跳转到一言的指定页面用于后续的收藏、反馈。

```html
<!-- 请注意，以下的示例包含超链接，您可能需要手动配置样式使其不变色。如果您嫌麻烦，可以移除。 -->
<p id="hitokoto">
  <a href="#" id="hitokoto_text">:D 获取中...</a>
</p>
```
那我们可以在 `<script></script>` 中 或者 `.js` 文件中使用我们的接口：

:::code-group

```html [接口选择器]
<!-- 本例不能添加链接内容，放在此处只是因为此接口比较方便，也许能够解决大部分的需求-->
<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
```

```js [Fetch API]
// 请注意此 Web API 的兼容性，
// 不支持 IE, iOS Safari < 10.1，
// 完整支持列表参考：https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('https://v1.hitokoto.cn')
  .then(response => response.json())
  .then(data => {
    const hitokoto = document.querySelector('#hitokoto_text')
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
    hitokoto.innerText = data.hitokoto
  })
  .catch(console.error)
```

```js [Axios]
axios.get('https://v1.hitokoto.cn')
  .then(({ data }) => {
    const hitokoto = document.querySelector('#hitokoto_text')
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
    hitokoto.innerText = data.hitokoto
  })
  .catch(console.error)
```

```js [jQuery]
// 如果你的站点使用了 jQuery,
// 如果想使用的 jQuery 版本 >= 3.x, 你必须引入完整的 jQuery，
// 如果你没此操作权限，请考虑其他引入方式。
// 一般来说，我们不推荐使用 jQuery Ajax。更推荐使用 Fetch API 或者 Axios
$.ajax({
  type: 'GET',
  url: 'https://v1.hitokoto.cn',
  dataType: 'jsonp',
  jsonp: 'callback',
  jsonpCallback: 'hitokoto',
  success (data) {
    $('#hitokoto_text').attr('href', `https://hitokoto.cn/?uuid=${data.uuid}`)
    $('#hitokoto_text').text(data.hitokoto)
  },
  error (jqXHR, textStatus, errorThrown) {
    // 错误信息处理
    console.error(textStatus, errorThrown)
  }
})
```

```js [XMLHttpRequest]
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://v1.hitokoto.cn');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.responseText);
    const hitokoto = document.querySelector('#hitokoto_text');
    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
    hitokoto.innerText = data.hitokoto;
  }
}
xhr.send();
```
:::

我们之所以推荐基于 `Promise` 的 API，是因为自 ES2017(ES8) 引入 `async/await` 后，您可以类似这样使用：

```js
async function fetchHitokoto() {
  const response = await fetch('https://v1.hitokoto.cn')
  const { uuid, hitokoto: hitokotoText } = await response.json()
  const hitokoto = document.querySelector('#hitokoto_text')
  hitokoto.href = `https://hitokoto.cn/?uuid=${uuid}`
  hitokoto.innerText = hitokotoText
}
```

这样是不是更符合其他语言的同步使用的直觉？

### 完整示例（以 `Fetch API` 为例）

```html
<p id="hitokoto">
  <a href="#" id="hitokoto_text">:D 获取中...</a>
</p>
<script>
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.querySelector('#hitokoto_text')
      hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)
</script>
```

## 插件：网易云的使用

### JavaScript

```javascript
// 本示例需要浏览器支持 Promise，fetch 以及 ES6 语法。
function fetch163Playlist(playlistId) {
  return new Promise((ok, err) => {
    fetch(`https://v1.hitokoto.cn/nm/playlist/${playlistId}`)
      .then(response => response.json())
      .then(data => {
        const arr = [];
        data.playlist.trackIds.forEach(function (value) { // 参考：https://neteasecloudmusicapi.vercel.app/#/?id=%e8%8e%b7%e5%8f%96%e6%ad%8c%e5%8d%95%e8%af%a6%e6%83%85
          arr.push(value.id);
        });
        return arr;
      })
      .then(fetch163Songs)
      .then(ok)
      .catch(err);
  });
}

function fetch163Songs(Ids) {
  return new Promise(function (ok, err) {
    let ids;
    switch (typeof Ids) {
      case 'number':
        ids = [Ids];
        break;
      case 'object':
        if (!Array.isArray(Ids)) {
          err(new Error('Please enter array or number'));
          return;
        }
        ids = Ids;
        break;
      default:
        err(new Error('Please enter array or number'));
        return;
        break;
    }  
    fetch(`https://v1.hitokoto.cn/nm/summary/${ids.join(',')}?lyric=true&common=true`)
      .then(response => response.json())
      .then(data => {
        var songs = [];
        data.songs.forEach(function (song) {
          songs.push({
            name: song.name,
            url: song.url,
            artist: song.artists.join('/'),
            album: song.album.name,
            pic: song.album.picture,
            lrc: song.lyric
          });
        });
        return songs;
      })
      .then(ok)
      .catch(err);
  });
}

// 使用测试
fetch163Playlist(2158283120)
  .then(console.log)
  .catch(console.error);

fetch163Songs([28391863, 22640061])
  .then(console.log)
  .catch(console.error);
```

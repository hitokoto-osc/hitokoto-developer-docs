# 使用示例

* <https://v1.hitokoto.cn/> （从7种分类中随机抽取）
* <https://v1.hitokoto.cn/?c=b> （请求获得一个分类是漫画的句子）
* <https://v1.hitokoto.cn/?c=f&encode=text> （请求获得一个来自网络的句子，并以纯文本格式输出）

## 网页

> **请注意：**  
> 本例所有写法（除 XMLHttpRequest 示例）皆使用 ES6 语法。如果您想考虑兼容非现代浏览器（如：IE），需要您自行转换。

```html
<p id="hitokoto">:D 获取中...</p>
<!-- 以下写法，选取一种即可 -->

<!-- 现代写法，推荐(不支持 IE) -->
<script>
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto')
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)
</script>

<!-- 如果你配置了 axios -->
<script>
  axios.get('https://v1.hitokoto.cn')
    .then(({ data }) => {
      const hitokoto = document.getElementById('hitokoto')
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)
</script>

<!-- 如果你的站点使用了 jQuery(如果是 JQ 3.x 以及更新的版本， 你得使用完整版的 JQ)， 那么你可以... -->
<script>
  $.ajax({
    type: 'GET',
    url: 'https://v1.hitokoto.cn',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'hitokoto',
    success (data) {
      $('#hitokoto').text(data.hitokoto)
    },
    error (jqXHR, textStatus, errorThrown) {
      // 错误信息处理
      console.error(textStatus, errorThrown)
    }
  })
</script>
<!-- P.S 我们不推荐使用 jQuery Ajax。 推荐使用 fetch api 或者 axios.js-->

<!-- 老式写法，兼容性最好; 支持 IE -->
<script>
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.hitokoto.cn');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto;
    }
  }
  xhr.send();
</script>

<!-- 新 API 方法， 十分简洁 -->
<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
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
        data.playlist.tracks.map(function (value) {
          arr.push(value.id);
        });
        return arr;
      })
      .then(ids => {
        return fetch163Songs(ids);
      })
      .then(ok)
      .catch(e);
  });
}

function fetch163Songs(Ids) {
  return new Promise(function (ok, err) {
    let ids;
    switch (typeof ids) {
      case 'number':
        ids = [ids];
        break;
      case 'object':
        if (!Array.isArray(ids)) {
          err(new Error('Please enter array or number'));
          return;
        }
        ids = ids;
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
        data.songs.map(function (song) {
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

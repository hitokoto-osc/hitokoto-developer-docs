# 使用示例

* <https://v1.hitokoto.cn/> （从7种分类中随机抽取）
* <https://v1.hitokoto.cn/?c=b> （请求获得一个分类是漫画的句子）
* <https://v1.hitokoto.cn/?c=f&encode=text> （请求获得一个来自网络的句子，并以纯文本格式输出）

## 网页

```html
<p id="hitokoto">:D 获取中...</p>
<!-- 以下写法，选取一种即可 -->

<!-- 现代写法，推荐(不支持 IE) -->
<script>
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto;
    })
    .catch(err => console.error(err));
</script>

<!-- 如果你配置了 Axios.js -->
<script>
  axios.get('https://v1.hitokoto.cn')
    .then(({data}) => {
      const hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto;
    })
    .catch(err => console.error(err))
</script>

<!-- 如果你的站点使用了 jQuery(如果是 JQ 3.x 以及更新的版本， 你得使用完整版的 JQ)， 那么你可以... -->
<script>
  $.ajax({
    type: 'GET',
    url: 'https://v1.hitokoto.cn',
    dataType: 'jsonp',
    jsonp: 'callback',
    jsonpCallback: 'hitokoto',
    success: function (data) {
      $('#hitokoto').text(data.hitokoto);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // 错误信息处理
      console.error(textStatus, errorThrown);
    }
  });
</script>
<!-- P.S 我们依然不推荐使用 jQuery Ajax。 推荐使用 fetch Api 或者 Axios.js-->

<!-- 老式写法，兼容性最忧; 支持 IE -->
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
// 本示例需要浏览器支持 Promise 以及 fetch。
function fetch163Playlist(playlist_id) {
  return new Promise((ok, err) => {
    fetch("https://v1.hitokoto.cn/nm/playlist/" + playlist_id)
      .then(response => response.json())
      .then(data => {
        var arr = [];
        data.playlist.tracks.map(function (value) {
          arr.push(value.id);
        });
        return arr;
      })
      .then(ids => {
        return fetch163Songs(ids);
      })
      .then(data => ok)
      .catch(e => err);
  });
}

function fetch163Songs(IDS) {
  return new Promise(function (ok, err) {
    var ids;
    switch (typeof IDS) {
      case 'number':
        ids = [IDS];
        break;
      case 'object':
        if (!Array.isArray(IDS)) {
          err(new Error('Please enter array or number'));
        }
        ids = IDS;
        break;
      default:
        err(new Error('Please enter array or number'));
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
      .then(result => ok)
      .catch(e => err);
  });
}

// 使用测试
fetch163Playlist(2158283120)
  .then(data => console.log)
  .catch(err => console.error);

fetch163Songs([28391863, 22640061])
  .then(data => console.log)
  .catch(err => console.error);
```

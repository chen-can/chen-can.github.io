# 功能

## 加载在线字体文件

```javascript
function loadFont() {
    let url = "https://resource.hellofont.cn/fonts/exhibition2/7240.ttf"
    let font = 'f-exhibition2-7240'
    let prefont = new FontFace(
        font,
        `url(${url})`
    );
    prefont.load().then(function(loaded_face) {
        document.fonts.add(loaded_face);
        document.body.style.fontFamily = document.body.style.fontFamily + font;
    })
}
```

## 下载一个链接 

```javascript
function download(link, name) {
    if (!name) {
        name = link.slice(link.lastIndexOf('/') + 1)
    }
    let eleLink = document.createElement('a')
    eleLink.download = name
    eleLink.style.display = 'none'
    eleLink.href = link
    document.body.appendChild(eleLink)
    eleLink.click()
    document.body.removeChild(eleLink)
}

download('http://111.229.14.189/file/1.xlsx')
```

## 雪碧图

```vue
<template>
   <div :style="bgPosition(1, 50)"></div>
</template>

<script>
export default {
  data: () => ({
    userSprite: {
      1: {
        "default": [152, 486],
        "active": [302, 482],
        "sid": 1
      },
      2: {
        "default": [152, 636],
        "active": [606, 152],
        "sid": 2
      },
    },
    sid: 2
  }),
  computed: {
    bgPosition() {
      return (sid, iconWidth = 146, iconHeight = iconWidth) => {
        let [spriteIconX, spriteIconY] = this.sid == sid ? this.userSprite[sid].active : this.userSprite[sid].default
        let spriteWidth = 904;
        let spriteHeight = 900;
        let spriteIconWidth = 146;
        let spriteIconHeight = 146;
        return {
          width: `${spriteIconWidth * (iconWidth / spriteIconWidth)}px`,
          height: `${spriteIconHeight * (iconHeight / spriteIconHeight)}px`,
          background: `url(${require('@/assets/user.png')}) no-repeat`,
          'background-position': `${(spriteIconX / (spriteWidth - spriteIconWidth)) * 100}% ${(spriteIconY / (spriteHeight - spriteIconHeight)) * 100}%`,
          'background-size': `${spriteWidth * (iconWidth / spriteIconWidth)}px  ${spriteHeight * (iconHeight / spriteIconHeight)}px`,
        }
      }
    }
  },
};
</script>
```

## 设置手机桌面图标

```html
<link rel="apple-touch-icon" href="<%= BASE_URL %>logo.png">
<link rel="apple-touch-icon-precomposed" href="<%= BASE_URL %>logo.png">
<link rel="apple-touch-startup-image" href="<%= BASE_URL %>logo.png">
<link rel="shortcut icon" type="image/ico" href="<%= BASE_URL %>logo.png">
```

## 遮罩时，禁止背景滚动

```html
<div class="mask" @touchumove.self.prevent></div>
```

## 二三倍图 scss方法

```scss
.bg-image($url) {
  background: ~"url(${url}@2x.png)" no-repeat center;
  background-size: 100%;
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background: ~"url(${url}@3x.png)" no-repeat center;
    background-size: 100%;
  }
}
```

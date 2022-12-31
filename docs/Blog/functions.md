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

## 国际化 csv转i18n

> [i18n官网](https://kazupon.github.io/vue-i18n/zh/started.html)

```javascript
// main.js
import i18n from './i18n'

new Vue({
    i18n,
    render: h => h(App)
}).$mount('#app')
```

```javascript
// i18n.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from "axios";
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: localStorage.getItem('locale') || 'zh-cn', //设置默认语言
});

i18n.setI18nLanguage = (lang) => {
    i18n.locale = lang
    document.querySelector('html').setAttribute('lang', lang) //设置html的语言
    localStorage.setItem('locale', lang)
}
class Translate {
    constructor() {
        this.messages = {};
        this.loadedLanguages = [];
    }
    parseSheet(data) {
        data.forEach((row, rowIndex) => {
            let key;
            row.forEach((col, colIndex) => {
                // 第一行，文件名
                if (rowIndex === 0 && colIndex !== 0) {
                    if (!(col in this.messages)) {
                        this.messages[col] = {};
                        this.loadedLanguages.push(col);
                    }
                }

                if (rowIndex >= 1) {
                    if (colIndex === 0) {
                        key = col;
                    } else {
                        const lang = this.loadedLanguages[colIndex - 1];
                        this.messages[lang][key] = col;
                    }
                }
            })
        });

        return this;
    }
}

axios.get('/language.csv').then(({
    data
}) => {
    i18n.setI18nLanguage(i18n.locale)
    let sheets = CSVToArray(data);
    let translate = new Translate().parseSheet(sheets);
    for (const key in translate.messages) {
        if (Object.hasOwnProperty.call(translate.messages, key)) {
            const message = translate.messages[key];
            i18n.setLocaleMessage(key, message)
        }
    }
})

function CSVToArray(strData, strDelimiter) {
    strDelimiter = (strDelimiter || ",");
    let objPattern = new RegExp(
        (
            "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
            "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
            "([^\"\\" + strDelimiter + "\\r\\n]*))"
        ),
        "gi"
    );

    let arrData = [
        []
    ];
    let arrMatches = null;
    let strMatchedValue = ''
    while (arrMatches = objPattern.exec(strData)) {
        let strMatchedDelimiter = arrMatches[1];
        if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
            arrData.push([]);
        }

        if (arrMatches[2]) {
            strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
        } else {
            strMatchedValue = arrMatches[3];
        }
        arrData[arrData.length - 1].push(strMatchedValue);
    }

    return arrData;
}

export default i18n;
```

```vue
<template>
    <div>
        {{ $t('apple') }}
    </div>
</template>

<script>
export default {
    methods: {
      // 切换语言
        handleChange(lang) {
            this.$i18n.setI18nLanguage(lang)
        },
    },
};
</script>
```

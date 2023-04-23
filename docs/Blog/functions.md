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

## vue国际化 csv转i18n

> [i18n官网](https://kazupon.github.io/vue-i18n/zh/started.html)

```shell
yarn add vue-i18n@^7.8.0   
```

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

## vue生成当日打包次数版本号

```javascript
// vue.config.js
const fs = require('fs');
const IS_PROD = process.env.NODE_ENV === "production";
process.env.VUE_APP_VERSION = require('./package.json').version
if (IS_PROD) {
    const resetTodayBuildCount = root => {
        return {
            // 获取配置信息的日期和构建次数
            getSettingData(root, fileName) {
                let rgx = [
                    /const TODAY_BUILD_COUNT = \d*/,
                    /const DATE = \d*/
                ];
                return new Promise((resolve) => {
                    // 读取文件
                    fs.readFile(root, 'utf-8', (emarr, data) => {
                        let todayBuildCount = data.match(rgx[0])[0];
                        let date = data.match(rgx[1])[0];
                        resolve({
                            content: data,
                            data: {
                                todayBuildCount,
                                date
                            }
                        });
                    });
                });
            },
            async run() {
                /**
                 * 1.获取配置信息的日期和构建次数
                 * 2.判断当前日期是否小于写入的日期
                 * 3.将配置信息的内容替换
                 */
                let {
                    content,
                    data
                } = await this.getSettingData(root);
                const date = +data.date.split("=")[1]
                const count = +data.todayBuildCount.split("=")[1]

                const TODAY_FORMATE = +getFormatDate({
                    date: new Date(),
                    pattern: 4
                })
                const todayBuildCount = new Date(TODAY_FORMATE) > new Date(date) ? 1 : count + 1

                const newTodayBuildCount = `const TODAY_BUILD_COUNT = ${todayBuildCount}`;
                const newDate = `const DATE = ${TODAY_FORMATE}`
                content = content.replace(data.todayBuildCount, newTodayBuildCount).replace(data.date, newDate)
                // 写入文件
                fs.writeFile(root, content, (err) => {
                    console.log(err)
                })
            }
        }
    }
    resetTodayBuildCount('./src/setting.js').run();

}
// src/setting.js
const VERSION_FORMATE = process.env.VUE_APP_VERSION
const DATE = 230117
const TODAY_BUILD_COUNT = 1
export const VERSION = `V ${VERSION_FORMATE} ${DATE}-${TODAY_BUILD_COUNT}` // 版本号
```

## vue全局方法的两种方式

```javascript
// 第一种
// main.js 把方法挂到vue实例上（不推荐）会造成vue实例过大，业务逻辑和框架逻辑混在一起
import api from './api'
Vue.prototype.$api = api
// 第二种
// vue.config.js (推荐)
const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                UTILS: [path.resolve(__dirname, './src/utils/Utils.js'), 'default'], // 定义的全局函数类
                TOAST: [path.resolve(__dirname, './src/utils/Toast.js'), 'default'], // 定义的全局Toast弹框方法
                LOADING: [path.resolve(__dirname, './src/utils/Loading.js'), 'default'] // 定义的全局Loading方法
                API: [path.resolve(__dirname, './src/apis/apis.js'), 'default'] // 定义的全局API方法
            })
        ]
    },
}
// eslintrc.js
module.exports = {
    "globals": {
        "UTILS": true,
        "TOAST": true,
        "LOADING": true
    }
    // ...省略N行ESlint的配置
}
```

## vue拖拽悬浮按钮

```javascript
// main.js 
import '@/directive/drag'
```

```javascript
// directive/drag/index.js
import Vue from 'vue';
// 拖拽结束自动靠边停方法
import autoStop from './methods';
// 保存初始状态的变量
let startX, startY, firstTime, lastTime, isApp
// 拖拽开始事件
const dragStart = (event, el) => {
    firstTime = new Date().getTime()
    // 1、如果元素上存在自定义的私有属性__VueDragTimer__，则清空该定时器
    // 2、__VueDragTimer__：自定义定时器属性，首尾双下划线挂载于元素上，方便在解绑指令时(unbind)清除定时器,并可删除属性
    if (el.__VueDragTimer__) clearInterval(el.__VueDragTimer__);
    // 通过touch属性计算获取初始位置
    const {
        pageX,
        pageY
    } = isApp ? event.touches[0] : event;
    const {
        // 元素距离限制区域上左距离,此变量需要实时获取
        offsetTop: eT,
        offsetLeft: eL,
    } = el;
    startX = parseInt(pageX - eL);
    startY = parseInt(pageY - eT);
}
// 拖动事件
const dragMove = (event, el, pW, pH, pT, pL, eW, eH) => {
    // 添加阻止默认事件，防止影响到元素点击事件
    event.preventDefault();
    // 获取touch事件，计算并实时改变元素位置(拖拽效果)
    const {
        pageX,
        pageY
    } = isApp ? event.touches[0] : event;
    let movePageX = parseInt(pageX - startX);
    let movePageY = parseInt(pageY - startY);
    // 超出限制区域，禁止越界
    if (movePageX <= pL) {
        movePageX = pL;
    } else if (movePageX >= pW - eW + pL) {
        movePageX = pW - eW + pL;
    }
    if (movePageY <= pT) {
        movePageY = pT;
    } else if (movePageY >= pH - eH + pT) {
        movePageY = pH - eH + pT;
    }
    el.style.left = movePageX + 'px';
    el.style.top = movePageY + 'px';
}
// 拖拽结束，自动停靠
const dragStop = (event, el) => {
    lastTime = new Date().getTime()
    autoStop(el);
    if (!isApp) {
        document.onmousemove = document.onmouseup = null;
        // 用时间差判断是拖拽还是点击
        el.setAttribute('data-flag', (lastTime - firstTime) > 200)
    }
}

Vue.directive('drag', {
    inserted(el) {
        Vue.nextTick(() => {
            const {
                // 存在定位的父级元素及其宽高（即元素可移动限制区域，先假设为parentNode，不是相对父级定位可以再调整）
                parentNode: {
                    clientWidth: pW,
                    clientHeight: pH,
                    offsetTop: pT,
                    offsetLeft: pL,
                    offsetWidth: xW
                },
                // 元素计算宽高(如果停靠不想完全靠边，可给元素添加对应padding)
                offsetWidth: eW,
                offsetHeight: eH,
                dataset: {
                    app
                }
            } = el;

            isApp = app === 'true'

            if (!isApp) {
                el.style.position = 'absolute';
                el.style.cursor = 'move';
            }

            if (isApp) {
                el.addEventListener('touchstart', event => dragStart(event, el));
                el.addEventListener('touchmove', event => dragMove(event, el, pW, pH, pT, pL, eW, eH));
                el.addEventListener('touchend', event => dragStop(event, el));
            } else {
                el.onmousedown = event => {
                    dragStart(event, el)
                    document.onmousemove = event => dragMove(event, el, pW, pH, pT, pL, eW, eH)
                    document.onmouseup = event => dragStop(event, el);
                }
            }
        })
    }
})
```

```javascript
// directive/drag/methods.js
// 元素移动方法
const autoMove = function(el, changeAttr, endValue) {
    // 定义 起点、运动中当前位置 变量
    let currentValue;
    const {
        // 元素距离限制区域上左距离
        offsetTop: eT,
        offsetLeft: eL
    } = el;
    // 改变属性为 'left' 时，起点赋值为：元素与限制区左边的距离
    if (changeAttr === 'left') currentValue = eL;
    // 改变属性为 'top' 时，起点赋值为：元素与限制区上边的距离
    if (changeAttr === 'top') currentValue = eT;
    // 移动步距设置为 终点与起点 距离的 1 / 33，值的正负表示移动方向
    const step = (endValue - currentValue) / 33;
    // 定时器存在则清除处理
    if (el.__VueDragTimer__) clearInterval(el.__VueDragTimer__);
    // 设置自动停靠定时器
    el.__VueDragTimer__ = setInterval(() => {
        // 若当前位置与终点差值 已经 小于步距，则直接定位到终点位置(js计算精度导致此判断不可少)，否则缩小步距的距离
        if (Math.abs(endValue - currentValue) < Math.abs(step)) {
            el.style[changeAttr] = endValue + 'px';
            clearInterval(el.__VueDragTimer__);
            delete el.__VueDragTimer__;
        } else {
            currentValue += step;
            el.style[changeAttr] = currentValue + 'px';
        }
    }, 5);
};

/**
 * 自动停靠方法：
 * 停靠原则
 * 1、默认左右停靠开关永久开启
 * 2、上下停靠开关在距离上下<=50像素时开启
 * 3、最终移动方向：从停靠开关开启的方向中，取需要移动距离最小的方向
 */
const autoStop = function(el) {
    const {
        // 存在定位的父级元素及其宽高（即元素可移动限制区域，先假设为parentNode，不是相对父级定位可以再调整）
        parentNode: {
            clientWidth: pW,
            clientHeight: pH,
            offsetTop: pT,
            offsetLeft: pL,
        },
        // 元素距离限制区域上左距离
        offsetTop: eT,
        offsetLeft: eL,
        // 元素计算宽高(如果停靠不想完全靠边，可给元素添加对应padding)
        offsetWidth: eW,
        offsetHeight: eH,
    } = el;
    /**
     * 停靠配置
     * changeAttr: 当前配置方案改变的元素属性 'top'| 'left'
     * endValue: 停靠动画结束时，需要改变的属性的值(终点)
     * distance：当前配置，距离目标结束位置的距离
     * toggle: 配置开启开关
     */
    const stopConfigs = [{ // 上移贴边配置
            name: 'top',
            changeAttr: 'top',
            endValue: pT,
            distance: eT - pT,
            toggle: eT <= 50 + pT
        },
        { // 下移贴边配置
            name: 'bottom',
            changeAttr: 'top',
            endValue: pH + pT - eH,
            distance: pH - eT - eH + pT,
            toggle: pH - eT - eH <= 50 - pT
        },
        { // 左移贴边配置
            name: 'left',
            changeAttr: 'left',
            endValue: pL,
            distance: eL - pL,
            toggle: true
        },
        { // 右移贴边配置
            name: 'right',
            changeAttr: 'left',
            endValue: pW + pL - eW,
            distance: pW - eL - eW + pL,
            toggle: true
        }
    ];
    // 先重配置中选出开关为true的，然后按distance排序后选出其值最小的配置，并获取对应的changeAttr、endValue
    const {
        changeAttr,
        endValue
    } = stopConfigs.filter(o => o.toggle).sort((a, b) => a.distance - b.distance)[0];
    autoMove(el, changeAttr, endValue);
};

export default autoStop;
```

```vue
<!-- 组件内使用 -->
<template>
    <div class="panel-center" v-if="state">
        <div class="wrap">
            <div class="box-darg" v-drag @click="say" ref="dragbtn" @mousedown="isShowIframeDiv = true"
                @mouseup="isShowIframeDiv = false" :data-app="`${isApp}`">
            </div>
            <!-- iframeDiv解决拖拽时卡顿 -->
            <div>
                <div class="iframeDiv" v-show="isShowIframeDiv"></div>
                <iframe id="game_iframe" src="https://chencan123.gitee.io/" style="width: 100%; height: 100vh"
                    frameborder="0"></iframe>
            </div>
        </div>
    </div>

</template>

<script>
/***
 * 1.解决iframe拖拽时卡顿 
 * 2.解决拖拽时触发点击事件
 * 3.兼容PC和APP模式
 * 4.拖拽新增容器居中逻辑(调整限制边界和吸附边界)
 */
export default {
    data() {
        return {
            state: false,
            isApp: true,
            isShowIframeDiv: false
        }
    },
    methods: {
        show() {
            this.state = true;
        },
        hide() {
            this.state = false;
        },
        say() {
            const isClick = this.$refs.dragbtn.getAttribute('data-flag')
            isClick !== 'true' && console.log('hello')
        }
    },

}
</script>

<style lang="scss" scoped>
.panel-center {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    transition: 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), z-index 1ms;
    width: 100%;

}

.wrap {
    transform-origin: center center;
    max-width: 600px;
    width: 100%;
    overflow-y: auto;
}

$num: 36px;

.box-darg {
    width: $num;
    height: $num;
    position: absolute;
    display: flex;
    padding: 10px;
    box-sizing: content-box;
    z-index: 99999;
    background: blue;

}
.iframeDiv {
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>
```

## vue雪碧图

```vue
<!-- 指定编号默认和激活情况 -->
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
  methods: {
    /**
     * @param sid  指定图片id
     * @param iconWidth icon宽度
     * @param iconHeight icon高度
     * @example bgPosition(1, 50)
     */
    bgPosition(sid, iconWidth = 146, iconHeight = iconWidth) {
      let [spriteIconX, spriteIconY] = this.sid == sid ? this.userSprite[sid].active : this.userSprite[sid].default
        let spriteWidth = 904;
        let spriteHeight = 900;
        let spriteIconWidth = 146;
        let spriteIconHeight = 146;
        return {
          width: `${iconWidth}px`,
          height: `${iconHeight}px`,
          background: `url(${require('@/assets/user.png')}) no-repeat`,
          'background-position': `${(spriteIconX / (spriteWidth - spriteIconWidth)) * 100}% ${(spriteIconY / (spriteHeight - spriteIconHeight)) * 100}%`,
          'background-size': `${spriteWidth * (iconWidth / spriteIconWidth)}px  ${spriteHeight * (iconHeight / spriteIconHeight)}px`,
        }
    }
  },
};
</script>
```

```javascript
// loadSprite.js
/**
 * @param module  雪碧图文件夹下的图片名称
 */
export default function (module) {
    const map = require(`/public/sprite/${module}`);
    return {
        //获取icon背景
        /**
         * @module map中的模块名【文件名】
         * @param name  需要显示的图片名称
         * @param iconWidth icon宽度
         * @param iconHeight icon高度
         * @example loadSprite('dots').get('free_email', 49, 47)
         */

        get(name, iconWidth, iconHeight) {
            const {
                x: spriteIconX,
                y: spriteIconY,
                w: spriteIconWidth,
                h: spriteIconHeight,
                width: spriteWidth,
                height: spriteHeight,
            } = map[name]
            return {
                width: `${spriteIconWidth * (iconWidth / spriteIconWidth)}px`,
                height: `${spriteIconHeight * (iconHeight / spriteIconHeight)}px`,
                background: `url(${require(`/public/sprite/${module}.png`)}) no-repeat`,
                'background-position': `${(spriteIconX / (spriteWidth - spriteIconWidth)) * 100}% ${(spriteIconY / (spriteHeight - spriteIconHeight)) * 100}%`,
                'background-size': `${spriteWidth * (iconWidth / spriteIconWidth)}px  ${spriteHeight * (iconHeight / spriteIconHeight)}px`,
            }
        }
    };
}
```

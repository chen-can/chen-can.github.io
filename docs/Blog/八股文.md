# 八股文

<!-- html -->

## Doctype 作用？

告知浏览器的解析器用什么文档标准解析这个文档

<!-- css -->

## 盒模型

box-sizing: content-box 是标准盒模型 默认属性  
box-sizing: border-box 是 IE 盒模型
![图片1](img/20200715170108916.png)
![图片2](img/20200715170121834.png)

## 什么是重排和重绘

**重排**：部分或整个渲染树需要重新分析并且需要重新计算节点尺寸 (display:none)  
**重绘**：节点属性或样式发生变化 (visibility:hidden)

## CSS 如何开启 GPU 加速

transform、opacity、filter、will-change  
GPU 渲染字体会导致字体模糊，过多的 GPU 处理会导致内存问题

## 传统布局方式有哪些

普通流、浮动、定位

## css 选择器权重

!important -> 行内样式 -> #id -> .class -> 元素和伪元素 -> \* -> 继承 -> 默认

<!-- 浏览器 -->

## 简述 cookie、localstorage、seesionstorage

| 名称           | 大小     | 网络请求                                                     | 生命周期                                       |
| -------------- | -------- | ------------------------------------------------------------ | ---------------------------------------------- |
| cookie         | 4kb 左右 | 携带在 HTTP 头中，cookie 保存数据过多会带来性能问题 | 默认是关闭浏览器后失效, 但是也可以设置过期时间 |
| localstorage   | 10M       | 保存在浏览器中，不参与和服务器的通信                         | 手动清除                                       |
| SessionStorage | 5M       | 保存在浏览器中，不参与和服务器的通信                         | 关闭窗口或浏览器后被清除                       |

## 如何实现前端跨域

CORS、JSOP、postMessage、Iframe、nginx

## 浏览器攻击方式

xss、csrf(跨站点请求)、sql注入

<!-- 网络 -->

## get 和 post 请求的区别

| get                                                                                   | post                                                       |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| 默认参数长度有限制    （不同浏览器长度不一致，最大 2048）（可通过浏览器和服务器配置） | 默认参数长度无限制（可通过浏览器和服务器配置）             |
| 会把请求的数据附加在 url 上                                                           | 请求会把数据附加在请求体中                                 |
| 是明文传输                                                                            | 不是明文传输（相对来说不是明文因为可以用开发工具可以看到） |
| 请求能缓存                                                                            | 不能缓存                                                   |
| 速度快（数据和请求头一起发送）                                                        | 速度慢（因为先将请求头发送给服务器进行确认）               |

## http 和 https 区别

| http           | https                             |
| -------------- | --------------------------------- |
| 80 端口        | 443 端口                          |
| 无需申请证书   | 需要申请证书                      |
| 超文本传输协议 | ssl 加密协议                      |
| 快             | 慢（因为会有一个 ssl 包需要传输） |

## 说一下 http 状态码有那些

200、2 开头请求成功  
302、3 开头重定向  
404、4 开头客户端请求错误  
500、5 开头服务器端请求错误  
详情见：[https://www.runoob.com/http/http-status-codes.html](https://www.runoob.com/http/http-status-codes.html)

## 说一下从 url 输入到返回请求的过程

1. 进行 DNS 解析（就是把域名地址解析成 IP 地址）
   1. 浏览器 DNS 缓存
   2. 系统 DNS 缓存
   3. 路由器 DNS 缓存
   4. 网络运营商 DNS 缓存
   5. 递归搜索 blog.baidu.com
2. 建立 TCP 连接（三次握手）
   1. 由浏览器发起，告诉服务器，我要发送请求
   2. 由服务器发起，告诉浏览器，我准备好了，你发吧
   3. 由浏览器发起，告诉服务器，我发了，准备接收吧
3. 发送请求
   1. 请求报文
4. 发送响应
   1. 响应报文
5. 渲染页面（不一定按照顺序执行）
   1. 遇见 html，浏览器调用 html 解析器，构建 dom 树
   2. 遇见 style/link，浏览器调用 css 解析器，构建 cssom 树
   3. 遇见 script，浏览器调用 javascript 解析器，处理 script 代码
   4. 将 dom 树和 cssom 树合并成渲染树
   5. 根据渲染树计算布局
   6. 将各节点颜色绘制到屏幕上
6. 断开 TCP 连接（四次挥手）
   1. 由浏览器发起，告诉服务器，我东西发送完了（请求报文）
   2. 由服务器发起，告诉浏览器，我东西接收完了（请求报文），我准备关闭，你也准备吧
   3. 由服务器发起，告诉浏览器，我东西发送完了（响应报文），你准备关闭
   4. 由浏览器发起，告诉服务器，我东西接收完了（响应报文），我准备关闭，你也准备吧

<!-- js -->

## 用一句话说下什么是 javaScript

简称 js,一种轻量级，单线程，解释性（翻译）的脚本语言

## 事件循环
javaScript 中分同步任务和异步任务，而异步任务还可以细分为宏任务和微任务  
`new` 会立即执行，`await` 会阻塞下面的代码（即加入微任务队列）  
如果排除`script`宏任务的话，那么微任务先执行
## var、let、const 的区别

| var | let | const |
| --- | --- | --- |
| 函数作用域 | 块级作用域 | 块级作用域 |
| 支持变量提升 | 不支持变量提升 | 不支持变量提升 |
| 允许重复声明 | 不允许重复声明 | 不允许重复声明 |
| 可以通过 window.变量名进行访问 | 不能通过 window.变量名进行访问 | 不能通过 window.变量名进行访问 |
| 值可更改 | 值可更改 | 在同一作用域名值不可更改 |
|  | 暂存性死区 | 暂存性死区 | 
> 暂存性死区：就是在我们声明之前是不能访问它们的。如果访问就抛出 ReferenceError  错误

## Promise 各方法的区别

| 方法                 | 含义                         | 结果                       |
| -------------------- | ---------------------------- | -------------------------- |
| Promise.all()        | 只要有一个失败就立即停止     | 返回第一个失败的值         |
| Promise.allSettled() | 无论成功或失败都返回         | 返回所有成功和失败的值     |
| Promise.any()        | 只要有一个成功就立即停止     | 返回第一个成功的值         |
| Promise.race()       | 任意一个成功或失败就立即停止 | 返回任意一个成功或失败的值 |

## 什么是闭包

闭包就是子函数可以访问其他函数的作用域的数据

## 原型对象的终点是什么

是 null,用`Object.prototype.__proto__===null`来验证

## undefined 和 null 的区别

undefined 不是关键字，而 null 是关键字  
undefined 是参数默认值  
undefined 和 null 的用途

## undefined 和 null 的用途

undefined 定义基本类型,null 定义引用类型

## JS 的基本数据类型和引用数据类型

基本数据类型：undefined、null、boolean、number、string、symbol（ES6）、bigInt（谷歌 67 版本）7——占用内存小，固定大小，一般存在栈内存当中，内存自动释放  
引用数据类型：object、array、function——占用内存大，不固定大小，一般存在堆内存当中，内存不会释放，指针是在栈内存中

## 包装对象有哪些？

new Number()、new String()、new Boolean()

## 继承原理

复制父类的属性和方法来重写子类的原型对象

## 浅拷贝:

1、Object.assign 方法来实现  
2、扩展运算符 ...obj
3、for...in

## 深拷贝:

1、JSON.parse(JSON.stringfy(object)) 此方法不支持 function 拷贝  
2、手写递归方法去实现

```javascript
function isObject(obj) {
  return obj !== null && (typeof obj === "object" || typeof obj ===
    "function")
}
function deepClone(originValue) { // Symbol类型
  if (typeof originValue === "symbol") {
    return Symbol(originValue.description)
  }
  // 判断是否是对象
  if (!isObject(originValue)) return originValue;
  // set类型
  if (originValue instanceof Set) {
    const newSet = new Set()
    for (const setItem of originValue) {
      newSet.add(deepClone(setItem))
    }
    return newSet
  }
  // 判断是函数
  if (typeof originValue === "function") {
    return originValue
  }
  // 判断返回值是数组还是对象
  const newObj = Array.isArray(originValue) ? [] : {} if (Reflect) {
    for (let key of Reflect.ownKeys(originValue)) {
      {
        let value = originValue[key] // 让 SymbolKey的值不同
        if (typeof key === "symbol") {
          const newSymbolKey = Symbol(key.description) // 将原来的值赋值给新生成的Symbol key
          value = originValue[key]
          key = newSymbolKey
        }
        newObj[key] = deepClone(value)
      }
    }
  } else {
    for (const key in originValue) {
      const value = originValue[key]
      newObj[key] = deepClone(value)
    }
    // 对于Symbol类型的key forin 无法便利出来
    const symbolKeys = Object.getOwnPropertySymbols(originValue)
    for (const symbolKey in symbolKeys) {
      const originSymbolValue = symbolKeys[symbolKey]
      const newSymbol = Symbol(originSymbolValue.description)
      newObj[newSymbol] = deepClone(originValue[originSymbolValue])
    }
  }
  return newObj
}
const info = {
  name: "why",
  age: 18,
  friend: {
    name: "kobe"
  },
  running: function () { },

  [Symbol()]: "abc"
}
const newObj = deepCopy(info)

```

## es6 新特性

模版字符串、箭头函数、解构、扩展运算符、函数默认参数、块级作用域、类、对象字面量、导入/导出

## 类的用法

```javascript
class ClassName {
  constructor() {}
  method_1() {}
  static displayName = "Point";
  static method_2() {}
}
// ClassName.method_2() 静态方法调用
class Runoob extends ClassName {
  constructor(name, age) {
    super(name); //必须写在第一行
    this.age = age;
  }
}
```

## 导入/导出的用法

1. 在一个文件或模块中 export 可以有多个，但 export default 仅有一个
2. 通过 export 方式导出，在导入时要加{），而 export default 则不需要

- export

```javascript
// a.js
export const str =“小生方勤”;
// b.js
import { str } from 'a';  //导入的时候需要花括号
```

- export default

```javascript
// a.js
const str:
"小生方勤"；
export default str;
// b.js
import str from 'a'； // 导入的时候无需花括号
```

## call、apply、bind 区别

相同点：都是重定向 this 指针的方法。  
不同点：apply 是数组，而 call、bind 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。

## 改变 this 指向的有哪些？

call、apply、bind、new

## new 操作符做了什么

在内存中创建一个新对象。  
将新对象内部的 __proto__ 赋值为构造函数的 prototype 属性。  
将构造函数内部的 this 被赋值为新对象（即 this 指向新对象）。  
执行构造函数内部的代码（给新对象添加属性）。  
如果构造函数返回非空对象，则返回该对象。否则返回 this。  

## 如何实现继承

原型链继承、构造函数继承、寄生组合式继承、ES6 中 class 的继承

## for...in 和 for...of 的区别

`for...in` 遍历对象，下标  
`for...of` 遍历数组，值

## 什么是原型链

实例会查看自己是否有这个属性，如果没有的话会通过**proto**属性找原型对象， 这样一环扣一环就是原型链

<!-- vue -->

## 在哪个生命周期内调用异步请求

- 能更快获取到服务端数据，减少页面  loading 时间
- ssr  不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性
  mounted 中的请求有可能导致页面闪动

## 简述 Vue 响应式原理

采用数据劫持并结合了发布者-订阅者模式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

## 说一下 v-model 的原理

`v-model`本质就是一个语法糖，可以看成是`value + input`方法的语法糖。 可以通过 model 属性的`prop`和`event`属性来进行自定义。原生的 v-model，会根据标签的不同生成不同的事件和属性。

## Vue 组件中 data 为什么必须是函数

防止多个组件实例对象之间共用一个 data，产生数据污染

## vue 生命周期钩子函数有哪些

1. 在 beforeCreate 时，data 和 methods 中的数据都还没有没初始化
2. 在 created 中,data 和 methods 都已经被初始化好了!如果要调用 methods 中的方法，或者操作 data 中的数据,最早，只能在 created 中操作,created 通常用于异步请求，若想获取 dom 需要用 this.$nextTick
3. 如果要通过某些插件操作页面上的 DOM 节点了，最早要在 mounted 中进行
   ![16ca74f183827f46 2498×2798.png](img/16ca74f183827f46.png)

## 组件之间是怎么通信的

`props / $emit` 适用 父子组件通信  
`ref` 与 `$parent / $children` 适用 父子组件通信  
`EventBus （$emit / $on）` 适用于 父子、隔代、兄弟组件通信  
`$attrs`/`$listeners` 适用于 隔代组件通信  
`provide / inject` 适用于 隔代组件通信  
Vuex 适用于 父子、隔代、兄弟组件通信

## vue 执行顺序

inject>state>props>methods>data>computed>watch>provide

## Vue 核心特性

数据驱动（MVVM)、组件化、指令系统

## Vue Router 的导航方法

push、replace、go

## query传参和params传参区别

| query传参| params传参|
| --- | --- |
| name和path都行 | 只能name |
| url会带上参数 | url不会带上参数，刷新就没有了 |
| 通过this.$route.query获取 | 通过this.$route.params获取 |


## v-if 和 v-for 为什么不能放在一起
会先循环后判断，造成资源消耗

## v-if 和 v-for 哪个优先级高

在 vue2 中 v-for 优先级高,在 vue3 中 v-if 优先级高

## key 的作用

为了更好的更新虚拟 dom

## 为什么不建议用 index 作为 key?

使用 index 作为 key 和没写基本上没区别，因为不管数组的顺序怎么颠倒，index 都是 0, 1, 2...这样排列，导致 Vue 会复用错误的旧子节点，做很多额外的工作

## query传参和params传参区别
|  query传参 |	params传参 | 
| ---|---| 
| name和path都行	|只能name| 
| url会带上参数	|url不会带上参数，刷新就没有了| 
| 通过this.$route.query获取	|通过this.$route.params获取| 
## computed 和 watch,methods 有什么区别

computed 有缓存性 ，一个数据受多个数据影响  
watch 无缓存性 ，一个数据影响多个数据  
methods 无缓存性，只要发生重新渲染，methods 调用总会执行该函数

## 那你能讲一讲 MVVM 吗

MVVM 是`Model-View-ViewModel`缩写，Model 层代表数据模型，View 代表 UI 组件，ViewModel 是 View 和 Model 层的桥梁，数据会绑定到 viewModel 层并自动将数据渲染到页面中，视图变化的时候会通知 viewModel 层更新数据。

## 双向绑定的原理

实际是 v-bind:xxx 和 v-on:xxx 的语法糖。
## keep-alive 了解吗

`keep-alive`可以实现组件缓存，当组件切换时不会对当前组件进行卸载。
常用的两个属性`include/exclude`，允许组件有条件的进行缓存。
两个生命周期`activated/deactivated`，用来得知当前组件是否处于活跃状态。

## vuex

是什么：多组件共享数据抽离出来  
为什么：因为普通的传值比较复杂不便于维护,用于组件之间的传值

## watch 怎么深度监听对象变化

deep 设置为 true 就可以监听到对象的变化

```javascript
let vm = new Vue({
  el: "#first",
  data: { msg: { name: "北京" } },
  watch: {
    msg: {
      handler(newMsg, oldMsg) {
        console.log(newMsg);
      },
      immediate: true,
      deep: true,
    },
  },
});
```

## 如何解决 Vue 中给对象添加新属性界面不刷新?

可以通过$set()、$forcecUpdated()、Object.assign()解决

## 数组中的哪些方法会触发视图的更新?

改变元数组都会触发视图的更新

## 改变元数组的方法有哪些？

push、pop、shift、unshift、reverse、splice、sort、fill （8 个）

## vue3.0 的六大亮点

1、组合 API 2、先进的组件 3、更好的支持 ts 4、性能提升 5、按需编译 6、自定义渲染的 API

<!-- 小程序 -->
## uniapp 生命周期执行顺序
1.渲染完成之前，即mounted之前  
组件（父子组件都是）生命周期优先于页面生命周期；父组件，子组件直接的顺序是父组件优先于子组件。  
执行过程：  
父beforeCreate=>父created=>父beforeMount=>子beforeCreate=>子created=>子beforeMount=>页面onLoad=>页面onShow；  
2.渲染完成时，即beforeDestroy之前  
组件（父子组件都是）生命周期优先于页面生命周期；父组件，子组件直接的顺序是子组件优先于父组件。  
子mounted=>父mounted=>页面onReady；  
3.销毁过程：  
页面生命周期优先于组件生命周期（父子组件都是）；父组件，子组件直接的顺序是子组件优先于父组件  
页面onUnload=>子beforeDestroy=>子destroyed=>父beforeDestroy=>父destroyed    

beforeCreate=>created=>beforeMount=>onLoad=>onShow=>mounted=>onReady  
异步请求在onLoad执行，获取dom元素在onReady执行  

<!-- 工程化 -->

## Webpack 的基本功能

代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布

## Webpack 常见的 Loader

less-loader、css-loader、style-loader、postcss-loader、file-loader、url-loader、 image-webpack-loader、eslint-loader、vue-loader

## 常见的 Plugin

1. html-webpack-plugin：根据模板页面生成打包的 html 页面

2. mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载

3. clean-webpack-plugin: 目录清理

4. copy-webpack-plugin: 拷贝文件

<!-- 性能优化 -->

## 网站性能优化

* 网络请求优化

减少请求数，开启 gzip 压缩，缓存，采用 CDN 加速加快访问速度、避免重定向

* 静态资源优化

代码压缩、图片压缩、图片懒加载、字体图标、webp（ios webview中有兼容性问题）

* HTML优化

避免使用iFrame、避免使用 table 布局、使用骨架屏

* CSS优化

避免使用通配符*、避免使用!impotant、避免使用css表达式、避免重排重绘，使用 CSS3 GPU 加速

* js 优化

节流与防抖、虚拟列表、对于包含大量数据而不需要操作的对象，可以使用`Object.freeze`冻结对象、webworker、IntersectionObserver、requestAnimationFrame

* 打包优化

按需加载、路由懒加载、Webpack拆包、将小图片转换为base64字符串

```text
// 优化场景
取消请求：页面跳转、tab栏
防抖：搜索框、登录、发短信等按钮、生成订单（请求一次）
截流：窗口调整、页面滚动、抢购和疯狂点击，拖拽（定时请求）
懒加载：图片在可视区请求
imprort 不允许 加载失败
require 允许 加载失败
promise.all 用于要做的事情需要2个请求才能完成
```

<!-- git -->

## git 常用命令

git init、git clone、git status、git add、git commit -m、git log、git push、git pull...

## 其它

v-if 适合不变的数据如请求 API 动态显示/隐藏  
this 在严格模式下返回 undefined  
null==undefined 是因为都转为 false 所以为 true  
相等运算符会进行类型转换，全等运算符不会  
null 和 undefined 除自身外比较无法转换 ''==0 true  
nan 不等于自身  
vue.config 改动需要重启项目

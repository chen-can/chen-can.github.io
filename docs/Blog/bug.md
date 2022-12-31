# BUG
Q：一些浏览器会屏蔽广告图片，导致图片无法显示  
A：图片命名去掉ad  

Q：使用tomcat web容器支付宝扫码无法访问二级页面  
A：改用nginx web容器  

Q：在IE浏览器下，如果请求的方法是 GET ，并且请求的 URL 不变，那么这个请求的结果就会被缓存。  
A：实时改变请求的 URL ，只要URL改变，就不会被缓存，可以通过在URL末尾添加上随机的时间戳参数('t'= + new Date().getTime())  

Q：当`<input type="number"  maxlength="5" />`时maxlength失效，长度可以无限输入    
A：`<input type="number" oninput="if(value.length>5)value=value.slice(0,5)" />`  

Q：vue-amap页面刷新后，地图组件会报错  
A：localStorage.clear() //修复报错 

Q：不兼容JS中的new Date('2018-01-12 10:09:11')返回错误"Invalid Date"
A：将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式或拆成数组例如：
```javascript
let arr = "2018-01-12 10:09:11".split(/[- : \/]/),
date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
``` 

Q：node node-sass sass-loader版本对应问题，导致node-sass报错  
A：具体对应版本如下图：
| NodeJS | Supported node-sass version | Node Module |
| --- | --- | --- |
| Node 16 | 6.0+ | 93 |
| Node 15 | 5.0+ | 88 |
| Node 14 | 4.14+ | 83 |
| Node 13 | 4.13+, <5.0 | 79 |
| Node 12 | 4.12+ | 72 |
| Node 11 | 4.10+, <5.0 | 67 |
| Node 10 | 4.9+, <6.0 | 64 |
| Node 8 | 4.5.3+, <5.0 | 57 |
| Node <8 | <5.0 | <57 |

| NodeJS | sass-loader  version | node-sass version |
| --- | --- | --- |
| Node <8 | sass-loader 4.1.1 | node-sass 4.3.0 |
| Node 8 | sass-loader 7.3.1 | node-sass 4.7.2 |
| Node 14 | sass-loader 7.3.1 | node-sass 4.14.1 |
| Node 16 | sass-loader 10.0.1 | node-sass 6.0.1 |

Q：小程序setData 数据传输长度超过200kb会出现输入框字体跳动  
A：减小setData 数据传输长度

Q:字体小于12px后包裹在div内字体偏移  
A:使用 `transform-origin: left center;` 改变缩放中心点

Q:字体小于12px后flex剧中  
A:使用 ` width: calc(100% / 0.71);` 0.71是缩放比例  

Q:display:flex布局下white-space:nowrap失效内容区溢出  
A:给父元素设置一下min-width: 0或使用多行文字… 省略的方法

Q:正则表达式开启全局g时验证结果错误  
A:在匹配之前设置lastIndex=0或者删除g
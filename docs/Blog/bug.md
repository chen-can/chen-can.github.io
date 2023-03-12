# BUG

Q：使用tomcat web容器支付宝扫码无法访问二级页面  
A：改用nginx web容器  

Q：在IE浏览器下，如果请求的方法是 GET ，并且请求的 URL 不变，那么这个请求的结果就会被缓存。  
A：实时改变请求的 URL ，只要URL改变，就不会被缓存，可以通过在URL末尾添加上随机的时间戳参数('t'= + new Date().getTime())  

Q：vue-amap页面刷新后，地图组件会报错  
A：localStorage.clear() //修复报错 

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

Q:display:flex布局下white-space:nowrap失效内容区溢出  
A:给父元素设置一下min-width: 0或使用多行文字… 省略的方法

Q:正则表达式开启全局g时验证结果错误  
A:在匹配之前设置lastIndex=0或者删除g

Q:vue2.7以下的版本无法使用可选链操作符  
A:  
方式一：升级版本`yarn vue@2.7.0 vue-template-compiler@2.7.0`  
方式二：使用函数
```javascript
/**
 * 解决Vue Template模板中无法使用可选链的问题
 * @param obj
 * @param rest
 * @returns {*}
 * @example {{optionalChaining(userInfo, 'wxInfo', 'addressInfo', 'address')}}
 */
export const optionalChaining = (obj, ...rest) => {
  let tmp = obj;
  for (let key in rest) {
    let name = rest[key];
    tmp = tmp?.[name];
  }
  return tmp || "";
};
```
Q:弹窗第二次弹出时gif动图无法播放  
A:给图标加随机数`src?${Math.floor(Math.random() * 10)}`

# 移动端H5常见问题

Q：一些浏览器会屏蔽广告图片，导致图片无法显示  
A：图片命名去掉ad  

Q：不兼容JS中的new Date('2018-01-12 10:09:11')返回错误"Invalid Date"  
A：将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式或拆成数组
```javascript
let arr = "2018-01-12 10:09:11".split(/[- : \/]/),
date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
``` 
Q:防止手机中网页放大和缩小  
A:
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
```
Q:nput的type设置为number,maxlength失效，长度可以无限输入  
A:
```html
<input type="number" oninput="checkTextLength(this ,10)">
<script type="text/javascript">
    function checkTextLength(obj, length) {
        if(obj.value.length > length)  {
            obj.value = obj.value.substr(0, length);
        }
    }
</script>
```
Q:防止长按页面元素被选中  
A:
```css
.class{
  user-select:none; 
}
input{
  user-select:auto; 
}
```
Q:上下拉动滚动条时卡顿/慢  
A:
```css
body {
    overflow-scrolling: touch;
}
```
Q:IOS键盘字母输入,默认首字母大写的解决方案  
A:
```html
<input autocapitalize="off"  /> 
```

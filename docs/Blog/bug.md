# BUG
Q：一些浏览器会屏蔽广告图片，导致图片无法显示  
A：图片命名去掉ad  

Q：使用tomcat web容器支付宝扫码无法访问二级页面  
A：改用nginx web容器  

Q：在IE浏览器下，如果请求的方法是 GET ，并且请求的 URL 不变，那么这个请求的结果就会被缓存。  
A：实时改变请求的 URL ，只要URL改变，就不会被缓存，可以通过在URL末尾添加上随机的时间戳参数('t'= + new Date().getTime())  

Q：当`<input type="number"  maxlength="5" />`时maxlength失效，长度可以无限输入    
A：`<input type="number" oninput="if(value.length>5)value=value.slice(0,5)" />`  
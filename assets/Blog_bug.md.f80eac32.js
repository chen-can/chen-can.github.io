import{_ as t,c as s,o as a,f as o}from"./app.a423845e.js";const i=JSON.parse('{"title":"BUG","description":"","frontmatter":{},"headers":[],"relativePath":"Blog/bug.md","lastUpdated":1671632578000}'),e={name:"Blog/bug.md"},n=o(`<h1 id="bug" tabindex="-1">BUG <a class="header-anchor" href="#bug" aria-hidden="true">#</a></h1><p>Q：一些浏览器会屏蔽广告图片，导致图片无法显示<br> A：图片命名去掉ad</p><p>Q：使用tomcat web容器支付宝扫码无法访问二级页面<br> A：改用nginx web容器</p><p>Q：在IE浏览器下，如果请求的方法是 GET ，并且请求的 URL 不变，那么这个请求的结果就会被缓存。<br> A：实时改变请求的 URL ，只要URL改变，就不会被缓存，可以通过在URL末尾添加上随机的时间戳参数(&#39;t&#39;= + new Date().getTime())</p><p>Q：当<code>&lt;input type=&quot;number&quot; maxlength=&quot;5&quot; /&gt;</code>时maxlength失效，长度可以无限输入<br> A：<code>&lt;input type=&quot;number&quot; oninput=&quot;if(value.length&gt;5)value=value.slice(0,5)&quot; /&gt;</code></p><p>Q：vue-amap页面刷新后，地图组件会报错<br> A：localStorage.clear() //修复报错</p><p>Q：不兼容JS中的new Date(&#39;2018-01-12 10:09:11&#39;)返回错误&quot;Invalid Date&quot; A：将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式或拆成数组例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2018-01-12 10:09:11</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">/[</span><span style="color:#C3E88D;">- : </span><span style="color:#A6ACCD;">\\/</span><span style="color:#89DDFF;">]/</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">date </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#A6ACCD;">(arr[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr[</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr[</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr[</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr[</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Q：node node-sass sass-loader版本对应问题，导致node-sass报错<br> A：具体对应版本如下图：</p><table><thead><tr><th>NodeJS</th><th>Supported node-sass version</th><th>Node Module</th></tr></thead><tbody><tr><td>Node 16</td><td>6.0+</td><td>93</td></tr><tr><td>Node 15</td><td>5.0+</td><td>88</td></tr><tr><td>Node 14</td><td>4.14+</td><td>83</td></tr><tr><td>Node 13</td><td>4.13+, &lt;5.0</td><td>79</td></tr><tr><td>Node 12</td><td>4.12+</td><td>72</td></tr><tr><td>Node 11</td><td>4.10+, &lt;5.0</td><td>67</td></tr><tr><td>Node 10</td><td>4.9+, &lt;6.0</td><td>64</td></tr><tr><td>Node 8</td><td>4.5.3+, &lt;5.0</td><td>57</td></tr><tr><td>Node &lt;8</td><td>&lt;5.0</td><td>&lt;57</td></tr></tbody></table><table><thead><tr><th>NodeJS</th><th>sass-loader version</th><th>node-sass version</th></tr></thead><tbody><tr><td>Node &lt;8</td><td>sass-loader 4.1.1</td><td>node-sass 4.3.0</td></tr><tr><td>Node 8</td><td>sass-loader 7.3.1</td><td>node-sass 4.7.2</td></tr><tr><td>Node 14</td><td>sass-loader 7.3.1</td><td>node-sass 4.14.1</td></tr><tr><td>Node 16</td><td>sass-loader 10.0.1</td><td>node-sass 6.0.1</td></tr></tbody></table><p>Q：小程序setData 数据传输长度超过200kb会出现输入框字体跳动<br> A：减小setData 数据传输长度</p><p>Q:字体小于12px后包裹在div内字体偏移<br> A:使用 <code>transform-origin: left center;</code> 改变缩放中心点</p><p>Q:字体小于12px后flex剧中<br> A:使用 <code> width: calc(100% / 0.71);</code> 0.71是缩放比例</p><p>Q:display:flex布局下white-space:nowrap失效内容区溢出<br> A:给父元素设置一下min-width: 0或使用多行文字… 省略的方法</p><p>Q:正则表达式开启全局g时验证结果错误<br> A:在匹配之前设置lastIndex=0或者删除g</p>`,16),l=[n];function p(d,r,c,D,C,A){return a(),s("div",null,l)}const F=t(e,[["render",p]]);export{i as __pageData,F as default};

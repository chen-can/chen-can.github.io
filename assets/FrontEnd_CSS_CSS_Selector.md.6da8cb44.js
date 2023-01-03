import{_ as s,c as a,o as n,f as l}from"./app.e071b85f.js";const C=JSON.parse('{"title":"CSS 选择器","description":"","frontmatter":{},"headers":[{"level":2,"title":"属性选择器","slug":"属性选择器","link":"#属性选择器","children":[]},{"level":2,"title":"nth 元素选择","slug":"nth-元素选择","link":"#nth-元素选择","children":[]},{"level":2,"title":"before && after","slug":"before-after","link":"#before-after","children":[{"level":3,"title":"使用伪类 after 清除元素内部浮动效果","slug":"使用伪类-after-清除元素内部浮动效果","link":"#使用伪类-after-清除元素内部浮动效果","children":[]},{"level":3,"title":"在元素内容开始前插入图片","slug":"在元素内容开始前插入图片","link":"#在元素内容开始前插入图片","children":[]}]},{"level":2,"title":"CSS3伪类选择器","slug":"css3伪类选择器","link":"#css3伪类选择器","children":[]}],"relativePath":"FrontEnd/CSS/CSS_Selector.md","lastUpdated":1670776501000}'),p={name:"FrontEnd/CSS/CSS_Selector.md"},t=l(`<h1 id="css-选择器" tabindex="-1">CSS 选择器 <a class="header-anchor" href="#css-选择器" aria-hidden="true">#</a></h1><h2 id="属性选择器" tabindex="-1">属性选择器 <a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a></h2><p>属性选择器就是在所有标签上 只要有这个属性的就被选择中！</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">]{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#C3E88D;">xxg</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  //a标签里 类属性 开头带有xxg</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">herf</span><span style="color:#89DDFF;">$=</span><span style="color:#C3E88D;">xxg</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">   //a标签里 herf属性 结尾有xxg</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">*=</span><span style="color:#C3E88D;">xxg</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  //a标签里 title属性 包含了xxg</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#C3E88D;">xxg</span><span style="color:#89DDFF;">]{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="nth-元素选择" tabindex="-1">nth 元素选择 <a class="header-anchor" href="#nth-元素选择" aria-hidden="true">#</a></h2><ul><li>demo:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素；</li><li>demo:nth-last-child(n) 选择器匹配属于其元素的第 N 个子元素的每个元素，从最后一个子元素开始计数；</li><li>demo:nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素</li></ul><p><code>nth-child n的使用方法</code></p><ol><li>:nth-child(1) 选择第一个子元素</li><li>:nth-child(-n+2) 选择前两个子元素</li><li>:nth-child(n+2) 选择后两个子元素</li><li>:nth-child(2n) 选择列表中为偶数的元素===even</li><li>:nth-child(2n-1) 选择列表中为奇数的元素===odd</li><li>:nth-child(n+6):nth-child(-n+9) 结合使用，选择一列元素中的中间几个</li></ol><blockquote><p>n和js中index一样从0开始</p></blockquote><h2 id="before-after" tabindex="-1">before &amp;&amp; after <a class="header-anchor" href="#before-after" aria-hidden="true">#</a></h2><ul><li>demo:before：元素的内容之前插入新内容。</li><li>demo:after：元素的内容之后插入新内容。</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">demo</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">内容</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="使用伪类-after-清除元素内部浮动效果" tabindex="-1">使用伪类 after 清除元素内部浮动效果 <a class="header-anchor" href="#使用伪类-after-清除元素内部浮动效果" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">demo</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">clear</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> both</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="在元素内容开始前插入图片" tabindex="-1">在元素内容开始前插入图片 <a class="header-anchor" href="#在元素内容开始前插入图片" aria-hidden="true">#</a></h3><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">demo</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">img.jpg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> center  no-repeat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> cover</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="css3伪类选择器" tabindex="-1">CSS3伪类选择器 <a class="header-anchor" href="#css3伪类选择器" aria-hidden="true">#</a></h2><table><thead><tr><th>伪类选择器</th><th>说明</th></tr></thead><tbody><tr><td>a:root</td><td>伪类选择器 等同于选择html</td></tr><tr><td>a:not</td><td>否定选择器 就是不选择这个</td></tr><tr><td>a:empty</td><td>选择没有任何内容的容器</td></tr><tr><td>a:target</td><td>目标选择器 用来匹配页面url的某个标志符的目标元素</td></tr><tr><td>a:first-child</td><td>第一个子元素</td></tr><tr><td>a:last-child</td><td>最后一个子元素</td></tr><tr><td>a:nth-child(n)</td><td>n=odd或者even,也可以是数字</td></tr><tr><td>a:nth-last-child(n)</td><td>从最后一个子元素开始计算</td></tr><tr><td>a:first-of-type</td><td>指定</td></tr><tr><td>a:last-of-type</td><td>指定</td></tr><tr><td>a:nth-of-type(n)</td><td>指定</td></tr><tr><td>a:nth-last-of-type(n)</td><td>[...]</td></tr><tr><td>a:only-child</td><td>选的这个元素他 有且只有一个子元素</td></tr><tr><td>a:only-of-type</td><td>选择这个元素下 他的唯一类型的子元素</td></tr></tbody></table>`,19),e=[t];function o(c,r,D,i,d,y){return n(),a("div",null,e)}const h=s(p,[["render",o]]);export{C as __pageData,h as default};
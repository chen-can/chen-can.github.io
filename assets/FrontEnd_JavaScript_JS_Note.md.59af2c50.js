import{_ as s,c as a,o as n,f as l}from"./app.60f86721.js";const p="/assets/prototype.9c8f555e.png",C=JSON.parse('{"title":"javaScript","description":"","frontmatter":{},"headers":[{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":2,"title":"作用域和闭包","slug":"作用域和闭包","link":"#作用域和闭包","children":[]},{"level":2,"title":"原型链","slug":"原型链","link":"#原型链","children":[]}],"relativePath":"FrontEnd/JavaScript/JS_Note.md","lastUpdated":1665901766000}'),o={name:"FrontEnd/JavaScript/JS_Note.md"},e=l(`<h1 id="javascript" tabindex="-1">javaScript <a class="header-anchor" href="#javascript" aria-hidden="true">#</a></h1><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-hidden="true">#</a></h2><p>JavaScript 现在有八种数据类型，包括 7 个基础类型和 1 个引用类型。</p><p>基础类型：</p><ol><li>空值（null）</li><li>未定义（undefined）</li><li>布尔值（ boolean）</li><li>数字（number）</li><li>字符串（string）</li><li>符号（symbol，ES6 新增）</li><li>对象（bigint，ES11 新增）</li></ol><p>引用类型：</p><ol><li>对象(object)</li></ol><h2 id="作用域和闭包" tabindex="-1">作用域和闭包 <a class="header-anchor" href="#作用域和闭包" aria-hidden="true">#</a></h2><p>作用域是根据名称查找变量的一套规则，作用域分为<code>全局作用域</code>和<code>局部作用域</code>、ES6的<code>块级作用域</code></p><p>全局作用域：任何地方都能访问到的就是全局作用域</p><ol><li>函数最外部定义的变量拥有全局作用域</li><li>未定义直接赋值的变量会自动声明为拥有全局作用域</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">a</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(b) </span><span style="color:#676E95;">//1 </span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>浏览器下window的属性拥有全局作用域</li></ol><p>局部作用域：在固定的代码片段内可访问到，一般是指函数里声明的，所以局部作用域也叫函数作用域。</p><p>局部变量只作用于函数内，在函数开始执行时创建，函数执行完后局部变量会自动销毁。</p><p>块级作用域：只在变量声明的代码块内有效（let、const）</p><p>作用域链：执行函数时先从函数内部寻找局部变量， 没找到就往上个作用域寻找，直到全局作用域为止，这个作用域之间行程的引用关系就是作用域链</p><p>闭包：在一个函数内返回一个新的函数，新的函数引用了外部函数的变量，这时候这个变量会存在堆里，在这个函数执行完后不会被销毁。这就形成了闭包。 闭包的目的是将变量放在局部作用域，保留这个引用，实现变量的隐藏。</p><p>下面是简单的例子，foo执行返回的函数保留了foo的局部变量，形成闭包</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> boo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>闭包缺点和解决方法：带有闭包的函数只要存在就会一直保留隐藏的局部变量，根据<code>垃圾回收</code>的机制，被一个作用域引用的变量不会被回收，所以这个隐藏的局部变量将会一直存在，就造成了内存泄漏。解决方法就是销毁这个作用域，手动将这个函数对闭包变量的引用进行释放。接上面代码的例子：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">boo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"></span></code></pre></div><h2 id="原型链" tabindex="-1">原型链 <a class="header-anchor" href="#原型链" aria-hidden="true">#</a></h2><p>每个函数都有 prototype 属性，这个属性就是原型，也是一个对象。创建的时候只有constructor一个属性，该属性指向构造函数本身。</p><p>每个对象都有<code>__proto__</code>属性，指向了创建该对象的构造函数的原型，也就是函数的prototype。这个属性指向了 [[prototype]]，但是 [[prototype]] 是内部属性，我们并不能访问到，所以使用 <code>__proto__</code> 来访问。</p><p>为了实现继承的方式，通过 <code>__proto__</code> 将对象和原型联系起来组成原型链，得以让对象可以访问到不属于自己的属性。</p><p><img src="`+p+'" alt="图片"></p>',27),t=[e];function c(r,i,y,d,F,A){return n(),a("div",null,t)}const _=s(o,[["render",c]]);export{C as __pageData,_ as default};

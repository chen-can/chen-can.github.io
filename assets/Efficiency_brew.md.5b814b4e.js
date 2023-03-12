import{_ as s,c as a,o as e,Q as n}from"./app.d21b1f80.js";import"./chunks/theme.d2c57092.js";const y=JSON.parse('{"title":"brew","description":"","frontmatter":{},"headers":[{"level":2,"title":"软件安装","slug":"软件安装","link":"#软件安装","children":[{"level":3,"title":"第一种方法","slug":"第一种方法","link":"#第一种方法","children":[]},{"level":3,"title":"第二种方法","slug":"第二种方法","link":"#第二种方法","children":[]},{"level":3,"title":"第三种方法","slug":"第三种方法","link":"#第三种方法","children":[]}]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"安装软件","slug":"安装软件","link":"#安装软件","children":[]},{"level":2,"title":"查看软件","slug":"查看软件","link":"#查看软件","children":[]},{"level":2,"title":"更新软件","slug":"更新软件","link":"#更新软件","children":[]},{"level":2,"title":"卸载软件","slug":"卸载软件","link":"#卸载软件","children":[]}],"relativePath":"Efficiency/brew.md","lastUpdated":1665897289000}'),l={name:"Efficiency/brew.md"},t=n(`<h1 id="brew" tabindex="-1">brew <a class="header-anchor" href="#brew" aria-hidden="true">#</a></h1><p><a href="https://brew.sh/index_zh-cn.html" target="_blank" rel="noreferrer">brew</a>是MAC与LINUX上的软件包管理器。</p><h2 id="软件安装" tabindex="-1">软件安装 <a class="header-anchor" href="#软件安装" aria-hidden="true">#</a></h2><p>下面介绍三种方式安装 brew</p><h3 id="第一种方法" tabindex="-1">第一种方法 <a class="header-anchor" href="#第一种方法" aria-hidden="true">#</a></h3><p>官网中复制下图中命令，在terminal中输入该命令，即：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">/bin/bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><p>输入命令回车后，我们会发现下载速度很慢，你只需要一直等，然后一直等到它超时报错。<br> 一直输入命令下载，一直报错，除非你给它加个代理，可能某一刻它就突然下载成功了。<br> 没错，就是下面这个它 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22aa237397424af1bbb2edd61d1bb540~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p><h3 id="第二种方法" tabindex="-1">第二种方法 <a class="header-anchor" href="#第二种方法" aria-hidden="true">#</a></h3><p>1、在浏览器中搜索<code>https://raw.githubusercontent.com/Homebrew/install/master/install.sh</code>，然后在Network中找到Response中的内容，复制下来。<br><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29ce21d2b1af439597358322e95df3d1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"> 2、在终端中新建一个<code>install.sh</code>文件，在终端中输入<code>touch install.sh</code>。<br> 3、编辑文件，<code>vim install.sh</code>，把复制的内容粘贴进文件里，然后<code>:wq</code>保存退出。<br> 4、最后运行文件，<code>sh install.sh</code>，等待brew安装完成即可!</p><h3 id="第三种方法" tabindex="-1">第三种方法 <a class="header-anchor" href="#第三种方法" aria-hidden="true">#</a></h3><p>可以用另一个自动脚本(全部国内地址)，按回车后，根据提示操作：输入镜像序号 --&gt; 输入Y，回车等待brew安装完成即可。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">/bin/zsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3009a4623b634e9d94552882c043f37d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image" alt="image.png"></p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h2><p>查看版本</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#或</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre></div><h2 id="安装软件" tabindex="-1">安装软件 <a class="header-anchor" href="#安装软件" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">formul</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="查看软件" tabindex="-1">查看软件 <a class="header-anchor" href="#查看软件" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span>
<span class="line"></span></code></pre></div><h2 id="更新软件" tabindex="-1">更新软件 <a class="header-anchor" href="#更新软件" aria-hidden="true">#</a></h2><p>更新所有软件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span></code></pre></div><p>更新指定软件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">formul</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="卸载软件" tabindex="-1">卸载软件 <a class="header-anchor" href="#卸载软件" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unistall</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">formul</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,28),p=[t];function o(c,r,i,d,h,b){return e(),a("div",null,p)}const g=s(l,[["render",o]]);export{y as __pageData,g as default};

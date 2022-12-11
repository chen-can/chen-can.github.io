import{_ as s,c as a,o as n,f as p}from"./app.60f86721.js";const g=JSON.parse('{"title":"pnpm","description":"","frontmatter":{},"headers":[{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]},{"level":2,"title":"软件安装","slug":"软件安装","link":"#软件安装","children":[]},{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"查看依赖","slug":"查看依赖","link":"#查看依赖","children":[]},{"level":2,"title":"更新依赖","slug":"更新依赖","link":"#更新依赖","children":[]},{"level":2,"title":"卸载依赖","slug":"卸载依赖","link":"#卸载依赖","children":[]}],"relativePath":"Efficiency/pnpm.md","lastUpdated":1665897289000}'),l={name:"Efficiency/pnpm.md"},e=p(`<h1 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h1><p><a href="https://pnpm.io/zh/installation" target="_blank" rel="noreferrer">pnpm</a>是包管理工具。</p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h2><p>初始化新项目</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm init</span></span>
<span class="line"></span></code></pre></div><p>查看版本</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm -v</span></span>
<span class="line"><span style="color:#676E95;"># 或</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm --version</span></span>
<span class="line"></span></code></pre></div><p>运行脚本</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm</span></span>
<span class="line"></span></code></pre></div><h2 id="软件安装" tabindex="-1">软件安装 <a class="header-anchor" href="#软件安装" aria-hidden="true">#</a></h2><p>安装pnpm</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install -g pnpm</span></span>
<span class="line"></span></code></pre></div><p>苹果用户可以使用brew进行安装</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">brew install pnpm</span></span>
<span class="line"></span></code></pre></div><p>更新pnpm自身</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm add -g pnpm</span></span>
<span class="line"></span></code></pre></div><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a></h2><p>全局安装</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm add -g </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>生产环境</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm add [package]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>开发环境</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm add </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> -D</span></span>
<span class="line"></span></code></pre></div><p>安装package.json中的软件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm install</span></span>
<span class="line"><span style="color:#676E95;"># 或</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm i</span></span>
<span class="line"></span></code></pre></div><h2 id="查看依赖" tabindex="-1">查看依赖 <a class="header-anchor" href="#查看依赖" aria-hidden="true">#</a></h2><p>列出项目的依赖</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm ls</span></span>
<span class="line"><span style="color:#676E95;"># 或</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm list</span></span>
<span class="line"></span></code></pre></div><p>列出项目的依赖，并限制显示的依赖深度</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm list --depth=2</span></span>
<span class="line"></span></code></pre></div><h2 id="更新依赖" tabindex="-1">更新依赖 <a class="header-anchor" href="#更新依赖" aria-hidden="true">#</a></h2><p>更新所有依赖包</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm update</span></span>
<span class="line"><span style="color:#676E95;"># 或</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm up</span></span>
<span class="line"></span></code></pre></div><p>更新指定依赖包</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm upgrade </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"># 或</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm up </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="卸载依赖" tabindex="-1">卸载依赖 <a class="header-anchor" href="#卸载依赖" aria-hidden="true">#</a></h2><p>删除全局软件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm uninstall -g </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"># 或</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm un -g </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"># 或</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm remove -g </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"># 或</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm rm -g </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>删除项目中依赖包</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">pnpm un </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div>`,40),c=[e];function o(t,i,r,d,C,h){return n(),a("div",null,c)}const D=s(l,[["render",o]]);export{g as __pageData,D as default};

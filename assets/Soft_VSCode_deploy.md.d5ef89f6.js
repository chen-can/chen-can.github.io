import{_ as s,c as a,o as n,f as o}from"./app.60f86721.js";const l="/assets/v2-b39db72d237c271986b322d974f7ce20_1440w.21b289f4.jpg",p="/assets/04658e576b96066ed4ca519eca359f19aa288af678beed885f0ca2121d334c60.04658e57.png",e="/assets/ccb88b3f8174a4196326f1b9e8c2aab92d2bfc4c3972a5dbdd19f6cd8e1ec00f.ccb88b3f.png",t="/assets/7f899702c7e825191b0b41f4ff7c6fa9b9b70e67753badb052ffac8d3b57b910.7f899702.png",c="/assets/22a2aa6e47fc4e6d2e8b5ea65778f11214f8d89114b5bd79f853b40f0dea8285.22a2aa6e.png",h=JSON.parse('{"title":"VSCode","description":"","frontmatter":{},"headers":[{"level":2,"title":"软件安装","slug":"软件安装","link":"#软件安装","children":[]},{"level":2,"title":"全局命令","slug":"全局命令","link":"#全局命令","children":[]},{"level":2,"title":"代码片段","slug":"代码片段","link":"#代码片段","children":[]}],"relativePath":"Soft/VSCode/deploy.md","lastUpdated":1665977243000}'),r={name:"Soft/VSCode/deploy.md"},D=o('<h1 id="vscode" tabindex="-1">VSCode <a class="header-anchor" href="#vscode" aria-hidden="true">#</a></h1><p><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> 是微软推出的跨平台、扩展组件丰富的文本编辑器。</p><h2 id="软件安装" tabindex="-1">软件安装 <a class="header-anchor" href="#软件安装" aria-hidden="true">#</a></h2><p>国内下载vscode速度慢问题解决<br> 首先在<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">官网</a> 找到需要下载的文件，点击下载。 在浏览器或者下载软件中就可以看到这么一个下载地址了，将其复制下来（如下图箭头所指）。 <img src="'+l+'" alt="图片"> 然后将红框内的部分更换为<a href="https://link.zhihu.com/?target=http%3A//vscode.cdn.azure.cn/" target="_blank" rel="noreferrer">vscode.cdn.azure.cn</a> 这个就是国内的镜像了点开后你会发现速度直接起飞。</p><h2 id="全局命令" tabindex="-1">全局命令 <a class="header-anchor" href="#全局命令" aria-hidden="true">#</a></h2><p>在 windows 系统中在安装 VisualStudio Code 时选择设置 PATH 就可以在命令行全局使用了。<br> 在 Mac 系统中使用以下方式<br> 修改 <code>vim ~/.bash_profile</code> 如果安装了 <code>zsh</code> 修改 <code>vim ~/.zshrc</code> 添加 <code>export PATH=/Applications/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin:$PATH</code></p><h2 id="代码片段" tabindex="-1">代码片段 <a class="header-anchor" href="#代码片段" aria-hidden="true">#</a></h2><p>代码片段就是字面意思，“一段代码”。一段经常使用的代码，我们给他设置一个【快捷字符】，只要下次打出这个【快捷字符】它就会变出来！</p><div class="tip custom-block"><p class="custom-block-title">🌰举个栗子</p><p>我们每次写HTML 都要写一大片基础的结构，而设置好了代码片段,只需要打<code>html:5</code>👇<br><img src="'+p+'" alt="图 5"><br> 按下回车键👇 基础的代码就会出来了，不用再慢慢打了~<br><img src="'+e+'" alt="图 6"></p></div><p>设置方式 <img src="'+t+'" alt="图 3"></p><p><img src="'+c+`" alt="图 4"></p><p>然后写入👇</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">tsvue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">prefix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tsvue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">body</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;template&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">  &lt;div class=</span><span style="color:#A6ACCD;">\\&quot;\\&quot;</span><span style="color:#C3E88D;">&gt;&lt;/div&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;/template&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;script setup&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">import {} from &#39;vue&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;/script&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;style lang=&#39;scss&#39; scoped&gt;&lt;/style&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>参数说明</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">prefix      :调起本片段的字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">body        :这个是代码段的主体.需要设置的代码放在这里,字符串间换行的话使用\\r\\n换行符隔开.注意如果值里包含特殊字符需要进行转义.</span></span>
<span class="line"><span style="color:#A6ACCD;">　　　　　　　 多行语句的以,隔开</span></span>
<span class="line"><span style="color:#A6ACCD;">$1          :这个为光标的所在位置.</span></span>
<span class="line"><span style="color:#A6ACCD;">$2          :使用这个参数后会光标的下一位置将会另起一行,按tab键可进行快速切换,还可以有$3,$4,$5.....</span></span>
<span class="line"><span style="color:#A6ACCD;">description :描述文字</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这样，我们每次写新的vue组件或页面时，就可以直接写<code>tsvue</code>,节约时间。</p>`,16),i=[D];function d(F,y,C,u,A,b){return n(),a("div",null,i)}const _=s(r,[["render",d]]);export{h as __pageData,_ as default};

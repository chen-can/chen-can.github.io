import{_ as s,c as n,o as a,f as l}from"./app.60f86721.js";const i=JSON.parse('{"title":"公用样式","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/CSS/CSS_Style.md","lastUpdated":1665897289000}'),p={name:"FrontEnd/CSS/CSS_Style.md"},o=l(`<h1 id="公用样式" tabindex="-1">公用样式 <a class="header-anchor" href="#公用样式" aria-hidden="true">#</a></h1><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* 颜色变量 */</span></span>
<span class="line"><span style="color:#A6ACCD;">//每个主题色又分别有对应的light(淡色)、dark(深色)、disabled(禁止状态时的颜色)</span></span>
<span class="line"><span style="color:#A6ACCD;">//尺寸：xs(10)、sm(20)、md/base(30正常)、lg(40) 和 xl(50)</span></span>
<span class="line"><span style="color:#676E95;">/* 行为相关颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-primary</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ADB838;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-success</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">4cd964;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-warning</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">FAB714;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-error</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">D12E32;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-info</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">909399;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* 边框颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">border-color</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">e2e2e2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* 文字尺寸 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-sm</span><span style="color:#A6ACCD;">:24rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-base</span><span style="color:#A6ACCD;">:28rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-lg</span><span style="color:#A6ACCD;">:32rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* 图片尺寸 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">img-size-sm</span><span style="color:#A6ACCD;">:40rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">img-size-base</span><span style="color:#A6ACCD;">:52rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">img-size-lg</span><span style="color:#A6ACCD;">:80rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* Border Radius */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">border-radius-sm</span><span style="color:#A6ACCD;">: 4rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">border-radius-base</span><span style="color:#A6ACCD;">: 6rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">border-radius-lg</span><span style="color:#A6ACCD;">: 12rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">border-radius-circle</span><span style="color:#A6ACCD;">: 50%;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* 水平间距 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-row-sm</span><span style="color:#A6ACCD;">: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-row-base</span><span style="color:#A6ACCD;">: 20rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-row-lg</span><span style="color:#A6ACCD;">: 30rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* 垂直间距 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-col-sm</span><span style="color:#A6ACCD;">: 8rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-col-base</span><span style="color:#A6ACCD;">: 16rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-col-lg</span><span style="color:#A6ACCD;">: 24rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* 文章场景相关 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-title</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">2C405A; // 文章标题颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-title</span><span style="color:#A6ACCD;">:40rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-subtitle</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">555555; // 二级标题颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-subtitle</span><span style="color:#A6ACCD;">:36rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-paragraph</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F536E; // 文章段落颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-paragraph</span><span style="color:#A6ACCD;">:30rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">box-shadow</span><span style="color:#A6ACCD;">: 0 20rpx 20rpx -20rpx rgba($color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">333</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> $alpha: 0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* 背景颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">F1F8FA;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color-grey</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">F5F5F5;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color-primary</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">E8EACF;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color-hover</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f1f1f1;//点击状态颜色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color-mask</span><span style="color:#A6ACCD;">:rgba(0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">);//遮罩颜色</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* 文字基本颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">5A5B5C; //主要文字</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-regular</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">5A5B5C; //常规文字</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-secondary</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">5A5B5C; //次要文字</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-placeholder</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">808080; //占位文字</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-assist</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">919293; //辅助色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-inverse</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff;//反色</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-disable</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">c0c0c0;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-black</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3B3C3E; //黑</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-white</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff; //白</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-grey</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">878889; //灰</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function c(r,C,t,A,y,D){return a(),n("div",null,e)}const B=s(p,[["render",c]]);export{i as __pageData,B as default};

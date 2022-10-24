import{_ as s,c as n,o as a,f as l}from"./app.4718879b.js";const i=JSON.parse('{"title":"\u516C\u7528\u6837\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/CSS/CSS_Style.md","lastUpdated":1665897289000}'),p={name:"FrontEnd/CSS/CSS_Style.md"},o=l(`<h1 id="\u516C\u7528\u6837\u5F0F" tabindex="-1">\u516C\u7528\u6837\u5F0F <a class="header-anchor" href="#\u516C\u7528\u6837\u5F0F" aria-hidden="true">#</a></h1><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#676E95;">/* \u989C\u8272\u53D8\u91CF */</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6BCF\u4E2A\u4E3B\u9898\u8272\u53C8\u5206\u522B\u6709\u5BF9\u5E94\u7684light(\u6DE1\u8272)\u3001dark(\u6DF1\u8272)\u3001disabled(\u7981\u6B62\u72B6\u6001\u65F6\u7684\u989C\u8272)</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5C3A\u5BF8\uFF1Axs(10)\u3001sm(20)\u3001md/base(30\u6B63\u5E38)\u3001lg(40) \u548C xl(50)</span></span>
<span class="line"><span style="color:#676E95;">/* \u884C\u4E3A\u76F8\u5173\u989C\u8272 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-primary</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ADB838;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-success</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">4cd964;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-warning</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">FAB714;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-error</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">D12E32;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-info</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">909399;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u8FB9\u6846\u989C\u8272 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">border-color</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">e2e2e2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u6587\u5B57\u5C3A\u5BF8 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-sm</span><span style="color:#A6ACCD;">:24rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-base</span><span style="color:#A6ACCD;">:28rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-lg</span><span style="color:#A6ACCD;">:32rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u56FE\u7247\u5C3A\u5BF8 */</span></span>
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
<span class="line"><span style="color:#676E95;">/* \u6C34\u5E73\u95F4\u8DDD */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-row-sm</span><span style="color:#A6ACCD;">: 10px;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-row-base</span><span style="color:#A6ACCD;">: 20rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-row-lg</span><span style="color:#A6ACCD;">: 30rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u5782\u76F4\u95F4\u8DDD */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-col-sm</span><span style="color:#A6ACCD;">: 8rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-col-base</span><span style="color:#A6ACCD;">: 16rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">spacing-col-lg</span><span style="color:#A6ACCD;">: 24rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u6587\u7AE0\u573A\u666F\u76F8\u5173 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-title</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">2C405A; // \u6587\u7AE0\u6807\u9898\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-title</span><span style="color:#A6ACCD;">:40rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-subtitle</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">555555; // \u4E8C\u7EA7\u6807\u9898\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-subtitle</span><span style="color:#A6ACCD;">:36rpx;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">color-paragraph</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3F536E; // \u6587\u7AE0\u6BB5\u843D\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">font-size-paragraph</span><span style="color:#A6ACCD;">:30rpx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">box-shadow</span><span style="color:#A6ACCD;">: 0 20rpx 20rpx -20rpx rgba($color: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">333</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> $alpha: 0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">1</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u80CC\u666F\u989C\u8272 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">F1F8FA;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color-grey</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">F5F5F5;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color-primary</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">E8EACF;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color-hover</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">f1f1f1;//\u70B9\u51FB\u72B6\u6001\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">bg-color-mask</span><span style="color:#A6ACCD;">:rgba(0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">4</span><span style="color:#A6ACCD;">);//\u906E\u7F69\u989C\u8272</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/* \u6587\u5B57\u57FA\u672C\u989C\u8272 */</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">5A5B5C; //\u4E3B\u8981\u6587\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-regular</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">5A5B5C; //\u5E38\u89C4\u6587\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-secondary</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">5A5B5C; //\u6B21\u8981\u6587\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-placeholder</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">808080; //\u5360\u4F4D\u6587\u5B57</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-assist</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">919293; //\u8F85\u52A9\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-inverse</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff;//\u53CD\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-disable</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">c0c0c0;</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-black</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">3B3C3E; //\u9ED1</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-white</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ffffff; //\u767D</span></span>
<span class="line"><span style="color:#A6ACCD;">$</span><span style="color:#FFCB6B;">text-color-grey</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">878889; //\u7070</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function c(r,C,t,A,y,D){return a(),n("div",null,e)}const B=s(p,[["render",c]]);export{i as __pageData,B as default};

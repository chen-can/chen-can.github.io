# HTML 笔记
## 常用标签属性
```html
<input placeholder="预设"></input>

<a target="_blank">打开在新建窗口</a>
```

## 锚
```html
<a id="tips">提示部分</a>

<a href="#tips">跳到提示部分</a>
```


## 占位符
```html
&#12288; //中文汉字占位符
&nbsp; //空格占位符
```



## 网站图标
```html
<link  href="favicon.ico"/>//网站图标
```

## 网站图片
```html
<img src="logo.png" alt="logo"/>//网站图片
```
> 大图使用jpg、小图优先使用字体图标其次是png,静态数据一般放在云服务器上这样能加快页面渲染减少用户等待时长
## Meta
```html
<meta name="keywords" content="html"> //为搜索引擎定义关键词
<meta name="description" content="免费">//描述内容
<meta http-equiv="refresh" content="30">//每三十秒刷新页面
```

## 标签语义

|标签|说明|
|----|----|
|h1~h6|内容标题（页面中最好只有一个h1标签）|
|header|页眉|
|footer|页脚|
|nav|导航|
|main|主体内容（页面中最好只出现一次）|
|article|独立的内容容器|
|section|一组相似内容 如：商品卡片|
|aside|侧边栏或小部件|
|time|时间|
|address|地址|
|del|不用 如：原价|
|ins|修正 如：现价|
|s|错误的|
|p|段落|
|abbr|缩写|
|small|描述声明提示 如：限购|
|strong、em、mark|强调|
|cite|小段引用|
|blockquote|大段引用|


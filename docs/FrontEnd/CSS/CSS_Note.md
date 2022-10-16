#  CSS 笔记

## 偏移自身一半
```css
.class{ transform: translate(-50%, -50%); }
```
## 去除a标签下划线
```css
.class{ text-decoration:none; }
```
## 去除列表的前缀符号
```css
.class{ list-style:none; }
```
## 字间距
```css
.class{ letter-spacing:20px; }
```
## 光标
```css
.class{ cursor:pointer; }
```
## 优先级最高
```css
div{ color:red !important }
```

## 清除浮动代码
```css
.clearfix:after {
    display:block;
    content:'';
    clear:both;
    height:0;
}
.clearfix {
    zoom: 1;
}
```
## 隐藏滚动条
```css
.note-menu::-webkit-scrollbar {     
    display: none;
}
```
## 防止单行文字溢出
```css
.text{
    text-overflow:ellipsis;
    overflow:hidden;  
    white-space:nowrap;
}
```
## 背景图片居中
```css
.img{
	background:url(xxx);
	background-position-x: center;
	background-position-y: center;
}
```

## 去掉 input 发光
```css
input:focus{
    box-shadow:none;
}
或
input:focus{
    outline: none;
}
```
## 多行文字… 省略的方法
```css
.text{
	overflow: hidden;
	word-break: break-all;  /*允许在单词内换行，更美观*/
	text-overflow: ellipsis;
	display: -webkit-box;  /*元素作为box伸缩盒子*/
	-webkit-line-clamp: 3;  /*设置文本行数限制*/
	-webkit-box-orient: vertical;  /*设置文本排列方式*/
}
```
## 单行文字… 省略的方法
```css
.class{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```
## 在position:fixed 下居中
```css
.class{
    position:fixed;
    left: 0;
    right: 0;
}
```
## 单词/数字 不换行溢出解决办法
```css
.text{
    word-break: break-all;
    word-wrap: break-word;
}
```

## 盒子模型
```css
.class{
  box-sizing: [content-box]
              [border-box]
              [inherit]
}
```
## 圆角效果
```css
border-radius:5% | 10px;
```
## 阴影效果
```css
box-shadow : X轴 Y轴 [阴影模糊半径px] [阴影扩展半径px] [阴影颜色] [投影方式:内inset]
box-shadow : 1px 1px 10px -4px black;
```
## 边框图片
```css
border-image:[url()] [50像素] [round(平铺)\ repeat(重复)\ stretch(拉伸) ]
```

## calc 计算
```css
.class{ width: calc(100% - 80px); }
```
## 宽高比 aspect-ratio
```css
.class{ aspect-ratio: 16 / 9; }
```
## img图片不被拖动
```css
.class{ -webkit-user-drag: none;  }
```
## 只留文字的背景
```css
.class{ -webkit-background-clip:text; }
```
## 对比度
```css
.class{ filter:contrast(30); }
```
## 高斯模糊
```css
.class{ filtar:blur(20px); }
```
## 延迟动画
```css
.class{ animation-delay:0.5s; }
```
## 切割空间
```css
.class{ clip-path:inset(0px 50% 0 0); }
```
## 隐藏背面
```css
.class{ backface-visibility:hidden; }
```
## 设定透视深度
```css
.class{ perspective:(1000px); }
```







## calc 计算
```css
.class{ width: calc(100% - 80px); }
```
## 宽高比 aspect-ratio
```css
.class{ aspect-ratio: 16 / 9; }
```
## img图片不被拖动
```css
.class{ -webkit-user-drag: none;  }
```
## 只留文字的背景
```css
.class{ -webkit-background-clip:text; }
```
## 对比度
```css
.class{ filter:contrast(30); }
```

## 高斯模糊
```css
.class{ filtar:blur(20px); }
```
## 延迟动画
```css
.class{ animation-delay:0.5s; }
```
## 切割空间
```css
.class{ clip-path:inset(0px 50% 0 0); }
```
## 隐藏背面
```css
.class{ backface-visibility:hidden; }
```
## 设定透视深度
```css
.class{ perspective:(1000px); }
```
## 小于12px字体的实现
```css
.font-size-8 {
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-transform: scale(0.666, 0.666);
}

.font-size-9 {
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-transform: scale(0.75, 0.75);
}

.font-size-10 {
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-transform: scale(0.833, 0.833);
}

.font-size-11 {
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  -webkit-text-size-adjust: none;
  -webkit-transform: scale(0.916, 0.916);
}

```
	

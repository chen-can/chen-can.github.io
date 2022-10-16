# yrm
[yrm](https://github.com/i5ting/yrm)是镜像源管理工具。
## 软件安装
全局安装
```bash
npm install -g yrm
```
## 常用命令
列出可以使用的镜像
```bash
yrm ls
```
结果如下
```bash
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
  # 其中带`*` 的就是当前使用的源. 上述适用的是淘宝的镜像源
```
查看当前源
```bash
yrm current
```
切换镜像源
```bash
yrm use taobao
```
测试指定源的速度
```bash
yrm test taobao
```



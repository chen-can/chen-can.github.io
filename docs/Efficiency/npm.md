# npm
[npm](https://www.npmjs.cn/)是包管理工具。
## 常用命令
初始化新项目
```bash
npm init
```
查看版本
```bash
npm -v
# 或
npm --version
```
运行脚本
```bash
npm run
```
## 软件安装
安装npm
```text
node 自带
```
更新npm自身
```bash
npm install npm@latest -g
```
## 安装依赖
全局安装
```bash
npm install -g [package]
```
生产环境
```bash
npm install [package] --save 
#或
npm install [package] -S
```
开发环境
```bash
npm install [package] --save-dev
#或
npm install [package] -D
```
安装package.json中的软件
```bash
npm install
```
## 查看依赖
列出项目的依赖
```bash
npm list
```
列出项目的依赖，并限制显示的依赖深度
```bash
npm list --depth=2
```
## 更新依赖
更新所有依赖包
```bash
npm update
```
更新指定依赖包
```bash
npm update [package]
```
## 卸载依赖
删除全局软件
```bash
npm uninstall -g [package]
```
删除项目中依赖包
```bash
npm uninstall [package]
```

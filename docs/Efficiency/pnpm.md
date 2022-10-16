# pnpm
[pnpm](https://pnpm.io/zh/installation)是包管理工具。
## 常用命令
初始化新项目
```bash
pnpm init
```
查看版本
```bash
pnpm -v
# 或
pnpm --version
```
运行脚本
```bash
pnpm
```
## 软件安装
安装pnpm
```bash
npm install -g pnpm
```
苹果用户可以使用brew进行安装
```bash
brew install pnpm
```
更新pnpm自身
```bash
pnpm add -g pnpm
```
## 安装依赖
全局安装
```bash
pnpm add -g [package]
```
生产环境
```
pnpm add [package]
```
开发环境
```bash
pnpm add [package] -D
```
安装package.json中的软件
```bash
pnpm install
# 或
pnpm i
```
## 查看依赖
列出项目的依赖
```bash
pnpm ls
# 或
pnpm list
```
列出项目的依赖，并限制显示的依赖深度
```bash
pnpm list --depth=2
```
## 更新依赖
更新所有依赖包
```bash
pnpm update
# 或
pnpm up
```
更新指定依赖包
```bash
pnpm upgrade [package]
# 或
pnpm up [package]
```
## 卸载依赖
删除全局软件
```bash
pnpm uninstall -g [package]
# 或
pnpm un -g [package]
# 或
pnpm remove -g [package]
# 或
pnpm rm -g [package]
```
删除项目中依赖包
```bash
pnpm un [package]
```
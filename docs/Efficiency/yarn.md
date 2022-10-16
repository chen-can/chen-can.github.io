# yarn
[yarn](https://yarnpkg.com/getting-started)是包管理工具。
## 常用命令
初始化新项目
```bash
yarn init
```
查看版本
```bash
yarn -v
# 或
yarn --version
```
运行脚本
```bash
yarn run
# 或
yarn
```
## 软件安装
安装yarn
```bash
npm install -g yarn
```
苹果用户可以使用brew进行安装
```bash
brew install yarn
```
更新yarn到最新版本
```bash
yarn set version latest
# 或
yarn set version from sources
```
## 安装依赖
全局安装
```bash
yarn add -g [package]
```
生产环境
```bash
yarn add [package]
```
开发环境
```bash
yarn add [package] –dev
#或
yarn add [package] -D
```
安装package.json中的软件
```bash
yarn
# 或
yarn install
```
## 查看依赖
列出当前项目的依赖
```bash
yarn list
```
列出项目的依赖，并限制显示的依赖深度
```bash
yarn list --depth=0
```
## 更新依赖
更新所有依赖包
```bash
yarn upgrade
```
更新指定依赖包
```
yarn upgrade [package]
```
## 卸载依赖
删除全局软件
```bash
yarn remove -g [package]
```
删除项目中依赖包
```bash
yarn remove  [package]
```










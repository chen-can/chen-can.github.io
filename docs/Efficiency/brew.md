# brew
[brew](https://brew.sh/index_zh-cn.html)是MAC与LINUX上的软件包管理器。
## 软件安装
下面介绍三种方式安装 brew
### 第一种方法
官网中复制下图中命令，在terminal中输入该命令，即：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
输入命令回车后，我们会发现下载速度很慢，你只需要一直等，然后一直等到它超时报错。  
一直输入命令下载，一直报错，除非你给它加个代理，可能某一刻它就突然下载成功了。  
没错，就是下面这个它
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22aa237397424af1bbb2edd61d1bb540~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)
### 第二种方法
1、在浏览器中搜索`https://raw.githubusercontent.com/Homebrew/install/master/install.sh`，然后在Network中找到Response中的内容，复制下来。  
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/29ce21d2b1af439597358322e95df3d1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)
2、在终端中新建一个`install.sh`文件，在终端中输入`touch install.sh`。  
3、编辑文件，`vim install.sh`，把复制的内容粘贴进文件里，然后`:wq`保存退出。  
4、最后运行文件，`sh install.sh`，等待brew安装完成即可!
### 第三种方法
可以用另一个自动脚本(全部国内地址)，按回车后，根据提示操作：输入镜像序号 --> 输入Y，回车等待brew安装完成即可。
```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3009a4623b634e9d94552882c043f37d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)
## 常用命令
查看版本
```bash
brew --version
#或
brew -v
```
## 安装软件
```bash
brew install <formula>
```
## 查看软件
```bash
brew list
```
## 更新软件
更新所有软件
```bash
brew update
```
更新指定软件
```bash
brew update <formula>
```
## 卸载软件
```bash
brew unistall <formula>
```
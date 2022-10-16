# git
[git](https://git-scm.com/)是分布式版本控制系统。
## 软件安装
苹果用户可以使用brew进行安装
```bash
brew install git
```
windows 用户请下载安装 
> 官网下载：https://git-scm.com/downloads  
## 配置基础信息
```shell
git config --global user.name "你的名字"
git config --global user.email "你的邮@箱地址.com"
```
## 常用命令
创建本地仓库
```shell
git init        
```
绑定GitHub上的仓库
```shell
git remote add github <项目地址>
```
添加到暂存区 
```shell
git add <你要备份的文件名>
git add .  
```
`.` 表示添加全部修改过的文件
提交到本地仓库-附说明
```shell
git commit -m '说明'
```
推送到远程仓库
```shell
git push
```
首次推送
```shell
git push -u origin main
```
克隆远程仓库到本地  
```shell
git clone <远程代码库地址>
```
克隆远程仓库分支代码到本地  
```shell
git clone -b <分支的名字> <远程代码库地址>
```
当前分支
```shell
git branch
```
创建分支
```shell
git branch <新分支的名字>
```
切换分支
```shell
git checkout <分支的名字>
```
创建并切换分支
```shell
git checkout -b dev
```
合并分支
```shell
git merge <分支> 
# 这个意思是把分支合并到 当前的分支  
# 假设当前的是master主分支，那就是把<分支>合并到当前分支
```
删除分支
```shell
git branch -d <分支>
```
拉去线上仓库代码
```shell
git pull
```
查看git状态
```shell
git status
```
## 常见问题
如何忽略文件  
在项目根目录创建 `.gitignore`文件把不想push的文件,比如：`node_modules`添加到`.gitignore`文件里
![图 1](img/32b5b463aafc022319ba277ab72cc415b8cce4bc261f00a81790c5b4fad18532.png)  
如何移除Git远程仓库的node_modules
```shell
# 依次执行以下命令
git rm -r --cached node_modules
git commit -m '移除node_modules文件夹'
git push origin master
```
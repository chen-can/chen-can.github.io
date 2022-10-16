# SSH - 公钥 私钥
SSH是Secure Shell的缩写，SSH 为建立在应用层基础上的安全协议。
## 创建SSH
打开Shell（Windows下打开Git Bash）
```shell
ssh-keygen -t rsa -C "你的邮@箱地址.com"
```
接着一路回车
- id_rsa是私钥，不能泄露出去
- id_rsa.pub是公钥，可以放心地告诉任何人
## 查看公钥
在【终端】输入
打开Shell（Windows下打开Git Bash）
```shell
cat ~/.ssh/id_rsa.pub
```
##  查看私钥
```shell
cat ~/.ssh/id_rsa
```
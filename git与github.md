# git/github

 - git： 版本控制工具
         之前有个老项目，运行还不错，但是觉得技术比较陈旧，设计的风格也比较古老，所以公司决定更新迭代，当程序员开发完成之后，测试也没有问题，但是上线之后新网站挂了，问 该怎么办？
         新的挂了 ， 老的正常运行,让老版本回滚回来，等新版本的网站确认好没问题再次上线即可
         
         版本的时光穿梭
          
 - github：远程代码管理仓库，贵圈基友平台（交流，学习）
 

 ### 集中式 vs 分布式

    集中式缺点：
    必须联网。比较慢，都使用一个中央服务器。有可能会造成数据丢失

    分布式：
        不用联网就能进行版本控制，速度快


###　初始化版本控制状态　　
    找到要控制的文件目录 鼠标右键找到　git bush  here 点击
    打开控制台输入一个 git init 
 
   版本控制都是一个 .git 这个隐藏文件的如果不小心把 .git 
   删除。就不能进行版本控制了

   查看git 状态   git status

   通过 tab  补全文件

   ls ll 查看文件的基本信息

   通过上下键直接切换刚才输入的命令
###  设置作者信息
  - 设置用户名  git config -- global user.name"你的名字" （英文的）
  - 设置邮箱 git config --global user.email （）


   工作区到暂存区 
        git add  指定文件名
        git add . 把多个文件放到暂存区
        暂存区到版本区
        git commit-m "注释（你能直接识别的注释）"       
        快速把工作区的代码放入版本区（已经被管理过的文件）
        git commit -a -m                            
        注意 上面这个命令 前提条件是文件已经提交过一次才可以使用 
 - 查看 
  git log
  git reflog
  版本操作的多使用 reflog
  查看每个区域的不同点

## 创建过滤指定文件
 - 创建一个 .gitignore的文件
  - touch     .gitignore 
  配置过滤项
  www.cnblogs.com/zhihang
    /create.txt 
     node_modules/
         

 +   如果说配置不起作用，可以先把之前的操作清除一下，在过滤操作     
git rm -r --cached
 +   如果说配置不起作用，可以先把之前的操作清除一下，在过滤操作     
git rm -r --cached

撤销回滚
git reset --hard 版本ID


# github
 其实有好多代码托管平台


 把代码放到远程平台

 1.创建一个github项目

 2.绑定秘钥 
   ssh-keygen -t rsa -C "812496969@qq.com" (只需要一次)

   3.确定版本库是最新的.(没有东西提交了)
  4 查看远程仓库：
  git remote -v (使用git init的时候是查不出来东西的)

  5.添加远程仓库
   git remote add origin(这个名字是可以改变的) 

   6 。git pull origin master(保证能够成功上传，进行远程和本地相合并)

  7.git push origin master 上传（第一次会出现让输入用户名和密码）


还有第二种方式

1先在远程仓库创建一个夏目
2.gut clone 项目的地址
3.git add . git commit -m ""
4.git push origin master
 

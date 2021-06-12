---
layout: post
title: 博客构建指南 - 从建站到寻求收录
date: 2020-03-29
Author: Teages
tags: [Blog, CC BY NC 4.0]
comments: true
toc: true
hide: true
---

终于,在长久的努力后,我终于拥有了一个稳定的博客

在搭建这个博客的时候踩到了蛮多坑的,这里来分享

博客缓更,与其他文章不同,这篇文章重在**引导你的方向**,而不是**直接**告诉你怎么做

适合有基础的人阅读,如果你喜欢捣鼓东西,这篇教程可能会让你学到许多

<!-- more -->

# 准备

只需要一个你自己的域名...

# 建站

首先,我选择的是Jekyll这个老牌静态博客框架,搭配[LOFFER](https://github.com/FromEndWorld/LOFFER)这个主题.

Jekyll的优点很明显: 庞大的用户基数带来的活跃社区支持,还有GitHub的官方适配.

现在摆在我们面前的问题是:选择哪家来托管呢?

静态页面托管有很多家,其中著名的有GitHub Pages,Coding Pages,和now

Coding Pages现在访问会被301重定向一次,不利于搜索引擎收取,因此out

剩下的GitHub Pages和now该选谁?

答案是:我全都要



GitHub Pages的优点是背靠微软爸爸,服务器访问有保证,缺点是会拦截百度的收录

now全都是优点,除了流量有点小...(才20G啊)

不过我想到了一个完美的办法来将他们的优势互补!!!



Jekyll要怎么建站想必大家都十分清楚了

> 不清楚可以去百度Jekyll

这边给一套简单的在GitHub Pages捣鼓的流程:

1. 找一个自己喜欢的Jekyll主题
2. fork这个主题,改名成`<GitHub用户名>.github,io`
3. 在setting里开启GitHub Pages,并且绑定上自己的域名

要注意的是:请不要把顶级域名绑定上去!!!

>  例如我不会把`teages.xyz`绑定上去,而是绑定了`blog.teages.xyz`

在GitHub Pages捣鼓完以后,我们需要去[注册NOW账号](https://zeit.co/signup)

注册账号只需要用GitHub登录,然后授权GitHub Pages仓库,让它自动建站

建站成功以后,要去把域名的解析服务器换成NOW的服务器

> 建站出现问题可以在下面评论区问一下,英语好可以直接问now的客服,他们回复很快



> 绝赞贵阳中

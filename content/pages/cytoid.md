---
title: 手把手教你Cytoid制谱
date: 2020-02-11
Author: Teages
tags: [Cytoid , CC BY NC 4.0, 失效]
comments: true
toc: true
next: /pages/test.md
---

<!--[POST]-->

鉴于很多人不会做Cytoid的谱面,为了方便学习交流,特撰写本教程

无论什么时候,看一下官方wiki总是有帮助的.

传送门:[官方wiki](https://github.com/Teages/Cytoid-wiki-Chinese/)

> 文章允许署名转载，转载请挂上原文链接（主要怕错误更正不能及时通知到位）

<!-- more -->

**公告**

> 警告:文中标识出"直接搬运wiki"的内容可能因年代久远,存在错误!!!请读者**自行鉴别**

**更新:**
> #5 2020/4/5 修改了文章篇幅, 将PCtyx的使用指南独立了出来, 本文将注重如何制作容易被认可的谱面.
>
> #4 2020/3/14 对PCtyx进行了大改，以适配v200,并修复一些错误
> 
> #3 2020/2/25 经过测试,#2中提到的延迟应该是0.9s,非常抱歉!!!!!
> 
> #2 2020/2/21 **修改已验证** 按**最新的**软件,判定线都需要0.9s来矫正到对应位置(在PCtyx v131以前是0.8s),见[第二步 : 调整音频](#第二步--调整音频)
> 
> #1 2020/2/21 更规范化的音频剪辑方法,见[第二步 : 调整音频](#第二步--调整音频)

文章欢迎在下方评论区指正（需要登录GitHub）

# 准备工作

>  做谱前必须要有的

1. 你的脑子
2. 耐心
3. 一部运行WIndows 10的PC
4. 一些乐理知识(了解节拍,BPM这些就足够了)
5. 你要做谱的音频(最好是mp3),搜索它的各项数据(例如:参与作曲的人)

> 免责声明:在你做谱之前,请注意避免版权纠纷,发生的任何纠纷都与本教程编者,Cytoid及CytoidIO无关!且CytoidIO有权下架任何被起诉侵权的谱面!

> Tips: 你准备的音频如果太过复杂,可能会增加做谱难度,请选择力所能及的音频

# 开始做谱

## 第一步 : 测量BPM

对于测量BPM,我们推荐使用[osu!](https://osu.ppy.sh/) (请不要下载osu!lazer,它不是一个完善的版本)

下面以osu!为例进行BPM测量,下载和安装osu!的步骤将被省略.

1. 打开osu!,选择Edit
2. 将你的mp3文件拖入osu!
3. 需要你输入歌曲信息时,直接取消(Cancel)
4. 进入timing
5. 按下空格键开始播放音频,同时跟着节拍按键盘上的 T 键.

按足够多次,你会得到一个相对准确的数.

> Tips:建议将这一步重复几次,因为如果BPM判断错误,你将难以制作出优秀的谱面



## 第二步 : 调整音频

调整音频,我们推荐使用开源免费的工具[Audacity ®](https://www.audacityteam.org/)

> Q : 为什么我们要调整音频?
>
> A : 实际上,Cytoid需要0.9s来调整判定线,如果没有这段时间,note会出现得非常突然
>
> 注意: 经过验证,PCtyx v131矫正时间为0.8s,因此推荐使用最新的PCtyx

> 下面的方法是wiki提供的,在某些情况不管用

实际上,你可以使用任何你习惯使用的音频编辑工具,我们将以Audacity为例

首先找到音频的第一个峰,删去前面的空白

![1](/posts-source/cytoid/pic/1.png)

然后打开 生成 - 静音 ![2](/posts-source/cytoid/pic/2.png)

在前面插入0.9s的静音

![3](/posts-source/cytoid/pic/3.png)

大功告成!请使用 *导出* 功能,将你的音频导出为多种格式.

下面是一些推荐格式

| 软件     | 支持的格式      |
| -------- | --------------- |
| Cytoid   | ogg(首选),mp3等 |
| Pctyx    | ogg(首选),wav等 |
| Cy2unity | ogg(首选),wav等 |

> 补充: 如果你觉得这样效果不好,可以直接在源音频前面加0.900s的静默,这样更简单但是可能导致节拍对不上!!! 

> 最好的办法: 增加静默时加0.9s以上的静默,至于加多少?这里有个公式.请把实际BPM代入下方公式计算:

> ```  Result = 0.9 + ( 60 / BPM )*k ``` ,k是任意一个自然数,你可以在自然数中选取一个适合的数代入k

> 合适是什么意思?导出以后,开制谱器加载音频就知道了,最好让音频的第一拍响起时,判定线正好在最低/最高处

## 第三步 : 开始制谱

这里有两种现代制谱器 : PCTyx 和 Cy2unity

编者建议使用PCTyx,因此教程以PCTyx v200.2为例

> Tips : Cy2unity 在其程序目录下自带了一份中文教程.


> 旧版本PCtyx教程: [教程](https://github.com/Teages/Cytoid-wiki-Chinese/tree/master/guides/charting/pctyx)

[新版本教程](/pages/newPCtyx.html)

~~显然,PCTyx的存档文件不能直接导入Cytoid,我们需要一些转换,再此之前,让我们了解一下Cytoid读取的文件应该是怎样的~~

> v200.1已经支持导出为cy2格式

## 第三步 : 让Cytoid读取你的谱面

在[Cytoid.io](https://cytoid.io/)上,你可以下载各种玩家制作的千奇百怪的谱面.你下载到的文件通常以*.cytoidlevel*为后缀

cytoidlevel文件本质上是一个zip文件,所以我们可以把它的后缀改成 *.zip* 后,用解压软件打开.

我们以[Ecstatic](https://cytoid.io/levels/io.cytoid.ecstatic)为例

一个cytoidlevel文件里应该包括这些:

![4](/posts-source/cytoid/pic/4.jpg)

> 这里有一个[示例文件](/posts-source/cytoid/other/example.zip),如果你不想了解原理,可以直接参考[暴力替换法](#暴力替换法)

#### 将.CSV文件转换为Cytoid接受的样子

> v200已经不需要,转换器不支持v150以上版本,如果您使用v200,请跳过这一小段

我们这里使用Lumi的转换器

 [Windows版本](/posts-source/cytoid/other/PCtyxToC2_Lumi_Windows.zip)   [MacOS版本](/posts-source/cytoid/other/PCtyxToC2_Lumi_macOS.zip) 

请先安装java8!!!不推荐其他版本!!!

以Windows版本为例

运行PCtyxToC2.bat文件,会打开一个CMD窗口

输入你的PCTyx存档位置(例如C:/1.csv),回车.

输入你想输出的文件路径(例如C:/1.easy.txt),回车.

输入y,回车

输入你的谱面bpm

输入一开始的速度(如果你谱面一开始就变速,就输入变速倍数,否则就1)

大功告成!

看不懂?

麻烦换PCtyx v200.2导出(无慈悲)

> 换成PCtyx v200可能会使谱面出现一些小问题,必须手动修复
>
> ~~我就修了十分钟.jpg~~

#### Level.json *

这是官方的level.json格式.**请确保您不随意删除原来的文本.** 否则,您的谱面可能随时被删除,您的帐户可能会因多次违规而被封禁.

有留空项的请把被留空的项整个删除( CytoidIO升级导致的bug,不这样会无法读取 )

~~~json
{
  
  "version": 1,
  "schema_version": 2,

  "id": " ",

  "title": "",
  "title_localized": "",

  "artist": "",
  "artist_localized": "",
  "artist_source": "",
  "illustrator": "",
  "illustrator_source": "",

  "charter": "",
  
  "music": {
    "path": "music.mp3"
  },
  "music_preview": {
    "path": "preview.mp3"
  },
  "background": {
    "path": "background.jpg"
  },
  "charts": [
    {
      "type": "easy",
      "name": " ",
      "difficulty": 1,
      "path": "chart.easy.txt"
    },
    {
      "type": "hard",
      "name": " ",
      "difficulty": 9,
      "path": "chart.hard.txt"
    },
    {
      "type": "extreme",
      "name": " ",
      "difficulty": 15,
      "path": "chart.extreme.txt"
    }
  ]
  
}
~~~
看不懂?大丈夫!(没问题)

这里有模板,把你的信息换上去就是.

> 下面部分内容摘自官方wiki翻译

这是手动填写它的方式。手写比用编译器编写要好得多，因为**你不需要为它下载额外的软件**，更不用说**使用Cytoid谱面编译器的缺陷**（必须给它管理员权限）等等。在大多数情况下，手写的速度也要快得多，因此强烈推荐。请注意，“path”部分中的任何名称不必与示例相同，但音频的“path”和图像必须为.mp3（对于音频，不建议使用.wav）和.jpg / .png（用于图像）。

使用此作为参考指南。由于情况有可能不同，让我回答您下面可能遇到的所有问题。

请根据实际情况替换两个"-"里面的内容,并删除"-":

```json
{  
"version": -谱面版本号_纯数字-,
  "schema_version": 2,

  "id": "-你的cytoid账号-.-谱面名字-",
  
  "title": "-音乐标题-",
  "title_localized": "-音乐英文名-",

  "artist": "-曲师-",
  "artist_localized": "--曲师英文名-",
  "artist_source": "-曲师的链接-",

  "illustrator": "-画师-",
  "illustrator_source": "-画师的链接-",

  "charter": "-你的名字-",
  
  "music": {
    "path": "-音乐名称_.MP3_确保名称和音乐文件一致-"
  },
  "music_preview": {
    "path": "-预览音乐名称_.MP3_同上-"
  },
  "background": {
    "path": "-封面名称_.png or .jpg_同上-"
  },
  "charts": [
    {
      "type": "easy",
      "name": "-自定义难度名称，不需要则不填-"
      "difficulty": -难度等级_纯数字-,
      "path": "-谱面位置-"
    },
    {
      "type": "hard",
   "name": "-自定义难度名称-"
      "difficulty": -难度等级_纯数字-,
      "path": "-谱面位置-"
    },
    {
      "name": "-自定义难度名称-"
      "difficulty": -难度等级_纯数字-,
      "path": "-谱面位置-"
    }
  ]
  
}
```

##### 常问问题：

###### 问：我不需要3个难度。

A.删除不需要的难度，但请确保删除结尾逗号。例如，假设您只需要hard难度：

```
  "charts": [
    {
      "type": "easy",
    "name": "Lunatic"
      "difficulty": 9,
      "path": "lunatic.chart"
    },
    {
      "type": "hard",
   "name": "Very Hard"
      "difficulty": 10,
      "path": "hard.chart"
    },
    {
      "type": "extreme",
   "name": "Extreme Overload"
      "difficulty": 12,
      "path": "extreme.chart"
    }
  ]
```

在这里，你可以删除这样的部分。如果要删除extreme难度，请务必删除结束逗号！

```
  "charts": [
    {
      "type": "hard",
   "name": "Very Hard"
      "difficulty": 10,
      "path": "hard.chart"
    }
  ]
```



###### 问：如何添加故事板？

答：如果每个难度没有超过2个不同的故事板，则无需将其包含在json中。但是，如果你有第3个故事板，那么

```
    {
      "type": "extreme",
      "name": "Extreme Overload",
      "difficulty": 15,
      "path": "extreme.chart",
      },
      "storyboard": {
       "path": "storyboard3.json"
      }
```

可以为不同谱面添加不同的故事板。storyboard.json的名称不一定是“storyboard3.json”。

###### 问：我想为每个级别使用不同的音频文件，我该怎么办？

A.你可以像这样使用music_override：

```
    {
      "type": "extreme",
      "name": "Extreme Overload",
      "difficulty": 15,
      "path": "extreme.chart",
      "music_override": {
        "path": "music1.mp3"
      },
      "storyboard": {
       "path": "storyboard3.json"
      }
    }
```

添加music_override部分，并将要播放的音乐的“path”放在上面。



至于其他文件,直接替换就是

最后打包成.zip,然后改后缀为.cytoidlecel,你的谱面就打包好了,快上传到CytoidIO吧!

#### 暴力替换法

这里有一个[示例文件](/posts-source/newPCtyx/example.zip),你可以通过暴力替换里面的文件来实现

1. 把你的音乐和谱面重命名为示例文件那样(如果没有写其他难度的谱面就删掉那个文件)
2. 进入`level.json`,把所有的提示换成对应的内容
3. 删掉你没有放进去的难度,请注意逗号

> 你写作文的时候,可以这样写
>> 简单,困难,混沌
>
> 但是不能这样写
>> ,困难,混沌
>
> 必须改成
>> 困难,混沌

## 需要注意的

以下摘自官方wiki翻译

> 译者前言: 只要你做出来的谱面你自己能FC,那就是正确的

### 一些制谱的建议

wiki有两篇文章专门讲了这些

[制谱的一般准则](https://github.com/Teages/Cytoid-wiki-Chinese/blob/master/guides/charting/general_guidelines.md)[怎么做容易被喜欢的谱面](https://github.com/Teages/Cytoid-wiki-Chinese/blob/master/guides/charting/extra/charting_and_you.md)

这里,我简单的提几点

#### 经常试着玩自己写的谱

> (玩自己的谱面,)所有没有反应过来(的地方),爆miss的地方(,全改了). ----著名玩家&谱师 RB

无论什么时候,看一下官方wiki总是有帮助的.

传送门:[官方wiki](https://github.com/Teages/Cytoid-wiki-Chinese/)





<!--[POST]-->

---
title: Hello Content v2!
description: The writing experience for Nuxt 3
category: announcement
tags: hello world
---

> 当然可以。这是一篇简短的文章，它包含了许多常用的Markdown语法。

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

这是一个段落。你可以使用**粗体**和*斜体*来强调文本。

你也可以创建无序列表：

- 项目1
- 项目2
- 项目3

或有序列表：

1. 第一项
2. 第二项
3. 第三项

你还可以创建链接，例如 [Bing搜索](https://www.bing.com)。

你也可以插入图片，但是由于聊天框不支持图片，所以我无法演示。

你还可以创建表格：

| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 行1, 列1 | 行1, 列2 | 行1, 列3 |
| 行2, 列1 | 行2, 列2 | 行2, 列3 |

你还可以使用代码块来显示格式化的内容，例如代码：

```
print("Hello, World!")
```

你还可以使用LaTeX来编写数学表达式，例如 $$\sqrt{3x-1}+(1+x)^2$$。

希望这篇文章能帮助你测试Markdown样式。

当然可以。你可以在代码块中指定语言，以便正确高亮显示代码。下面是一些示例：

```html
<!DOCTYPE html>
<html>
<head>
<title>标题</title>
</head>
<body>

<h1>这是一个标题</h1>
<p>这是一个段落。</p>
<p>这是一个段落。</p>
<p>这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的段落。</p>

</body>
</html>
```

```js {4,6-8} [Example Code]
function example() {
  console.log('This line is not highlighted')
  console.log('This line is not highlighted')
  console.log('This line is highlighted')
  console.log('This line is not highlighted')
  console.log('This line is highlighted')
  console.log('This line is highlighted')
  console.log('This line is highlighted')
  console.log('This line is not highlighted')
  console.log('This line is not highlighted')
  console.log('This line is not highlighted')
  console.log('This line is not highlighted')
  console.log('This line is not highlighted')
  console.log('This line is not highlighted')
  console.log('This line is not highlighted')
  console.log('This line is not highlighted')
  console.log('This line is not highlighted')
}
```


```js{1,3-5}[server.js] Code
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```


```css
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}
```

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

希望这些示例能帮助你。
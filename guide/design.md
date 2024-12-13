# 样式

## 介绍

主要介绍如何在项目中使用和规划样式文件。

默认使用 `less` 作为预处理语言，建议在使用前或者遇到疑问时学习一下 [Less](http://lesscss.org/) 的相关特性。

项目中使用的通用样式，都存放于 [src/style/](https://github.com/syh-micro-build/mb-admin/tree/main/src/styles) 下面。

```bash
.
├── index.less # 入口
├── var.css  # css变量
└── variables.module.less # less变量

```

::: tip 全局注入

variables.module.less 这个文件会被全局注入到所有文件，所以在页面内可以直接使用变量而不需要手动引入。

var.css 则是注入到根元素，所以在每个地方也都能用到。

:::

## unocss

项目中使用了 [unocss](https://github.com/unocss/unocss#readme)，具体参见文件使用说明。

可能没有用到人会觉得用起来很不习惯，但就个人而言，用起来还是挺香的。减少了很多不必要的麻烦

语法如下:

```html
<div class="relative w-full h-full px-4"></div>
```

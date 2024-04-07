# 模版生成

## 介绍

为了方便开发者快速生成 `组件` 和 `视图` 文件，本项目提供了 `plop` 为开发者生成统一的文件模版。

## 生成组件

运行

```shell
npm run plop
```

选择 `component` 之后，输入组件名，如 `newComponent`，既可在 `src/components` 目录下创建对应的组件。

组件名会自动转换为大驼峰命名，类名会自动转换为连字符命名。

## 生成视图

运行

```shell
npm run p
```

选择 `view` 之后，输入路径，默认为 `views/NewView`，接着输入模块名，如 `newPage`，既可在 `src/views/NewView` 目录下创建对应的视图文件`NewPage.vue`。

组件名会自动转换为大驼峰命名，类名会自动转换为连字符命名。

## 如何扩展

如果需要扩展额外的视图模版，可以在根目录 `plopfile.js` 文件中，添加初始模版，然后到根目录 `plop` 文件夹中，添加对应的模块代码。具体可以参考 `component` 下的代码。

更多的 `plop` 配置，则可以查阅 [文档](https://plopjs.com/documentation/)

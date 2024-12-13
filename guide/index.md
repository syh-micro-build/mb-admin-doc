# 开始

本文将快速的帮助你从头运行并启动项目。

## 环境准备

本地环境需要安装 [npm](https://www.npmjs.com/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

::: warning 注意

- [Node.js](http://nodejs.org/) 版本要求`18.x`以上，这里推荐 `18.12.1` 及以上。

:::

## 工具配置

如果你使用的 IDE 是[vscode](https://code.visualstudio.com/)的话，可以安装以下工具来提高开发效率及代码格式化：

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [unocss](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - unocss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Volar](https://gitee.com/link?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Djohnsoncodehk.volar) - vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

## 代码获取

::: warning 注意

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。

:::

### 从 GitHub 获取代码

```bash
# clone 代码
git clone https://github.com/syh-micro-build/mb-admin.git

```

## 安装

### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它，推荐 `18.x` 及以上

**验证**

```bash
# 验证 npm 是否安装成功
npm -v

# 验证 node 是否安装成功
node -v
```

如果你需要同时存在多个 `node` 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。

### 安装依赖

在项目根目录下，打开命令窗口执行，耐心等待安装完成即可

```bash
# 安装依赖
npm i
```

::: tip 安装依赖时 husky 安装失败

请查看你的源码是否从 [Github](https://github.com/syh-micro-build/mb-admin) 直接下载的，直接下载是没有 `.git` 文件夹的，而 `husky` 需要依赖 `git` 才能安装。此时需使用 `git init` 初始化项目，再尝试重新安装即可。

:::

当依赖安装完成后，执行以下命令即可启动项目：

```bash
npm run dev
```

## npm script

```json
"scripts": {
  // 本地开发环境运行
  "dev": "vite --mode base --host",
  // 指定环境打包 (dev, test, pro)，例如：npm run build pro
  "build": "run-p type-check \"build-only -- --mode {1}\" --",
  // 本地预览 (dev, test, pro)，例如：npm run preview pro
  "preview": "vite preview --mode",
  // 仅打包 (可忽略)
  "build-only": "vite build",
  // 类型检查
  "type-check": "vue-tsc --build",
  // 代码规范检查
  "lint": "eslint . --fix \"src/**/*.{js,ts,tsx,vue,html}\"",
  // 代码格式化
  "format": "prettier --write --loglevel warn \"src/**/*.{js,ts,json,tsx,css,less,vue,html,md}\"",
  // 样式规范检查
  "style": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  // 单元测试
  "test:unit": "vitest",
  // husky 初始化
  "prepare": "husky",
  // 快速生成统一规范的模块
  "plop": "plop",
  // 检测可更新依赖
  "npm-check": "npx npm-check-updates -i --format group",
  // 标准版本发布
  "release": "standard-version"
},
```

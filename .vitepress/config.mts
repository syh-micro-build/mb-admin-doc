import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Micro Build Admin",
  description: "A VitePress Site For Micro Build Admin Document",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    nav: [
      {
        text: '指南',
        items: [
          {
            text: '指南',
            link: '/guide/introduction',
          },
          {
            text: '深入',
            link: '/dep/lint',
          },
        ],
      },
      {
        text: '组件',
        items: [
          {
            text: '介绍',
            link: '/components/introduction',
          },
          {
            text: '全局组件',
            link: '/components/icon',
          },
          {
            text: '功能组件',
            link: '/components/form',
          },
          {
            text: '函数式组件',
            link: '/components/image-viewer',
          },
        ],
      },
      {
        text: '常用Hooks',
        link: '/hooks/useWatermark',
      },
      {
        text: '常见问题',
        link: '/guide/fqa',
      },
      {
        text: '相关链接',
        items: [
          {
            text: 'Github 站点预览',
            link: 'https://syh-micro-build.github.io/mb-admin/',
          },
          {
            text: 'Github 源码',
            link: 'https://github.com/syh-micro-build/mb-admin',
          },
          {
            text: 'Github 文档源码',
            link: 'https://github.com/syh-micro-build/mb-admin-doc',
          },
          {
            text: 'Github 更新日志',
            link: 'https://github.com/syh-micro-build/mb-admin/blob/master/CHANGELOG.md',
          },
        ],
      },
      {
        text: '交流群',
        items: [
          {
            text: '技术交流群',
            link: '/group/group',
          },
        ],
      },
      {
        text: '捐赠',
        items: [
          {
            text: '捐赠',
            link: '/donate/donate',
          },
        ],
      },
    ],

    sidebar: {
      '/': [
        {
          text: '指南',
          items: [
            {
              text: '介绍',
              link: '/guide/introduction',
            },
            {
              text: '开始',
              link: '/guide/',
            },
            {
              text: '项目配置',
              link: '/guide/settings',
            },
            {
              text: '路由',
              link: '/guide/router',
            },
            {
              text: '权限',
              link: '/guide/auth',
            },
            {
              text: 'Mock&联调',
              link: '/guide/mock',
            },
            {
              text: '组件注册',
              link: '/guide/component',
            },
            {
              text: '样式',
              link: '/guide/design',
            },
            {
              text: '构建&部署',
              link: '/guide/deploy',
            },
          ],
        },
        {
          text: '深入',
          items: [
            {
              text: '项目规范',
              link: '/dep/lint',
            },
            {
              text: '黑暗主题',
              link: '/dep/dark',
            },
            {
              text: '模版生成',
              link: '/dep/create-module',
            },
          ],
        },
        {
          text: '常见问题',
          items: [
            {
              text: '前言',
              link: '/guide/fqa',
            },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            {
              text: '前言',
              link: '/components/introduction',
            },
          ],
        },
        {
          text: '全局组件',
          items: [
            {
              text: 'Icon 图标组件',
              link: '/components/icon',
            },
            {
              text: 'Permission 权限组件',
              link: '/components/permission',
            },
            {
              text: 'BaseButton 按钮组件',
              link: '/components/button',
            },
          ],
        },
        {
          text: '功能组件',
          items: [
            {
              text: 'Form 表单组件',
              link: '/components/form',
            },
            {
              text: 'Table 表格组件',
              link: '/components/table',
            },
            {
              text: 'Editor 富文本组件',
              link: '/components/editor',
            },
            {
              text: 'Search 查询组件',
              link: '/components/search',
            },
            {
              text: 'Descriptions 描述组件',
              link: '/components/descriptions',
            },
            {
              text: 'Dialog 弹窗组件',
              link: '/components/dialog',
            },
            {
              text: 'Echart 图表组件',
              link: '/components/echart',
            },
            {
              text: 'CountTo 数字动画组件',
              link: '/components/count-to',
            },
            {
              text: 'Qrcode 二维码组件',
              link: '/components/qrcode',
            },
            {
              text: 'Highlight 高亮组件',
              link: '/components/highlight',
            },
            {
              text: 'Infotip 信息提示组件',
              link: '/components/infotip',
            },
            {
              text: 'Error 缺省组件',
              link: '/components/error',
            },
            {
              text: 'ContentDetailWrap 详情包裹组件',
              link: '/components/content-detail-wrap',
            },
            {
              text: 'InputPassword 密码输入框组件',
              link: '/components/input-password',
            },
            {
              text: 'Footer 页脚组件',
              link: '/components/footer',
            },
            {
              text: 'JsonEditor JSON编辑器组件',
              link: '/components/json-editor',
            },
            {
              text: '图标选择器组件',
              link: '/components/icon-picker',
            },
            {
              text: '瀑布流组件',
              link: '/components/waterfall',
            },
            {
              text: '视频播放器组件',
              link: '/components/video-player',
            },
            {
              text: '头像列表组件',
              link: '/components/avatars',
            },
            {
              text: '我同意组件',
              link: '/components/i-agree',
            },
          ],
        },
        {
          text: '函数式组件',
          items: [
            {
              text: 'ImageViewer 图片预览组件',
              link: '/components/image-viewer',
            },
            {
              text: 'VideoViewer  图片预览组件',
              link: '/components/video-viewer',
            },
          ],
        },
      ],
      '/hooks/': [
        {
          text: 'useWatermark',
          link: '/hooks/useWatermark',
        },
        {
          text: 'useCrudSchemas',
          link: '/hooks/useCrudSchemas',
        },
        {
          text: 'useTagsView',
          link: '/hooks/useTagsView',
        },
        {
          text: 'useStorage',
          link: '/hooks/useStorage',
        },
        {
          text: 'useClipboard',
          link: '/hooks/useClipboard',
        },
        {
          text: 'useNetwork',
          link: '/hooks/useNetwork',
        },
      ],
      '/group/': [
        {
          text: '技术交流群',
          link: '/group/group',
        },
      ],
      '/donate/': [
        {
          text: '捐赠',
          link: '/donate/donate',
        },
      ],
    },

    outline: {
      level: 'deep',
      label: '本页目录',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/syh-micro-build/mb-admin' }
    ],

    footer: {
      copyright: 'MIT Licensed | Copyright (c) 2024 syh-micro-build'
    },

    editLink: {
      pattern: 'https://github.com/syh-micro-build/mb-admin-doc/blob/main/:path',
      text: '在 GitHub 上编辑此页面'
    }
  }
})

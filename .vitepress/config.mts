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
      { text: 'Examples', link: '/markdown-examples' }
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
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/syh-micro-build/mb-admin' }
    ],

    footer: {
      copyright: 'MIT Licensed | Copyright (c) 2024 syh-micro-build'
    }
  }
})

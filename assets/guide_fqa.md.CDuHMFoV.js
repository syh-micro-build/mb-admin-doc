import{_ as e,c as a,o,a4 as i}from"./chunks/framework.B5RDkS33.js";const b=JSON.parse('{"title":"前言","description":"","frontmatter":{},"headers":[],"relativePath":"guide/fqa.md","filePath":"guide/fqa.md","lastUpdated":1713941649000}'),t={name:"guide/fqa.md"},l=i('<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p>列举了一些常见的问题。有问题可以先来这里寻找，看是否有相关解答，没有的话可以上 <a href="https://github.com/syh-micro-build/mb-admin/issues" target="_blank" rel="noreferrer">issue</a> 中提问或者搜索</p></div><ul><li>在进行开发时，先着重看下<a href="/guide/introduction.html">项目指南</a>，把大体文档都过一遍，虽然文档写的可能不能满足所有人的需要，但好歹是有，毕竟项目框架上手有难度。</li><li>一些非框架内的问题，可以上百度或者谷歌上搜索。</li><li>实在无法解决的，可以上交流群里面提问，相互讨论，毕竟群里面的大佬还是挺多的。</li><li>如果文档有落后或者不明确的，可以提 issue ，慢慢完善，毕竟文档的积累完善并不是靠一个人能完成的。</li></ul><h2 id="关于修改了-store-的默认值-无法应用问题" tabindex="-1">关于修改了 store 的默认值，无法应用问题 <a class="header-anchor" href="#关于修改了-store-的默认值-无法应用问题" aria-label="Permalink to &quot;关于修改了 store 的默认值，无法应用问题&quot;">​</a></h2><p>因为项目中有的 Store 默认开始了持久化，所以不管你修没修改默认值，都会优先默认取缓存中的值，所以如果修改完默认值之后，还请手动清除下浏览器的 <code>localStorage</code> ，默认值就会生效了。</p><h2 id="控制台路由警告问题" tabindex="-1">控制台路由警告问题 <a class="header-anchor" href="#控制台路由警告问题" aria-label="Permalink to &quot;控制台路由警告问题&quot;">​</a></h2><p>本地运行之后，会出现路由警告</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Vue Router warn]: No match found for location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/authorization/menu&quot;</span></span></code></pre></div><p>这个无需关心，是vue-router的问题，项目打包上线后是不会有次警告，所以该问题可以忽略。</p><h2 id="本地启动首次加载慢" tabindex="-1">本地启动首次加载慢 <a class="header-anchor" href="#本地启动首次加载慢" aria-label="Permalink to &quot;本地启动首次加载慢&quot;">​</a></h2><p>请自行去百度下 vite 快是怎么个快法，本地运行启动，都是按需加载，一次性加载了几十个资源，当然会比较慢，有了缓存之后非首次就会实现秒开了。</p><p>目前项目中已经对于启动时间进行了优化，本地默认加载了全部的 <code>element-plus</code> 的样式文件，会多多少少减少请求资源数量。</p><p>启动快慢还是得根据当前文件引用的资源数量来决定。</p><h2 id="路由切换页面刷新的问题" tabindex="-1">路由切换页面刷新的问题 <a class="header-anchor" href="#路由切换页面刷新的问题" aria-label="Permalink to &quot;路由切换页面刷新的问题&quot;">​</a></h2><p>这是因为你在该路由中使用了第三方模块，这个模块是没有预加载的，所以需要重新去加载这个模块，然后就会出现 <code>page reload</code>，极大的影响了开发体验，所以可以在 <code>vite.config.ts</code> 中去配置预加载列表：<code>optimizeDeps.include</code>，这样在服务启动的使用，会先把这些模块给预先加载打包。</p><h2 id="依赖安装问题" tabindex="-1">依赖安装问题 <a class="header-anchor" href="#依赖安装问题" aria-label="Permalink to &quot;依赖安装问题&quot;">​</a></h2><ul><li>如果依赖安装不了或者启动报错可以先尝试 删除 <code>package-lock.json</code> 和 <code>node_modules</code>，然后重新运行 <code>npm i</code></li><li>可以尝试配置国内镜像安装</li><li>请确保项目路径没有特殊字符如：中文、韩文、日文以及空格</li><li>请确保 node.js 版本大于等于 18</li><li>请确保包管理器使用的是 npm</li></ul><h2 id="打包文件过大" tabindex="-1">打包文件过大 <a class="header-anchor" href="#打包文件过大" aria-label="Permalink to &quot;打包文件过大&quot;">​</a></h2><p>由于完整版引入了许多第三方模块，所以打包体积会比较大，可以自行删除不需要的第三方模块来进行开发。</p><p>合理的进行拆包，目前项目中对一些比较大的第三方模块进行了拆包处理。</p><h2 id="部署上线运行启动慢" tabindex="-1">部署上线运行启动慢 <a class="header-anchor" href="#部署上线运行启动慢" aria-label="Permalink to &quot;部署上线运行启动慢&quot;">​</a></h2><ul><li>请检查打包体积是否合理</li><li>请确保网络正常</li><li>可以开启cdn缓存</li><li>可以开启http2</li><li>开启gzip</li></ul><h2 id="菜单定制化" tabindex="-1">菜单定制化 <a class="header-anchor" href="#菜单定制化" aria-label="Permalink to &quot;菜单定制化&quot;">​</a></h2><p>菜单是根据路由配置来生成，请先看下已有的路由配置是否可以满足你的需要，如果不满足，可以自行去定制化。可以查看<a href="/guide/router.html">路由相关文档</a></p><h2 id="组件使用问题" tabindex="-1">组件使用问题 <a class="header-anchor" href="#组件使用问题" aria-label="Permalink to &quot;组件使用问题&quot;">​</a></h2><p>在使用组件的时候，遇到问题，可以先看下对应的在线例子，看是否有对应的代码，基本上覆盖了<code>95%</code>的使用方式，或者查看对应的组件文档。</p><h2 id="编辑器代码报错" tabindex="-1">编辑器代码报错 <a class="header-anchor" href="#编辑器代码报错" aria-label="Permalink to &quot;编辑器代码报错&quot;">​</a></h2><p>项目中大部分使用了 <code>tsx</code> ，所以原先 <code>template</code> 的一些代码规范就不适用了，如 <code>v-if</code> 得使用 <code>{判断条件 ? 成立 : 不成立}</code> 来进行显示隐藏，可以查阅下相关文档。</p><p>并且请确保如果要使用 <code>tsx</code> 语法， <code>script</code> 是否声明了 <code>lang=&quot;tsx&quot;</code></p><h2 id="添加路由之后-页面无法展示" tabindex="-1">添加路由之后，页面无法展示 <a class="header-anchor" href="#添加路由之后-页面无法展示" aria-label="Permalink to &quot;添加路由之后，页面无法展示&quot;">​</a></h2><p>如果是在项目中直接添加静态路由，需要确保 appStore 中的 <code>dynamicRouter</code> 和 <code>serverDynamicRouter</code> 为 <code>false</code>，并且手动清除下浏览器的 <code>localStorage</code></p><h2 id="添加新的-vue-文件后-编辑器类型报错" tabindex="-1">添加新的 vue 文件后，编辑器类型报错 <a class="header-anchor" href="#添加新的-vue-文件后-编辑器类型报错" aria-label="Permalink to &quot;添加新的 vue 文件后，编辑器类型报错&quot;">​</a></h2><p>这是 <code>Volar</code> 插件的问题，一般重启下编辑器即可生效。</p><h2 id="如何启用非在线图标" tabindex="-1">如何启用非在线图标 <a class="header-anchor" href="#如何启用非在线图标" aria-label="Permalink to &quot;如何启用非在线图标&quot;">​</a></h2><p>设置 VITE_USE_ONLINE_ICON=false ，可能在有的版本设置之后会无效，是因为有BUG，可以复制最新版本的 <code>uno.config.ts</code> 和 <code>Icon.vue</code> 的最新代码。</p>',35),d=[l];function r(c,s,h,n,p,u){return o(),a("div",null,d)}const f=e(t,[["render",r]]);export{b as __pageData,f as default};

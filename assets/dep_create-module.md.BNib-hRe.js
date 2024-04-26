import{_ as e,c as a,o,a4 as s}from"./chunks/framework.C7aiOAIf.js";const m=JSON.parse('{"title":"模版生成","description":"","frontmatter":{},"headers":[],"relativePath":"dep/create-module.md","filePath":"dep/create-module.md","lastUpdated":1714113174000}'),t={name:"dep/create-module.md"},i=s('<h1 id="模版生成" tabindex="-1">模版生成 <a class="header-anchor" href="#模版生成" aria-label="Permalink to &quot;模版生成&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>为了方便开发者快速生成 <code>组件</code> 和 <code>视图</code> 文件，本项目提供了 <code>plop</code> 为开发者生成统一的文件模版。</p><h2 id="生成组件" tabindex="-1">生成组件 <a class="header-anchor" href="#生成组件" aria-label="Permalink to &quot;生成组件&quot;">​</a></h2><p>运行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plop</span></span></code></pre></div><p>选择 <code>component</code> 之后，输入组件名，如 <code>newComponent</code>，既可在 <code>src/components</code> 目录下创建对应的组件。</p><p>组件名会自动转换为大驼峰命名，类名会自动转换为连字符命名。</p><h2 id="生成视图" tabindex="-1">生成视图 <a class="header-anchor" href="#生成视图" aria-label="Permalink to &quot;生成视图&quot;">​</a></h2><p>运行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> plop</span></span></code></pre></div><p>选择 <code>view</code> 之后，输入路径，默认为 <code>views/NewView</code>，接着输入模块名，如 <code>newPage</code>，既可在 <code>src/views/NewView</code> 目录下创建对应的视图文件<code>NewPage.vue</code>。</p><p>视图名会自动转换为大驼峰命名，类名会自动转换为连字符命名。</p><h2 id="如何扩展" tabindex="-1">如何扩展 <a class="header-anchor" href="#如何扩展" aria-label="Permalink to &quot;如何扩展&quot;">​</a></h2><p>如果需要扩展额外的视图模版，可以在根目录 <code>plopfile.js</code> 文件中，添加初始模版，然后到根目录 <code>plop</code> 文件夹中，添加对应的模块代码。具体可以参考 <code>component</code> 下的代码。</p><p>更多的 <code>plop</code> 配置，则可以查阅 <a href="https://plopjs.com/documentation/" target="_blank" rel="noreferrer">文档</a></p>',16),d=[i];function c(p,l,n,r,h,u){return o(),a("div",null,d)}const _=e(t,[["render",c]]);export{m as __pageData,_ as default};
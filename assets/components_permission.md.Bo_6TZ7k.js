import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.C7aiOAIf.js";const c=JSON.parse('{"title":"Permission 权限组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/permission.md","filePath":"components/permission.md","lastUpdated":1712471168000}'),e={name:"components/permission.md"},h=t(`<h1 id="permission-权限组件" tabindex="-1">Permission 权限组件 <a class="header-anchor" href="#permission-权限组件" aria-label="Permalink to &quot;Permission 权限组件&quot;">​</a></h1><p>用于颗粒级别的按钮权限组件</p><p>Permission 组件位于 <a href="https://github.com/syh-micro-build/mb-admin/tree/main/src/components/Permission" target="_blank" rel="noreferrer">src/components/Permission</a> 内</p><h2 id="在线例子" tabindex="-1">在线例子 <a class="header-anchor" href="#在线例子" aria-label="Permalink to &quot;在线例子&quot;">​</a></h2><p><a href="https://syh-micro-build.github.io/mb-admin/authorization/test" target="_blank" rel="noreferrer">在线例子</a></p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><p>由于项目中的颗粒级别的权限，是放在路由表中，所以会判断在当前路由 <code>meta.permission</code> 是否包含传入的权限值，有的话则展示。</p><p>如果权限实现不一致的话，可以自行改造下。</p><h3 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Permission</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;add&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ElButton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; Add &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ElButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="指令形式" tabindex="-1">指令形式 <a class="header-anchor" href="#指令形式" aria-label="Permalink to &quot;指令形式&quot;">​</a></h3><p>权限控制目前还提供了指令的使用方式，并且已经全局注册，所以可以在任意组件中使用 <code>v-hasPermi</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ElButton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-hasPermi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&#39;add&#39;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; Add &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ElButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="函数形式" tabindex="-1">函数形式 <a class="header-anchor" href="#函数形式" aria-label="Permalink to &quot;函数形式&quot;">​</a></h3><p>除了以上两种，还可以使用函数的形式进行控制</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { hasPermi } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components/Permission&#39;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ElButton</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> v-if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hasPermi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;add&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; Add &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ElButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="permission-属性" tabindex="-1">Permission 属性<span id="Permission"></span> <a class="header-anchor" href="#permission-属性" aria-label="Permalink to &quot;Permission 属性&lt;span id=&quot;Permission&quot;&gt;&lt;/span&gt;&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>permission</td><td>权限值</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table>`,19),n=[h];function l(p,k,r,d,o,E){return a(),i("div",null,n)}const m=s(e,[["render",l]]);export{c as __pageData,m as default};
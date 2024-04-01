import{_ as t,c as s,o as d,a2 as a}from"./chunks/framework.CWo5xHl-.js";const g=JSON.parse('{"title":"Qrcode 二维码组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/qrcode.md","filePath":"components/qrcode.md"}'),i={name:"components/qrcode.md"},e=a(`<h1 id="qrcode-二维码组件" tabindex="-1">Qrcode 二维码组件 <a class="header-anchor" href="#qrcode-二维码组件" aria-label="Permalink to &quot;Qrcode 二维码组件&quot;">​</a></h1><p>基于 <code>qrcode</code> 封装。</p><p>Qrcode 组件位于 <a href="https://github.com/syh-micro-build/mb-admin/tree/main/src/components/Qrcode" target="_blank" rel="noreferrer">src/components/Qrcode</a> 内</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><p>更复杂点的例子，请<a href="https://syh-micro-build.github.io/mb-admin/components/qrcode" target="_blank" rel="noreferrer">在线预览</a></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Qrcode } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components/Qrcode&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Qrcode</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mb-admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="qrcode-属性" tabindex="-1">Qrcode 属性 <a class="header-anchor" href="#qrcode-属性" aria-label="Permalink to &quot;Qrcode 属性&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>tag</td><td>以什么标签生成二维码</td><td><code>string</code></td><td>canvas/img</td><td>canvas</td></tr><tr><td>text</td><td>二维码内容</td><td><code>string</code>/<code>Array</code></td><td>-</td><td>-</td></tr><tr><td>options</td><td>qrcode.js 配置项</td><td><code>QRCodeRenderersOptions</code></td><td>-</td><td>{}</td></tr><tr><td>width</td><td>二维码宽度</td><td><code>number</code></td><td>-</td><td>200</td></tr><tr><td>logo</td><td>二维码 logo</td><td><code>QrcodeLogo</code>/<code>string</code></td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>二维码是否过期</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>disabledText</td><td>二维码过期提示内容</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="qrcode-事件" tabindex="-1">Qrcode 事件 <a class="header-anchor" href="#qrcode-事件" aria-label="Permalink to &quot;Qrcode 事件&quot;">​</a></h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>done</td><td>生成二维码后的回调</td><td>-</td></tr><tr><td>click</td><td>二维码点击事件</td><td>-</td></tr><tr><td>disabled-click</td><td>二维码过期后点击事件</td><td>-</td></tr></tbody></table>`,10),r=[e];function n(h,o,l,c,p,k){return d(),s("div",null,r)}const m=t(i,[["render",n]]);export{g as __pageData,m as default};

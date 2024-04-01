import{_ as s,c as i,o as t,a2 as a}from"./chunks/framework.CWo5xHl-.js";const g=JSON.parse('{"title":"Form 表单组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/form.md","filePath":"components/form.md"}'),n={name:"components/form.md"},e=a(`<h1 id="form-表单组件" tabindex="-1">Form 表单组件 <a class="header-anchor" href="#form-表单组件" aria-label="Permalink to &quot;Form 表单组件&quot;">​</a></h1><p>对 <code>element-plus</code> 的 <code>Form</code> 组件进行封装，支持 <code>element-plus</code> 的所有表单组件，并额外扩展了一些功能。</p><p>Form 组件位于 <a href="https://github.com/syh-micro-build/mb-admin/tree/main/src/components/Form" target="_blank" rel="noreferrer">src/components/Form</a> 内</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>推荐使用 tsx 来使用 <code>Form</code> 组件。</p></div><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><p>目前支持的表单组件，你可以在 <a href="https://syh-micro-build.github.io/mb-admin/components/form/default-form" target="_blank" rel="noreferrer">在线预览</a> 中看到。</p><h3 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Form, FormSchema } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components/Form&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { reactive } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FormSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;field1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;input&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    component: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Input&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="useform" tabindex="-1">useForm <a class="header-anchor" href="#useform" aria-label="Permalink to &quot;useForm&quot;">​</a></h3><p>对于复杂的场景，可以配合 <code>useForm</code> 来使用。</p><p>如果想看更复杂点的例子，请<a href="https://syh-micro-build.github.io/mb-admin/components/form/use-form" target="_blank" rel="noreferrer">在线预览</a></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Form, FormSchema } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/components/Form&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { reactive } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useForm } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/hooks/web/useForm&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FormSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;field1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;input&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    component: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Input&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">formRegister</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useForm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">formRegister</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="参数介绍" tabindex="-1">参数介绍 <a class="header-anchor" href="#参数介绍" aria-label="Permalink to &quot;参数介绍&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">formRegister</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">formMethods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useForm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p><strong>register</strong></p><p><code>formRegister</code> 用于注册 <code>useForm</code>，如果需要使用 <code>useForm</code> 提供的 <code>api</code>，必须将 <code>formRegister</code> 传入组件的 <code>onRegister</code></p><p><strong>formMethods</strong></p><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setValues</td><td>用于设置表单值</td><td>(data: Recordable) =&gt; void</td></tr><tr><td>setProps</td><td>用于设置表单属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>delSchema</td><td>用于删除表单结构</td><td>(field: string) =&gt; void</td></tr><tr><td>addSchema</td><td>用于新增表单结构</td><td>(formSchema: FormSchema, index?: number) =&gt; void</td></tr><tr><td>setSchema</td><td>用于编辑表单结构</td><td>(schemaProps: FormSetPropsType[]) =&gt; void</td></tr><tr><td>getFormData</td><td>用于获取表单数据</td><td><code>&lt;T = Recordable&gt;() =&gt; Promise&lt;T&gt;</code></td></tr><tr><td>getComponentExpose</td><td>用于获取表单组件实例，如 ElInput 实例</td><td>(field: string) =&gt; any</td></tr><tr><td>getFormItemExpose</td><td>用于获取 formItem 组件实例</td><td><code>(field: string) =&gt; Promise&lt;ComponentRef&lt;typeof ElFormItem&gt;&gt;</code></td></tr><tr><td>getElFormExpose</td><td>用于获取 elForm 组件实例</td><td><code>(field: string) =&gt; Promise&lt;ComponentRef&lt;typeof ElForm&gt;&gt;</code></td></tr><tr><td>getFormExpose</td><td>用于获取二次封装的 Form 组件实例</td><td><code>() =&gt; Promise&lt;ComponentRef&lt;typeof Form&gt;&gt;</code></td></tr></tbody></table><h2 id="form-属性" tabindex="-1">Form 属性<span id="Form"></span> <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;Form 属性&lt;span id=&quot;Form&quot;&gt;&lt;/span&gt;&quot;">​</a></h2><p>除以下参数外，还支持 <code>element-plus</code> 的 <code>Form</code> 所有属性，<a href="https://element-plus.org/zh-CN/component/form.html#form-%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">详见</a></p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>schema</td><td>生成 Form 的布局结构数组，<a href="#Schema">详见</a></td><td><code>FormSchema</code></td><td>-</td><td>[]</td></tr><tr><td>isCol</td><td>是否需要栅格布局</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>model</td><td>表单数据对象</td><td><code>Recordable</code></td><td>-</td><td>{}</td></tr><tr><td>autoSetPlaceholder</td><td>是否自动设置 placeholder</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>isCustom</td><td>是否自定义内容</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>labelWidth</td><td>表单 label 宽度</td><td><code>string</code>/<code>number</code></td><td>-</td><td>auto</td></tr></tbody></table><h3 id="schema" tabindex="-1">Schema<span id="Schema"></span> <a class="header-anchor" href="#schema" aria-label="Permalink to &quot;Schema&lt;span id=&quot;Schema&quot;&gt;&lt;/span&gt;&quot;">​</a></h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>field</td><td>唯一值，必填项</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>label</td><td>标题</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>colProps</td><td>element-plus 的 col 组件属性</td><td><code>ColProps</code></td><td>-</td><td>-</td></tr><tr><td>componentProps</td><td>表单组件子属性，<a href="#ComponentProps">详见</a></td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td>formItemProps</td><td>element-plus 的 form-item 组件属性，<a href="#FormItemProps">详见</a></td><td><code>FormItemProps</code></td><td>-</td><td>-</td></tr><tr><td>component</td><td>需要渲染的表单子组件</td><td><code>ComponentName</code></td><td>-</td><td>-</td></tr><tr><td>value</td><td>表单子组件初始值</td><td><code>any</code></td><td>-</td><td>-</td></tr><tr><td>hidden</td><td>表单子组件是否隐藏</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>remove</td><td>表单子组件是否隐藏，如果为true，会连同值一同删除，类似v-if</td><td><code>boolean</code></td><td>-</td><td>-</td></tr><tr><td>optionApi</td><td>加载 options 方法</td><td><code>() =&gt; Promise&lt;any&gt;</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="componentprops" tabindex="-1">ComponentProps<span id="ComponentProps"></span> <a class="header-anchor" href="#componentprops" aria-label="Permalink to &quot;ComponentProps&lt;span id=&quot;ComponentProps&quot;&gt;&lt;/span&gt;&quot;">​</a></h3><p>componentProps的类型有： <code>InputComponentProps</code> <code>AutocompleteComponentProps</code> <code>InputNumberComponentProps</code> <code>SelectComponentProps</code> <code>SelectV2ComponentProps</code> <code>CascaderComponentProps</code> <code>SwitchComponentProps</code> <code>RateComponentProps</code> <code>ColorPickerComponentProps</code> <code>TransferComponentProps</code> <code>RadioGroupComponentProps</code> <code>RadioButtonComponentProps</code> <code>DividerComponentProps</code> <code>DatePickerComponentProps</code> <code>DateTimePickerComponentProps</code> <code>TimePickerComponentProps</code> <code>InputPasswordComponentProps</code> <code>TreeSelectComponentProps</code> <code>UploadComponentProps</code> <code>any</code></p><p>基本上每个表单组件都有 <code>slots</code> 的插槽对象，用于自定义插槽，如 InputComponentProps ：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">slots</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prefix?: (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.Element </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  suffix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.Element </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prepend</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.Element </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  append</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> JSX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.Element </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果需要监听组件事件，如 change 事件，每个 <code>ComponentProps</code> 基本上都有 <code>on</code> 对象用来接收事件，如 InputComponentProps ：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">on</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  blur?: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FocusEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  focus</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FocusEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  change</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  clear</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  input</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="formitemprops" tabindex="-1">FormItemProps<span id="FormItemProps"></span> <a class="header-anchor" href="#formitemprops" aria-label="Permalink to &quot;FormItemProps&lt;span id=&quot;FormItemProps&quot;&gt;&lt;/span&gt;&quot;">​</a></h3><p>除了以下属性，还支持 <code>element-plus</code> 中的 <code>FormItem</code> 的所有属性</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>slots</td><td>FormItem的插槽</td><td><code>Object</code></td><td>-</td><td>-</td></tr><tr><td>style</td><td>子表单项的样式</td><td><code>CSSProperties</code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="form-方法" tabindex="-1">Form 方法 <a class="header-anchor" href="#form-方法" aria-label="Permalink to &quot;Form 方法&quot;">​</a></h2><table><thead><tr><th>方法名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>setValues</td><td>用于设置表单值</td><td>(data: Recordable) =&gt; void</td></tr><tr><td>setProps</td><td>用于设置表单属性</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>delSchema</td><td>用于删除表单结构</td><td>(field: string) =&gt; void</td></tr><tr><td>addSchema</td><td>用于新增表单结构</td><td>(formSchema: FormSchema, index?: number) =&gt; void</td></tr><tr><td>setSchema</td><td>用于编辑表单结构</td><td>(schemaProps: FormSetPropsType[]) =&gt; void</td></tr><tr><td>getComponentExpose</td><td>用于获取表单子组件的实例，如 ElInput 实例</td><td>(field: string) =&gt; any</td></tr><tr><td>getFormItemExpose</td><td>用于获取 FormItem 组件的实例</td><td><code>() =&gt; Promise&lt;typeof FormItem&gt;</code></td></tr></tbody></table><h2 id="如何新增表单子组件" tabindex="-1">如何新增表单子组件 <a class="header-anchor" href="#如何新增表单子组件" aria-label="Permalink to &quot;如何新增表单子组件&quot;">​</a></h2><p>当项目中内置的表单组件不满足需求时，可以自行添加组件进去。</p><ol><li>在 <a href="https://github.com/syh-micro-build/mb-admin/tree/main/src/components/Form/src/types/index.ts" target="_blank" rel="noreferrer">src/components/Form/src/types/index.ts</a> 的 <code>ComponentName</code> 添加你组件名称。</li><li>在 <a href="https://github.com/syh-micro-build/mb-admin/blob/main/src/components/Form/src/helper/componentMap.ts" target="_blank" rel="noreferrer">src/components/Form/src/helper/componentMap.ts</a> 引入你自己的组件，并在 <code>componentMap</code> 对象中添加键值对即可。</li><li>如果想要更好的类型提示，可以把自定义组件的类型也添加到 <code>componentProps</code></li></ol>`,37),h=[e];function p(l,d,k,r,o,E){return t(),i("div",null,h)}const m=s(n,[["render",p]]);export{g as __pageData,m as default};

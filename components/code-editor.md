# CodeEditor 代码编辑器组件

基于 [monaco-editor](https://microsoft.github.io/monaco-editor/) 封装。

可自行阅读 [monaco-editor文档](https://microsoft.github.io/monaco-editor/docs.html)

CodeEditor 组件位于 [src/components/CodeEditor](https://github.com/syh-micro-build/mb-admin/tree/main/src/components/CodeEditor) 内

## 用法

目前支持的代码编辑器组件，你可以在 [在线预览](https://admin.mbuild.top/#/components/editor-demo/code-editor) 中看到。

```vue
<script setup lang="tsx">
import { CodeEditor } from '@/components/CodeEditor'
import { ContentWrap } from '@/components/ContentWrap'
import { ref } from 'vue'
import { BaseButton } from '@/components/Button'
import { ElDivider } from 'element-plus'
const content = ref(
  'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}'
)

const MonacoEditRef = ref<InstanceType<typeof CodeEditor>>()
</script>
<template>
  <ContentWrap title="CodeEditor" message="CodeEditorDes">
    <BaseButton @click="console.log(content)">控制台打印内容</BaseButton>
    <ElDivider />
    <div class="edit-container h-60vh">
      <CodeEditor ref="MonacoEditRef" v-model="content" language="java" />
    </div>
  </ContentWrap>
</template>
```

## CodeEditor 属性

可查看 [monaco-editor文档](https://microsoft.github.io/monaco-editor/docs.html)

## Editor 事件

可查看 [monaco-editor文档](https://microsoft.github.io/monaco-editor/docs.html)

# Echart 图表组件

对 `echarts` 进行封装，自适应窗口大小。

Echart 组件位于 [src/components/Echart](https://github.com/syh-micro-build/mb-admin/tree/main/src/components/Echart) 内

## 用法

只需传入对应的 `options` 和 `height` 即可展示图表。

```vue
<template>
  <Echart :options="pieOptions" :height="300" />
</template>
```

## Echart 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| options | echart 对应的配置项，[详见](https://echarts.apache.org/zh/option.html#title) | `EChartsOption` | - | [] |
| width | 图表宽度 | `string`/`number` | - | - |
| height | 图表高度 | `string`/`number` | - | 500 |

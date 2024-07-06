---
nav:
  title: component
  order: 1
group: 
  title: 反馈
  order: 6
toc: content
---
# Message
全局展示操作反馈信息。

## 代码演示

<code src="./demo/demo1.tsx"></code>
<code src="./demo/demo2.tsx"></code>
<code src="./demo/demo3.tsx"></code>
<code src="./demo/demo4.tsx"></code>


## API

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 自定义 CSS class | `string` | - |
| content | 提示内容 | `ReactNode` | - |
| duration | 自动关闭的延时，单位豪秒。| `number` | - |
| key | 当前提示的唯一标志 | `number` |-|
| style | 自定义内联样式 | `CSSProperties` |-|
| onClose | 关闭时触发的回调函数 | `function` |-|
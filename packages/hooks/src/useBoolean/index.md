---
nav:
  title: hooks
  order: 2
group: 
  title: State
  order: 4
toc: content
---

# useBoolean

优雅的管理boolean状态的 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx"></code>

## API

```typescript
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);
```

## params
|参数|说明|类型|默认值|
|---|---|---|---|
|defaultValue|可选项，传入默认的状态值|`boolean`|`false`|

## Result

|参数|说明|类型|
|---|---|---|
|state|状态值|`boolean`|
|action|操作合集|`Actions`|

## Actions
|参数|说明|类型|
|---|---|---|
|toggle|切换state|`() => void`|
|set|设置state|`(state: boolean) => void`|
|setTrue|修改为true|`() => void`|
|setFalse|修改为false|`() => void`|
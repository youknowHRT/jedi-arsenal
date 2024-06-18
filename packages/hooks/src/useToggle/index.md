---
nav:
  title: hooks
  order: 2
group: 
  title: State
  order: 4
toc: content
---

# useToggle

用于在两个状态值间切换的 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx"></code>
<code src="./demo/demo2.tsx"></code>

## API

```typescript
const [state, { toggle, set, setLeft, setRight }] = useToggle(defaultValue?: boolean);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T>(defaultValue: T);

const [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U)
```

## params
|参数|说明|类型|默认值|
|---|---|---|---|
|defaultValue|可选项，传入默认的状态值|`T`|`false`|
|reverseValue|可选项，传入默认的状态值|`U`|-|

## Result

|参数|说明|类型|
|---|---|---|
|state|状态值|-|
|action|操作合集|`Actions`|

## Actions
|参数|说明|类型|
|---|---|---|
|toggle|切换state|`() => void`|
|setState|设置state|`(state: T｜U) => void`|
|setLeft|修改为默认值|`() => void`|
|setRight|修改为reverseValue, 如果没有传参就设置为defaultValue的相反值|`() => void`|

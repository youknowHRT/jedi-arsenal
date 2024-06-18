---
title: API
---

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 展示日期 | [Dayjs](https://day.js.org/) | - |
| style | 样式 | {} | - |
| className | 类名 | string | - |
| dateRender | 自定义单元格的内容 | (currentDate: Dayjs) => ReactNode |-|
| dateInnerContent | 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。 | (currentDate: Dayjs) => ReactNode |-|
| locale | 国际化相关 | string | - |
| onChange | 日期变化回调	 | (value: Dayjs) => void | - |
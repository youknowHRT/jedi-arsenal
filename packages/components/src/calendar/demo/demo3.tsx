/**
 * title: 日期单元格渲染B
 * description: 使用`dateInnerContent`属性，返回内容会被追加到单元格
 */

import React from "react";
import { Calendar } from "@jedi-arsenal/components";
import dayjs,{Dayjs} from "dayjs";

const App = ()=>{
  const nodeRenderFn = (value: Dayjs)=>(
    <div>
      <p style={{ background: "skyblue", height: "300px" }}>
        {value.format("YYYY/MM/DD")}
      </p>
    </div>
  );
  return <Calendar
    value={dayjs("2024-5-21")}
    locale="en-US"
    dateInnerContent={nodeRenderFn}
  />;
}

export default App;
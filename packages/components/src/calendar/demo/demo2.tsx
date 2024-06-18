/**
 * title: 日期单元格渲染A
 * description: 使用`dateRender`属性，返回内容覆盖单元格
 */

import React from "react";
import { JaCalendar } from "@jedi-arsenal/components";
import dayjs,{Dayjs} from "dayjs";

const App = ()=>{
  const nodeRenderFn = (value: Dayjs)=>(
    <div>
      <p style={{ background: "yellowgreen", height: "300px" }}>
        {value.format("YYYY/MM/DD")}
      </p>
    </div>
  );
  return <JaCalendar
    value={dayjs("2024-5-21")}
    dateRender={nodeRenderFn}
  />;
}

export default App;
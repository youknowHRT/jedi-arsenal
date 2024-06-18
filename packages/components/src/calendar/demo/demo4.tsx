/**
 * title: 选择功能
 * description: 触发事件
 */

import React from "react";
import { JaCalendar } from "@jedi-arsenal/components";
import dayjs from "dayjs";

const App = ()=>{
  return <JaCalendar
    value={dayjs("2024-5-21")}
    locale="en-US"
    onChange={date => {
      alert(date.format("YYYY-MM-DD"));
    }}
  />;
}

export default App;
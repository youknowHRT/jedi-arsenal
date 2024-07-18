/**
 * title: 基本
 * description: 普通的日历面板
 */

import React from "react";
import { Calendar } from "@jedi-arsenal/components";
import dayjs from "dayjs";

const App: React.FC = () => {
  return <Calendar value={dayjs("2024-5-21")} locale="en-US" />;
};

export default App;

import { Dayjs } from "dayjs"
import { useContext } from "react";
import LocaleContext from "./local/LocaleContext";
import allLocales from "./local";

interface HeaderProps{
  curMonth: Dayjs;
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}
function Header(props: HeaderProps){
  const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props;

  const localContext = useContext(LocaleContext);
  const CalendarContext = allLocales[localContext.locale];
  return <div className="calendar-header">
    <div className="calendar-header-left">
      <div className="calendar-header-icon" onClick={prevMonthHandler}>&lt;</div>
      <div className="calendar-header-value">{curMonth.format(CalendarContext.formatMonth)}</div>
      <div className="calendar-header-icon" onClick={nextMonthHandler}>&gt;</div>
      <button className="calendar-header-btn" onClick={todayHandler}>{CalendarContext.today}</button>
    </div>
  </div>
}

export default Header
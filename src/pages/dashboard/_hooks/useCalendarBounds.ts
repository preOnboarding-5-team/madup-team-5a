import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { durationState } from '../_states/durationState';
import { getCalendarBoundsFromDate } from '../_components/DatePicker/utils';

export const useCalendarBounds = () => {
  const duration = useRecoilValue(durationState);
  // const [currentYear, setCurrentYear] = useState(dayjs().year());
  // const [currentYear, setCurrentYear] = useState(dayjs().year());
  const [firstDayOfCurrentMonth, setFirstDayOfCurrentMonth] = useState(dayjs(duration.start));
  const [firstDayInCalendar, setFirstDayInCalendar] = useState<Dayjs>(dayjs());
  const [daysInMonth, setDaysInMonth] = useState(30);
  const [firstDayOffset, setFirstDayOffset] = useState(0);

  // useEffect(() => {
  //   // setCurrentYear(dayjs(duration.start).year());
  //   // setCurrentMonth(dayjs(duration.start).month());
  //   setFirstDayOfCurrentMonth(dayjs(duration.start).set('date', 1));
  // }, [duration]);

  // useEffect(() => {
  //   const { firstDayInCalendar: fdc, daysInMonth: dm } = getCalendarBoundsFromDate(`${currentYear}-${currentMonth}-01`);
  //   setFirstDayInCalendar(fdc);
  //   setDaysInMonth(dm);
  // }, [currentYear, currentMonth]);

  useEffect(() => {
    const {
      firstDayInCalendar: firstDay,
      daysInMonth: days,
      firstDayOffset: offset,
    } = getCalendarBoundsFromDate(firstDayOfCurrentMonth);
    setFirstDayInCalendar(firstDay);
    setDaysInMonth(days);
    setFirstDayOffset(offset);
  }, [firstDayOfCurrentMonth]);

  return { firstDayInCalendar, daysInMonth, firstDayOfCurrentMonth, setFirstDayOfCurrentMonth, firstDayOffset };
};

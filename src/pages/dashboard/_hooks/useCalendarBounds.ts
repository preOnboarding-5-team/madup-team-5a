import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { datesAtom } from '../_states/dashboard';
import { getCalendarBoundsFromDate } from '../_components/DatePicker/utils';

export const useCalendarBounds = () => {
  const duration = useRecoilValue(datesAtom);
  const [firstDayOfCurrentMonth, setFirstDayOfCurrentMonth] = useState(dayjs(duration.start));
  const [firstDayInCalendar, setFirstDayInCalendar] = useState<Dayjs>(dayjs());
  const [daysInMonth, setDaysInMonth] = useState(30);
  const [firstDayOffset, setFirstDayOffset] = useState(0);

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

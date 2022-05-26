import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

export const getCalendarBoundsFromDate = (date?: string | Dayjs) => {
  const firstDayOfMonth = dayjs(date).set('date', 1);
  const dayOfFirstDate = firstDayOfMonth.day();
  const firstDayOffset = dayOfFirstDate;
  const firstDayInCalendar = firstDayOfMonth.subtract(firstDayOffset, 'day');

  const daysInMonth = dayjs(date).daysInMonth();
  const lastDayOfMonth = firstDayOfMonth.add(daysInMonth, 'day');
  const dayOfLastDate = lastDayOfMonth.day();
  const lastDayOffset = (12 - dayOfLastDate) % 7;
  const lastDayInCalendar = firstDayOfMonth.add(lastDayOffset);

  return {
    firstDayInCalendar,
    lastDayInCalendar,
    firstDayOfMonth,
    lastDayOfMonth,
    daysInMonth,
    firstDayOffset,
    lastDayOffset,
  };
};

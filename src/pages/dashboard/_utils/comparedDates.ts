import dayjs from 'dayjs';

export const comparedDates = (start: string, end: string) => {
  const startDay = dayjs(start);
  const endDay = dayjs(end);
  const diff = startDay.diff(endDay, 'day');
  const dates = [];

  for (let i = 0; i < -diff; i++) {
    dates.push(dayjs(startDay).add(i, 'd').format('YYYY-MM-DD'));
  }
  return dates;
};

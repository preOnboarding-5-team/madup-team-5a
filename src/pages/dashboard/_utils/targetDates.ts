import dayjs from 'dayjs';

export const targetDates = (start: string, end: string) => {
  const startDay = dayjs(start);
  const endDay = dayjs(end);
  const diff = endDay.diff(startDay, 'day');
  const dates = [];

  for (let i = 0; i < diff + 1; i += 1) {
    dates.push(dayjs(startDay).add(i, 'd').format('YYYY-MM-DD'));
  }
  return dates;
};

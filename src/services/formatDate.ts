import dayjs from 'dayjs';

export const formatKoreanDate = (s: string) => {
  if (!s || !dayjs(s).isValid()) throw Error('Not valid date to convert.');

  const separator = (() => {
    if (s.includes('/')) return '/';
    if (s.includes('.')) return '.';
    return '-';
  })();

  const [year, month, date] = s.split(separator);
  return `${year}년 ${month}월 ${date}일`;
};

export const toYearMonth = (s: string) => {
  return dayjs(s).format('YYYY-MM');
};

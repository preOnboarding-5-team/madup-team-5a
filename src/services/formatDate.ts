import dayjs from 'dayjs';

export const formatKoreanDate = (s: string) => {
  if (!s || !dayjs(s).isValid()) throw Error('Not valid date to convert.');

  const separator = 0;

  const [year, month, date] = s.split('-');
};

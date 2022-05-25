import dayjs from 'dayjs';

export const formatKoreanDate = (s: string) => {
  if (!s || !dayjs(s).isValid()) throw Error('Not valid date to convert.');

  const separator = 0;

  console.log(dayjs('2020/03/01').isValid());

  const [year, month, date] = s.split('-');
};

import dayjs from 'dayjs';

export const convertCardData = (data: Daily[], start: string, end: string): CardTable => {
  const aggTable: CardStatTable = {
    cost: 0,
    imp: 0,
    click: 0,
    convValue: 0,
    sale: 0,
  };

  data.forEach(({ roas: r, cost, imp, click, convValue, date }) => {
    if (dayjs(date).isBefore(dayjs(start)) || dayjs(date).isAfter(dayjs(end))) return;

    aggTable.cost += cost;
    aggTable.imp += imp;
    aggTable.click += click;
    aggTable.convValue += convValue;
    aggTable.sale += (r * click) / 100;
  });

  const roas = aggTable.click > 0 ? (aggTable.sale / aggTable.click) * 100 : 0;

  return { ...aggTable, roas };
};

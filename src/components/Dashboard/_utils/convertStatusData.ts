export const convertStatusData = (data: Daily[]): Table => {
  const table: Table = {
    roas: [],
    cost: [],
    imp: [],
    click: [],
    convValue: [],
    sales: [],
  };

  data.forEach(({ roas, cost, imp, click, convValue, date }) => {
    table.roas.push({
      x: date,
      y: roas,
      labelq: `${Math.floor(roas).toLocaleString('en')}%`,
      name: 'roas',
    });
    table.cost.push({
      x: date,
      y: cost,
      labelq: `${Math.floor(cost).toLocaleString('en')}원`,
      name: '매출',
    });
    table.imp.push({
      x: date,
      y: imp,
      labelq: `${Math.floor(imp).toLocaleString('en')}회`,
      name: '노출수',
    });
    table.click.push({
      x: date,
      y: click,
      labelq: `${Math.floor(click).toLocaleString('en')}회`,
      name: '클릭수',
    });
    table.convValue.push({
      x: date,
      y: convValue,
      labelq: `${Math.floor(convValue).toLocaleString('en')}회`,
      name: '전환수',
    });
    table.sales.push({
      x: date,
      y: roas * click,
      labelq: `${Math.floor(roas * click).toLocaleString('en')}원`,
      name: '매출',
    });
  });

  return table;
};

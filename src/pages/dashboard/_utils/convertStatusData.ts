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
      labelq: `${Math.floor(roas).toLocaleString('en')}회`,
    });
    table.cost.push({
      x: date,
      y: cost,
      labelq: `${Math.floor(roas).toLocaleString('en')}원`,
    });
    table.imp.push({
      x: date,
      y: imp,
      labelq: `${Math.floor(roas).toLocaleString('en')}회`,
    });
    table.click.push({
      x: date,
      y: click,
      labelq: `${Math.floor(roas).toLocaleString('en')}회`,
    });
    table.convValue.push({
      x: date,
      y: convValue,
      labelq: `${Math.floor(roas).toLocaleString('en')}회`,
    });
    table.sales.push({
      x: date,
      y: roas * click,
      labelq: `${Math.floor(roas * click).toLocaleString('en')}원`,
    });
  });

  return table;
};

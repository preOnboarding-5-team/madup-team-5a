import { Daily } from 'types/trend';

type Data = {
  x: string;
  y: number;
};

export type TableKey = 'click' | 'imp' | 'cost' | 'conv' | 'ctr';
export type Table = {
  [key in TableKey]: Data[];
};

export const convertData = (data: Daily[]) => {
  const table: Table = {
    click: [],
    imp: [],
    cost: [],
    conv: [],
    ctr: [],
  };

  data.forEach(({ click, imp, cost, conv, ctr, date }) => {
    table.click.push({
      x: date,
      y: click,
    });
    table.imp.push({
      x: date,
      y: imp,
    });
    table.cost.push({
      x: date,
      y: cost,
    });
    table.conv.push({
      x: date,
      y: conv,
    });
    table.ctr.push({
      x: date,
      y: ctr,
    });
  });

  return table;
};

interface RootObject {
  report: Report;
}

interface Report {
  daily: Daily[];
}

interface Daily {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}

type Data = {
  x: string;
  y: number;
  labelq?: string;
  name: string;
};

type TableKey = 'roas' | 'cost' | 'imp' | 'click' | 'convValue' | 'sales';

type Table = {
  [key in TableKey]: Data[];
};

type TableKeyUnitMap = {
  [key in TableKey]: string;
};

interface CardStatTable {
  cost: number;
  imp: number;
  click: number;
  convValue: number;
  sale: number;
}

interface CardTable extends CardStatTable {
  roas: number;
}

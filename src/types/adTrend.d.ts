export interface RootObject {
  report: Report;
}

export interface Report {
  daily: Daily[];
}

export interface Daily {
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

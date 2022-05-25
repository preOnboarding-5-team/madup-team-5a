export interface ReportType {
  report: DailyReportType[];
}

export interface DailyReportType {
  daily: {
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
  };
}

interface IAdList {
  count: number;
  ads: Ad[];
}

interface Ad {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startDate: string;
  endDate?: string;
  report: Report;
}

interface Report {
  cost: number;
  convValue: number;
  roas: number;
}

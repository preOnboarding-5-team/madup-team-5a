interface AdManageFormItemsType {
  adType: string;
  budget: number | string;
  endDate: string | null;
  id: number;
  report: AdManageReportItemType;
  startDate: string;
  status: string;
  title: string;
  selected?: boolean;
}

interface AdManageReportItemType {
  cost: number | string;
  convValue: number | string;
  roas: number | string;
}

interface AdManageDataListType {
  ads: AdManageFormItemsType[];
  count: number;
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

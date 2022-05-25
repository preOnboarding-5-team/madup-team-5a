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

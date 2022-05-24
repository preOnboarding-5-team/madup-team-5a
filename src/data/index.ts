import { AdManageFormItemsType } from 'types/adManage';
import AD_DATA from './wanted_FE_ad-list-data-set.json';

const { ads } = AD_DATA;

const UPDATED_DATA = ads.map<AdManageFormItemsType>((data) => ({
  ...data,
  status: data.status === 'active' ? '진행중' : '종료',
  adType: data.adType === 'web' ? `웹광고_${data.title}` : `앱광고_${data.title}`,
  budget: addComma(data.budget),
  endDate: data.endDate ? data.endDate.split('T')[0] : null,
  startDate: data.startDate.split('T')[0],
  report: {
    ...data.report,
    cost: addComma(data.report.cost),
    convValue: addComma(data.report.convValue),
    roas: `${addComma(data.report.roas)} %`,
  },
}));

function addComma(num: number | string) {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}
export default UPDATED_DATA;

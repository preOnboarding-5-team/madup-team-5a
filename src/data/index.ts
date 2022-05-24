import { AdManageFormItemsType } from 'types/adManage';
import AD_DATA from './wanted_FE_ad-list-data-set.json';

const { ads } = AD_DATA;

const UPDATED_DATA = ads.map<AdManageFormItemsType>((data) => ({
  ...data,
  status: data.status === 'active' ? '진행중' : '종료',
  adType: data.adType === 'web' ? `웹광고_${data.title}` : `앱광고_${data.title}`,
  budget: convertBudgetFormat(data.budget),
  endDate: data.endDate ? data.endDate.split('T')[0] : null,
  startDate: data.startDate.split('T')[0],
  report: {
    ...data.report,
    cost: addComma(data.report.cost),
    convValue: addComma(data.report.convValue),
    roas: `${addComma(data.report.roas)} %`,
  },
}));

function addComma(num: number) {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}

function convertBudgetFormat(budget: number) {
  const commaBudget = addComma(budget);

  const tempBudget = commaBudget.split(',');

  if (tempBudget.length < 2) return '원';

  tempBudget.pop();

  const budgetStr = tempBudget[tempBudget.length - 1];

  if (budgetStr.length > 1) {
    const budgetArr = budgetStr.split('');
    budgetArr.splice(-1, 0, '만');
    console.log(budgetArr);
    tempBudget[tempBudget.length - 1] = budgetArr.join('');
  }
  console.log(tempBudget);

  const resultStr = `${tempBudget.join(',')}천원`;
  return resultStr;
}

export default UPDATED_DATA;

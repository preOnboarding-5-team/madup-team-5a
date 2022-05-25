import { AdManageFormItemsType } from 'types/adManage';
import AD_DATA from './wanted_FE_ad-list-data-set.json';

const { ads } = AD_DATA;

const UPDATED_DATA = ads.map<AdManageFormItemsType>((data) => ({
  ...data,
  status: data.status === 'active' ? '진행중' : '종료',
  adType: data.adType === 'web' ? `웹광고_${data.title}` : `앱광고_${data.title}`,
  budget: convertFormat(data.budget),
  endDate: data.endDate ? data.endDate.split('T')[0] : null,
  startDate: data.startDate.split('T')[0],
  report: {
    ...data.report,
    cost: convertFormat(data.report.cost),
    convValue: convertFormat(data.report.convValue),
    roas: `${addComma(data.report.roas)} %`,
  },
}));

function addComma(num: number) {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
}

function convertFormat(num: number) {
  const commaNumber = addComma(num);
  if (commaNumber.length < 4) return `${num}원`;

  const splitNumber = commaNumber.split(',');

  splitNumber.pop();

  const standardNumber = splitNumber[splitNumber.length - 1];
  let hasZero = false;
  if (standardNumber.length === 3) {
    const standardNumberArr = standardNumber.split('');

    standardNumberArr.splice(-1, 0, '만');
    if (standardNumberArr[standardNumberArr.length - 1] === '0') hasZero = true;
    splitNumber[splitNumber.length - 1] = standardNumberArr.join('');
  }

  const resultStr = splitNumber.join(',');

  return hasZero ? resultStr.substring(0, resultStr.length - 1) + '원' : resultStr + '천원';
}

export default UPDATED_DATA;

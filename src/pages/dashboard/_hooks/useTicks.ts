import { useRecoilValue } from 'recoil';

import { getMax } from './../_utils/getMax';

import { categoryAtom } from 'pages/dashboard/_states/dashboard';
import { Data } from '../_utils/convertStatusData';

export const useTicks = (dataList: Data[]) => {
  const ts: number[] = [0.2, 0.4, 0.6, 0.8, 1];
  const category = useRecoilValue(categoryAtom);

  const categories: string = {
    roas: '%',
    cost: '원',
    imp: '회',
    click: '회',
    convValue: '회',
    sales: '원',
  }[category];

  const maxData = getMax(dataList);
  const maxDataString = maxData.toString();
  const digit = maxDataString.length;
  if (digit < 5) {
    console.log('gi');
    const ticks: string[] = [];
    ts.forEach((t) => ticks.push(`${(t * maxData).toLocaleString('en')}${categories}`));
    return ticks;
  }
  const ticks: string[] = [];
  ts.forEach((t) =>
    ticks.push(
      `${Math.floor(((t * maxData) / 10 ** (digit - 2)) * 10 ** (digit - 2)).toLocaleString('en')}${categories}`
    )
  );
  return ticks;
};

export default useTicks;

import { subIdxAtom, mainIdxAtom } from 'pages/dashboard/_states/category';
import { useRecoilValue } from 'recoil';

import { getMax } from './../_utils/getMax';
import { categoryUnits, categories } from '../_constants';

export const useTicks = (t: number, dataList: Data[], idx: number) => {
  const unit = categoryUnits[categories[idx]];
  const maxData = getMax(dataList);

  return maxData * t >= 100000
    ? `${Math.floor(t * maxData).toLocaleString('en')}${unit}`
    : `${Math.floor(((t * maxData) / 10 ** 4) * 10 ** 4).toLocaleString('en')}${unit}`;
};

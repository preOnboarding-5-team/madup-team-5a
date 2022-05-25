import { getMax } from './getMax';
import { categoryUnits, categories } from '../_constants';

export const getTick = (t: number, dataList: Data[], idx: number) => {
  const unit = categoryUnits[categories[idx]];
  const maxData = getMax(dataList);

  if (maxData * t < 10000) {
    return `${Math.floor(t * maxData).toLocaleString('en')}${unit}`;
  }
  if (maxData * t > 10000 && maxData * t < 100000) {
    return `${Math.floor((t * maxData) / 10 ** 4).toLocaleString('en')}${unit}`;
  }
  return `${(Math.floor((t * maxData) / 10 ** 5) * 10).toLocaleString('en')}${unit}`;
};

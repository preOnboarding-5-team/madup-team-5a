import { categories } from 'pages/dashboard/_constants';
import { subIdxAtom, mainIdxAtom } from 'pages/dashboard/_states/category';
import { useRecoilValue } from 'recoil';

const colors = {
  roas: '#4FADF7',
  cost: '#85DA47',
  imp: '#541690',
  click: '#A25B5B',
  convValue: '#FFCD38',
  sales: '#FFCD38',
};

export const mainColor = () => {
  const mainIdx = useRecoilValue(mainIdxAtom);
  return colors[categories[mainIdx]];
};

export const subColor = () => {
  const subIdx = useRecoilValue(subIdxAtom);
  return colors[categories[subIdx]];
};

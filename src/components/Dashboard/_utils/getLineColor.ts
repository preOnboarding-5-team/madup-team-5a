import { categories } from 'components/Dashboard/_constants';
import { subIdxAtom } from 'components/Dashboard/_states/subIdxAtom';
import { mainIdxAtom } from 'components/Dashboard/_states/mainIdxAtom';
import { useRecoilValue } from 'recoil';

const colors = {
  roas: '#4FADF7',
  cost: '#85DA47',
  imp: '#541690',
  click: '#A25B5B',
  convValue: '#FFCD38',
  sales: '#FFCD38',
};

export const useMainColor = () => {
  const mainIdx = useRecoilValue(mainIdxAtom);
  return colors[categories[mainIdx]];
};

export const useSubColor = () => {
  const subIdx = useRecoilValue(subIdxAtom);
  return colors[categories[subIdx]];
};

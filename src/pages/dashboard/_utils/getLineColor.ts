import { categoryAtom, subCategoryAtom } from 'pages/dashboard/_states/dashboard';
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
  const category = useRecoilValue(categoryAtom);
  return colors[category];
};

export const subColor = () => {
  const subCategory = useRecoilValue(subCategoryAtom);
  return colors[subCategory];
};

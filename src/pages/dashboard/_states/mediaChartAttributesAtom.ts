import { atom } from 'recoil';

const DEFAULT: MediaDataDisplayMap[] = [
  {
    key: 'cost',
    display: '광고비',
  },
  {
    key: 'sale',
    display: '매출',
  },
  {
    key: 'imp',
    display: '노출 수',
  },
  {
    key: 'click',
    display: '클릭 수',
  },
  {
    key: 'convValue',
    display: '전환 수',
  },
];

export const mediaChartAttributesAtom = atom<MediaDataDisplayMap[]>({
  key: '#mediaChartAttributesAtom',
  default: DEFAULT,
});

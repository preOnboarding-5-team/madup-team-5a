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
    key: 'roas',
    display: 'ROAS',
  },
  {
    key: 'imp',
    display: '노출수',
  },
  {
    key: 'click',
    display: '클릭 수',
  },
  {
    key: 'ctr',
    display: '클릭률 (CTR)',
  },
  {
    key: 'cpc',
    display: '클릭당비용 (CPC)',
  },
];

export const mediaGridAttributesStates = atom<MediaDataDisplayMap[]>({
  key: '#mediaGridAttributesState',
  default: DEFAULT,
});

import { atom } from 'recoil';

export const setCategoryIdx = atom<number>({
  key: 'setCategoryIdx',
  default: 0,
});

export const categories = atom<string[]>({
  key: 'categories',
  default: ['전체 광고', '진행중', '종료'],
});

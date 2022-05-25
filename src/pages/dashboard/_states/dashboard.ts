import { atom } from 'recoil';

export const categoryAtom = atom<TableKey>({
  key: 'categoryAtom',
  default: 'click',
});

export const subCategoryAtom = atom<TableKey>({
  key: 'subCategoryAtom',
  default: 'sales',
});

export const datesAtom = atom<Duration>({
  key: 'datesAtom',
  default: { start: '2022-02-01', end: '2022-02-10' },
});

export const weeklyAtom = atom<string[]>({
  key: 'weeklyAtom',
  default: [],
});

export const compareDatesAtom = atom<string[]>({
  key: 'compareDatesAtom',
  default: [],
});

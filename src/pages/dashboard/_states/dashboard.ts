import { atom } from 'recoil';
import { TableKey } from '../_utils/convertStatusData';

export const categoryAtom = atom<TableKey>({
  key: 'categoryAtom',
  default: 'imp',
});

export const subCategoryAtom = atom<TableKey>({
  key: 'subCategoryAtom',
  default: 'cost',
});

export const datesAtom = atom<string[]>({
  key: 'datesAtom',
  default: [],
});

export const weeklyAtom = atom<string[]>({
  key: 'weeklyAtom',
  default: [],
});

export const compareDatesAtom = atom<string[]>({
  key: 'compareDatesAtom',
  default: [],
});

import { atom } from 'recoil';

export const mainIdxAtom = atom({
  key: 'mainIdxAtom',
  default: 0,
});

export const subIdxAtom = atom({
  key: 'subIdxAtom',
  default: -1,
});

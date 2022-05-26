import { atom } from 'recoil';

export const weeklyAtom = atom<string[]>({
  key: 'weeklyAtom',
  default: [],
});

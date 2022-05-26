import { atom } from 'recoil';

export const compareDatesAtom = atom<string[]>({
  key: 'compareDatesAtom',
  default: [],
});

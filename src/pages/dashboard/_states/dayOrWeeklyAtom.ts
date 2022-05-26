import { atom } from 'recoil';

export const dayOrWeeklyAtom = atom<boolean>({
  key: 'dayOrWeekAtom',
  default: false,
});

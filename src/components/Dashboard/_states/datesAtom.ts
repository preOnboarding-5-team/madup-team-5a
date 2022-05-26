import { atom } from 'recoil';

export const datesAtom = atom<Duration>({
  key: 'datesAtom',
  default: { start: '2022-02-01', end: '2022-02-10' },
});

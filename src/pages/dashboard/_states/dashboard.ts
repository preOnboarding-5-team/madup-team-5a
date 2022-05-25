import { atom } from 'recoil';

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

export const dayOrWeeklyAtom = atom<boolean>({
  key: 'dayOrWeekAtom',
  default: true,
});

import { atom } from 'recoil';

const COLORS = ['#4fadf7', '#85da47', '#ac8af8', '#ffd43b'];

export const colorMapAtom = atom({
  key: 'colorMapAtom',
  default: COLORS,
});

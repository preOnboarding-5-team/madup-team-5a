import { atom } from 'recoil';

export const DEFAULT_SERVICE = {
  title: '๋งค๋์',
};

export const serviceListAtom = atom<DropItem[]>({
  key: 'serviceListAtom',
  default: [DEFAULT_SERVICE],
});

export const currentServiceIdxAtom = atom({
  key: 'currentServiceIdx',
  default: 0,
});

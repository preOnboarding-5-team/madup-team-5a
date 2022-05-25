import { atom } from 'recoil';

export const DEFAULT_SERVICE = {
  title: '매드업',
};

export const serviceListAtom = atom<DropItem[]>({
  key: 'serviceListAtom',
  default: [DEFAULT_SERVICE],
});

export const currentServiceIdxAtom = atom({
  key: 'currentServiceIdx',
  default: 0,
});

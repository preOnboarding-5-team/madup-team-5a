import { atom } from 'recoil';

const DEFAULT_SERVICE_LIST: DropItem[] = [
  {
    title: '매드업',
  },
];

export const serviceListState = atom({
  key: '#serviceListState',
  default: DEFAULT_SERVICE_LIST,
});

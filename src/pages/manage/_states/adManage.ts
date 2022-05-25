import { atom } from 'recoil';

import { AdManageFormItemsType } from 'types/adManage';

export const adListDataState = atom<AdManageFormItemsType[]>({
  key: 'adListDataState',
  default: [],
});

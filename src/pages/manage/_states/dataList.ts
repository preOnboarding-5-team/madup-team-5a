import { atom } from 'recoil';
import { UPDATED_DATA } from 'data/wanted_FE_ad-list-data-set';

export const dataListAtom = atom<AdManageFormItemsType[]>({
  key: 'dataListAtom',
  default: UPDATED_DATA,
});

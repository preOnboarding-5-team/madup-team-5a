import { atom } from 'recoil';
import { UPDATED_DATA } from 'pages/manage/_utils/data';

export const dataListAtom = atom<AdManageFormItemsType[]>({
  key: 'dataListAtom',
  default: UPDATED_DATA,
});

import { atom } from 'recoil';
import { UPDATED_DATA } from 'components/Manage/_utils/data';

export const dataListAtom = atom<AdManageFormItemsType[]>({
  key: 'dataListAtom',
  default: UPDATED_DATA,
});

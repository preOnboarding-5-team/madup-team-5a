import { getMax } from './getMax';

export const getUnit = (t: number, arr: []) => {
  return Math.floor(t * getMax(arr));
};

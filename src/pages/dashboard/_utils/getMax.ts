export const getMax = (arr: Data[]) => {
  if (!arr.length) return 0;
  return Math.max(...arr.map((d) => d.y));
};

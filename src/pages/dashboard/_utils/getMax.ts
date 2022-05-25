export const getMax = (arr: { x: string; y: number }[]) => {
  return Math.max(...arr.map((d) => d.y));
};

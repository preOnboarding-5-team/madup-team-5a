export const useUnit = (category: TableKey): string => {
  const units: string = {
    roas: '%',
    cost: '만원',
    imp: '만회',
    click: '만회',
    convValue: '만회',
    sales: '만원',
  }[category];
  return units;
};

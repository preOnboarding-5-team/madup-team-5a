export const addComma = (num: number | string) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ',');
};

export const formatNumber = (num: number | string, decimalLength: number = 2) => {
  const [integer, decimal] = num.toString().split('.');
  let formatted = addComma(integer);
  if (decimal && decimalLength > 0) formatted += `.${decimal.substring(0, decimalLength)}`;
  return formatted;
};

import React from 'react';
import { TableKey } from '../_utils/convertStatusData';

const useUnit = (category: TableKey) => {
  const categories: string = {
    roas: '%',
    cost: '만원',
    imp: '만회',
    click: '만회',
    convValue: '만회',
    sales: '만원',
  }[category];
  return categories;
};

export default useUnit;

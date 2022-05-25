import React, { useState, useRef, useEffect } from 'react';

import { DropdownArrowIcon } from '../../../../assets/svgs';
import styles from './style.module.scss';

const Term = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [term, setTerm] = useState('주간');
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOuterClick = (e: MouseEvent) => {
      if (!outerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOuterClick);
    return () => document.removeEventListener('click', handleOuterClick);
  }, []);

  const handleTermClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleWeekClick = () => {
    setTerm('주간');
  };

  const handleDayClick = () => {
    setTerm('일별');
  };

  const menu = (
    <div className={styles.menu}>
      <button type="button" onClick={handleWeekClick}>
        주간
      </button>
      <button type="button" onClick={handleDayClick}>
        일별
      </button>
    </div>
  );

  return (
    <div ref={outerRef} className={styles.termWrapper}>
      <button type="button" className={styles.termButton} onClick={handleTermClick}>
        <p className={styles.term}>{term}</p>
        <DropdownArrowIcon />
      </button>
      {isOpen && menu}
    </div>
  );
};

export default Term;

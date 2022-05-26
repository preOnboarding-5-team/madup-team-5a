import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { dayOrWeeklyAtom } from 'components/Dashboard/_states/dayOrWeeklyAtom';
import { useOpenDropdown } from 'hooks/useOpenDropdown';
import { DropdownArrowIcon } from 'assets/svgs';
import styles from './style.module.scss';

const TermButton = () => {
  const { isOpen, setIsOpen, toggleIsOpen, containerRef } = useOpenDropdown<HTMLDivElement>();
  const [term, setTerm] = useState('주간');
  const setDayOrWeekly = useSetRecoilState(dayOrWeeklyAtom);

  const handleWeekClick = () => {
    setTerm('주간');
    setDayOrWeekly(false);
    setIsOpen(false);
  };

  const handleDayClick = () => {
    setTerm('일별');
    setDayOrWeekly(true);
    setIsOpen(false);
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
    <div ref={containerRef} className={styles.termWrapper}>
      <button type="button" className={styles.termButton} onClick={toggleIsOpen}>
        <p className={styles.term}>{term}</p>
        <DropdownArrowIcon />
      </button>
      {isOpen && menu}
    </div>
  );
};

export default TermButton;

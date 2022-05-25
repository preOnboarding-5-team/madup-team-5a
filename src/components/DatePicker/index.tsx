import { useRecoilValue } from 'recoil';
import { formatKoreanDate } from 'services/formatDate';
import { durationState } from 'states/durationState';
import ShowMoreIcon from 'components/common/ShowMoreIcon';
import { useOpenDropdown } from 'hooks/useOpenDropdown';
import CalenderInput from './CalenderInput';
import styles from './style.module.scss';

const DatePicker = () => {
  const duration = useRecoilValue(durationState);
  const { isOpen, setIsOpen, toggleIsOpen, containerRef } = useOpenDropdown<HTMLButtonElement>();

  const currentDateText = `${formatKoreanDate(duration.start)}~${formatKoreanDate(duration.end)}`;

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.currentDate} onClick={toggleIsOpen} ref={containerRef}>
        <span className={styles.currentDateText}>{currentDateText}</span>
        <ShowMoreIcon isOpen={isOpen} className={styles.dropIcon} />
      </button>
      <CalenderInput />
    </div>
  );
};

export default DatePicker;

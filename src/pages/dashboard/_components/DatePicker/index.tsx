import { useRecoilValue } from 'recoil';
import { formatKoreanDate } from 'services/formatDate';
import { durationState } from 'pages/dashboard/_states/durationState';
import ShowMoreIcon from 'components/_common/ShowMoreIcon';
import { useOpenDropdown } from 'hooks/useOpenDropdown';
import CalenderInput from './CalenderInput';
import styles from './style.module.scss';

const DatePicker = () => {
  const duration = useRecoilValue(durationState);
  const { isOpen, toggleIsOpen, containerRef } = useOpenDropdown<HTMLDivElement>();

  const currentDateText = `${formatKoreanDate(duration.start)}~${formatKoreanDate(duration.end)}`;

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <button type="button" className={styles.currentDate} onClick={toggleIsOpen}>
        <span className={styles.currentDateText}>{currentDateText}</span>
        <ShowMoreIcon isOpen={isOpen} className={styles.dropIcon} />
      </button>
      {isOpen && <CalenderInput />}
    </div>
  );
};

export default DatePicker;

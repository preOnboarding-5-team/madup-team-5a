import { useRecoilState } from 'recoil';
import dayjs from 'dayjs';
import { DropIcon } from 'assets/svgs';
import { durationState } from 'states/durationState';
import { toYearMonth } from 'services/formatDate';
import { FormEvent, useState } from 'react';
import styles from './style.module.scss';

const CalenderInput = () => {
  const [duration, setDuration] = useRecoilState(durationState);
  const [value, setValue] = useState(toYearMonth(duration.start));

  const handleChangeTextInput = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className={styles.calenderWrapper}>
      <div className={styles.month}>
        <button type="button" className={styles.toNextMonth}>
          <DropIcon className={styles.toLeft} />
        </button>
        <input type="text" className={styles.monthText} value={value} onChange={handleChangeTextInput} />
        <button type="button" className={styles.toNextMonth}>
          <DropIcon className={styles.toRight} />
        </button>
      </div>
      <div className={styles.dates}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
};

export default CalenderInput;

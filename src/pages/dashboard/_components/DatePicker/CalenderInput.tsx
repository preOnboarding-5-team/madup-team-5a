import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import cx from 'classnames';
import type { Dayjs } from 'dayjs';

import type { KeyboardEvent, FormEvent, MouseEvent } from 'react';

import { DropIcon } from 'assets/svgs';
import { toDateString, toYearMonth } from 'services/formatDate';
import { datesAtom } from 'pages/dashboard/_states/dashboard';
import { useCalendarBounds } from 'pages/dashboard/_hooks/useCalendarBounds';

import dayjs from 'dayjs';
import styles from './style.module.scss';

const CalenderInput = () => {
  const [duration, setDuration] = useRecoilState(datesAtom);
  const [value, setValue] = useState(toYearMonth(duration.start));
  const [selectedStart, setSelectedStart] = useState<Dayjs | null>(null);
  const [selectedEnd, setSelectedEnd] = useState<Dayjs | null>(null);
  const { firstDayInCalendar, firstDayOfCurrentMonth, setFirstDayOfCurrentMonth } = useCalendarBounds();

  useEffect(() => {
    setValue(toYearMonth(firstDayOfCurrentMonth));
  }, [firstDayOfCurrentMonth]);

  const handleESCKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      e.currentTarget.blur();
    }
  };

  const handleChangeTextInput = (e: FormEvent<HTMLInputElement>) => {
    let { value: inputValue } = e.currentTarget;

    if (inputValue.length > 6) {
      if (!inputValue.includes('-')) setValue(toYearMonth(firstDayOfCurrentMonth));
      else if (dayjs(inputValue).isValid()) setFirstDayOfCurrentMonth(dayjs(inputValue).set('date', 1));
      else if (dayjs(`${inputValue}-01`).isValid()) setFirstDayOfCurrentMonth(dayjs(`${inputValue}-01`));
      else setValue(toYearMonth(firstDayOfCurrentMonth));
      return;
    }

    if (!inputValue.includes('-') && inputValue.length === 4) inputValue += '-';

    setValue(inputValue);
  };

  const handleClickNextMonth = () => {
    setFirstDayOfCurrentMonth((prev) => prev.add(1, 'month'));
  };

  const handleClickPrevMonth = () => {
    setFirstDayOfCurrentMonth((prev) => prev.subtract(1, 'month'));
  };

  const handleClickDate = (e: MouseEvent<HTMLButtonElement>) => {
    const dayOnClick = firstDayInCalendar.add(Number(e.currentTarget.dataset.idx), 'day');
    if ((selectedStart === null && selectedEnd === null) || (selectedStart && selectedEnd)) {
      setSelectedStart(dayOnClick);
      setSelectedEnd(null);
    } else if (selectedStart && selectedEnd === null) {
      if (dayOnClick > selectedStart) {
        setSelectedEnd(dayOnClick);
        setDuration({ start: toDateString(selectedStart), end: toDateString(dayOnClick) });
      } else {
        setSelectedStart(null);
      }
    }
  };

  return (
    <div className={styles.calenderWrapper}>
      <div className={styles.month}>
        <button type="button" className={styles.toNextMonth} onClick={handleClickPrevMonth}>
          <DropIcon className={styles.toLeft} />
        </button>
        <input
          type="text"
          className={styles.monthText}
          value={value}
          onChange={handleChangeTextInput}
          onKeyDown={handleESCKeyPress}
        />
        <button type="button" className={styles.toNextMonth} onClick={handleClickNextMonth}>
          <DropIcon className={styles.toRight} />
        </button>
      </div>
      <div className={styles.dates}>
        {[...Array(35).keys()].map((dateOffset) => {
          const key = `date-${dateOffset}`;
          const day = firstDayInCalendar.add(dateOffset, 'day');
          return (
            <button
              type="button"
              className={cx(styles.date, {
                [styles.start]: day.isSame(selectedStart),
                [styles.tail]: day.month() !== firstDayOfCurrentMonth.month(),
                [styles.inDuration]: selectedStart && day > selectedStart && selectedEnd && day < selectedEnd,
                [styles.end]: day.isSame(selectedEnd),
              })}
              key={key}
              data-idx={dateOffset}
              onClick={handleClickDate}
            >
              {firstDayInCalendar.add(dateOffset, 'day').date()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CalenderInput;

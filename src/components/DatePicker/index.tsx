import { useRecoilState } from 'recoil';
import { durationState } from 'states/durationState';

const DatePicker = () => {
  const [duration, setDuration] = useRecoilState(durationState);
  return <div>
    <p>{`${}~${}`}</p>
  </div>;
};

export default DatePicker;

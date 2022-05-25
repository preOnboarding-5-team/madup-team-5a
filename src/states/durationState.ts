import dayjs from 'dayjs';
import { atom } from 'recoil';

export const durationState = atom<Duration>({
  key: '#durationState',
  default: {
    // start: dayjs().toString(),
    // end: dayjs().toString(), // TODO
    start: '2022-02-01',
    end: '2022-04-01',
  },
});

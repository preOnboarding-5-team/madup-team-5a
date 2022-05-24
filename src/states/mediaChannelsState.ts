import { atom } from 'recoil';

const ALL_CHANNEL_MAPS: MediaChannelDisplayMap[] = [
  {
    key: 'facebook',
    display: '페이스북',
  },
  {
    key: 'naver',
    display: '네이버',
  },
  {
    key: 'google',
    display: '구글',
  },
  {
    key: 'kakao',
    display: '카카오',
  },
];

export const mediaChannelsState = atom<MediaChannelDisplayMap[]>({
  key: '#channelsState',
  default: ALL_CHANNEL_MAPS,
});

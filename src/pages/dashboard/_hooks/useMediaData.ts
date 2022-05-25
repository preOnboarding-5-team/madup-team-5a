import { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import { mediaChannelsState } from 'pages/dashboard/_states/mediaChannelsState';
import { durationState } from 'pages/dashboard/_states/durationState';
import { packMediaData } from 'services/packMediaData';

export const useMediaData = () => {};

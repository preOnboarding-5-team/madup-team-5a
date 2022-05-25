import React from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/css';
import styles from './styles.module.scss';

const override = css`
  display: block;
  margin: auto 0;
`;

interface IProps {
  loading: boolean;
}

const Loading = ({ loading }: IProps) => {
  return (
    <div className={styles.container}>
      <RingLoader color="#4FADF7" loading={loading} css={override} size={80} />
    </div>
  );
};

export default Loading;

import React from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/css';
import styles from './styles.module.scss';

const Loading = ({ loading }: LoadingProps) => {
  return (
    <div className={styles.container}>
      <RingLoader color="#4FADF7" loading={loading} css={override} size={150} />
    </div>
  );
};

const override = css`
  display: block;
  margin: auto 0;
`;

interface LoadingProps {
  loading: boolean;
}

export default Loading;

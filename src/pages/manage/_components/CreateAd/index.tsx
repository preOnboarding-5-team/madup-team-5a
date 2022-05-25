import { Dispatch, MouseEvent, SetStateAction, useEffect, useState } from 'react';

import { cx } from '@emotion/css';

import styles from './styles.module.scss';

interface Props {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

const CreateAd = ({ isShow, setIsShow }: Props) => {
  const onClickHide = () => {
    setIsShow(false);
  };
  return (
    <div className={cx(styles.modalWrapper, { [styles.display]: isShow })}>
      <div className={styles.modal}>
        <form>
          <legend>
            <h3>광고 만들기</h3>
          </legend>
        </form>
        <button type="button" onClick={onClickHide}>
          <span>닫기</span>
        </button>
      </div>
    </div>
  );
};

export default CreateAd;

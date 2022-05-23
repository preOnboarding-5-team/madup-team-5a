import { PropsWithChildren } from 'react';
import cx from 'classnames';
import { DropIcon } from 'assets/svgs';
import styles from './style.module.scss';

const DropButton = ({ className, dropItems }: DropButtonProps) => {
  return (
    <button className={cx(styles.dropButton, className)} type="button">
      <DropIcon />
    </button>
  );
};

type DropButtonProps = PropsWithChildren<{
  className?: string;
  dropItems: DropItem[];
}>;

export default DropButton;

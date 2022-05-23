import type { MouseEventHandler } from 'react';
import cx from 'classnames';
import { AddIcon } from 'assets/svgs';
import styles from './style.module.scss';

const AddMenu = ({ onClick, larger }: AddMenuProps) => {
  return (
    <li className={cx(styles.menu, styles.roundBottom, styles.addMenu, { [styles.largerMenu]: larger })}>
      <div className={styles.itemWrapper} onClick={onClick} role="menuitem" tabIndex={-1}>
        <div className={styles.item}>
          <AddIcon className={styles.addIcon} />
          <p className={cx(styles.title, styles.addTitle)}>항목 추가</p>
        </div>
      </div>
    </li>
  );
};

interface AddMenuProps {
  onClick: MouseEventHandler<HTMLElement>;
  larger: boolean;
}

export default AddMenu;

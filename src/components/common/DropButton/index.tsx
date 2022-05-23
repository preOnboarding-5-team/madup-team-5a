import { useState } from 'react';
import type { PropsWithChildren, MouseEvent } from 'react';
import cx from 'classnames';
import { DropIcon } from 'assets/svgs';
import styles from './style.module.scss';
import { ColorIndicator } from './components';

const DropButton = ({ className, dropItems }: DropButtonProps) => {
  const [currentItem, setCurrentItem] = useState(dropItems[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickTop = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickItem = (e: MouseEvent<HTMLElement>) => {
    if (e.currentTarget.dataset.idx === undefined) return;
    setCurrentItem(dropItems[Number(e.currentTarget.dataset.idx)]);
  };

  const dropMenu = (
    <ul className={styles.dropMenu}>
      {dropItems.map(({ color, title }, idx) => {
        const key = `className-${title}-${idx}`;
        return (
          <li className={styles.item} key={key}>
            <div className={styles.itemSelector} type="button" data-idx={idx} onClick={handleClickItem}>
              {color && <ColorIndicator color={color} />}
              {title}
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.currentItem} onClick={handleClickTop} role="button" tabIndex={-1}>
        {currentItem.color && <ColorIndicator color={currentItem.color} />}
        {currentItem.title}
        <DropIcon className={styles.dropIcon} />
      </div>
      {isOpen && <div className={styles.dropMenuWrapper}>{dropMenu}</div>}
    </div>
  );
};

type DropButtonProps = PropsWithChildren<{
  className?: string;
  dropItems: DropItem[];
}>;

export default DropButton;

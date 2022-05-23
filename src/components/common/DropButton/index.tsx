import { useState, useRef, useEffect } from 'react';
import type { PropsWithChildren, Dispatch, SetStateAction } from 'react';
import cx from 'classnames';
import { DropIcon } from 'assets/svgs';
import { ColorIndicator } from './components';
import styles from './style.module.scss';

const DropButton = ({ className, dropItems, currentIdx, setCurrentIdx, larger = false }: DropButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOuterClick = (e: MouseEvent) => {
      if (!outerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOuterClick);
    return () => document.removeEventListener('click', handleOuterClick);
  }, []);

  const handleClickTop = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickItem = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.dataset.idx === undefined) return;
    setCurrentIdx(Number(e.currentTarget.dataset.idx));
    setIsOpen(false);
  };

  const dropMenu = (
    <ul className={styles.dropMenu}>
      {[...dropItems.slice(0, currentIdx), ...dropItems.slice(currentIdx + 1)].map(({ color, title }, idx) => {
        const key = `className-${title}-${idx}`;
        return (
          <li
            className={cx(styles.menu, {
              [styles.largerMenu]: larger,
              [styles.roundBottom]: idx === dropItems.length - 1,
            })}
            key={key}
          >
            <div
              className={styles.itemWrapper}
              data-idx={idx >= currentIdx ? idx + 1 : idx}
              onClick={handleClickItem}
              role="menuitem"
              tabIndex={-1}
            >
              <div className={styles.item}>
                {color && <ColorIndicator color={color} />}
                <p className={styles.title}>{title}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={cx(styles.wrapper, className, { [styles.largerWrapper]: larger })} ref={outerRef}>
      <div
        className={cx(styles.currentItemWrapper, {
          [styles.highlightHover]: !isOpen,
          [styles.largerCurrentItemWrapper]: larger,
        })}
        onClick={handleClickTop}
        role="button"
        tabIndex={-1}
      >
        <div className={styles.item}>
          {dropItems[currentIdx].color && <ColorIndicator color={dropItems[currentIdx].color as string} />}
          <p className={styles.title}>{dropItems[currentIdx].title}</p>
        </div>
        <DropIcon className={styles.dropIcon} />
      </div>
      {isOpen && dropMenu}
    </div>
  );
};

type DropButtonProps = PropsWithChildren<{
  className?: string;
  dropItems: DropItem[];
  larger?: boolean;
  currentIdx: number;
  setCurrentIdx: Dispatch<SetStateAction<number>>;
}>;

export default DropButton;

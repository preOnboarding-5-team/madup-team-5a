import { useState, useRef, useEffect, useMemo } from 'react';
import type { PropsWithChildren, Dispatch, SetStateAction } from 'react';
import cx from 'classnames';

import { DropIcon, AddIcon } from 'assets/svgs';
import ColorIndicator from './ColorIndicator';
import styles from './style.module.scss';

const DropButton = ({
  className,
  dropItems,
  setCurrentIdx,
  larger = false,
  optional = false,
  additional = false,
}: DropButtonProps) => {
  const [topIdx, setTopIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOuterClick = (e: MouseEvent) => {
      if (!outerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleWindowBlur = () => {
      setIsOpen(false);
    };

    document.addEventListener('click', handleOuterClick);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('click', handleOuterClick);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);

  useEffect(() => {
    setCurrentIdx(topIdx - Number(optional));
  }, [setCurrentIdx, topIdx, optional]);

  const dropItemsToRender = useMemo<DropItem[]>(() => {
    const noneMenu = { title: '선택 안 함' };
    if (optional) return [noneMenu, ...dropItems];
    return dropItems;
  }, [dropItems, optional]);

  const handleClickTop = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickItem = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.dataset.idx === undefined) return;
    setTopIdx(Number(e.currentTarget.dataset.idx));
    setIsOpen(false);
  };

  const handleClickAdd = () => {};

  if (additional) {
    console.log(dropItems.length);
  }

  const dropMenu = (
    <ul className={styles.dropMenu}>
      {[...dropItemsToRender.slice(0, topIdx), ...dropItemsToRender.slice(topIdx + 1)].map(({ color, title }, idx) => {
        const key = `className-${title}-${idx}`;
        return (
          <li
            className={cx(styles.menu, {
              [styles.largerMenu]: larger,
              [styles.roundTop]: idx === 0,
              [styles.roundBottom]: !additional && idx === dropItemsToRender.length - 2,
            })}
            key={key}
          >
            <div
              className={styles.itemWrapper}
              data-idx={idx >= topIdx ? idx + 1 : idx}
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
      {additional && (
        <li
          className={cx(styles.menu, styles.addMenu, styles.roundBottom, {
            [styles.largerMenu]: larger,
            [styles.roundTop]: dropItems.length === 1,
          })}
        >
          <div className={styles.itemWrapper} onClick={handleClickAdd} role="menuitem" tabIndex={-1}>
            <div className={cx(styles.item, styles.addItem)}>
              <AddIcon className={styles.addIcon} />
              <p className={styles.addTitle}>항목 추가</p>
            </div>
          </div>
        </li>
      )}
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
          {dropItemsToRender[topIdx].color && <ColorIndicator color={dropItemsToRender[topIdx].color as string} />}
          <p className={styles.title}>{dropItemsToRender[topIdx].title}</p>
        </div>
        <DropIcon className={styles.dropIcon} />
      </div>
      {isOpen && dropMenu}
    </div>
  );
};

type DropButtonProps = PropsWithChildren<{
  dropItems: DropItem[];
  setCurrentIdx: Dispatch<SetStateAction<number>>;
  larger?: boolean;
  optional?: boolean;
  additional?: boolean;
  className?: string;
}>;

export default DropButton;

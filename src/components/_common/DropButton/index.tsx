import { useState, useEffect, useMemo, useRef } from 'react';
import cx from 'classnames';

import type { KeyboardEvent, PropsWithChildren, Dispatch, SetStateAction, MouseEvent, FormEvent } from 'react';

import { AddIcon } from 'assets/svgs';
import { useOpenDropdown } from 'hooks/useOpenDropdown';
import ShowMoreIcon from '../ShowMoreIcon';
import ColorIndicator from './ColorIndicator';
import styles from './style.module.scss';

const DropButton = ({
  className,
  dropItems,
  setDropItems,
  setCurrentIdx,
  disabledIdx,
  larger = false,
  optional = false,
  additional = false,
}: DropButtonProps) => {
  const [topIdx, setTopIdx] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const { isOpen, setIsOpen, toggleIsOpen, containerRef: outerRef } = useOpenDropdown<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentIdx(topIdx - Number(optional));
  }, [setCurrentIdx, topIdx, optional]);

  useEffect(() => {
    setInputValue('');
  }, [isOpen]);

  const dropItemsToRender = useMemo<DropItem[]>(() => {
    const noneMenu = { title: '선택 안 함' };
    const parsedDropItems = dropItems.map((item) => {
      if (typeof item === 'string') return { title: item };
      return item;
    }) as DropItem[];

    if (optional) return [noneMenu, ...parsedDropItems];

    return parsedDropItems;
  }, [dropItems, optional]);

  const handleClickItem = (e: React.MouseEvent<HTMLElement>) => {
    const { idx } = e.currentTarget.dataset;
    if (idx === undefined || disabledIdx?.includes(Number(idx) - Number(optional))) return;
    setTopIdx(Number(e.currentTarget.dataset.idx));
    setIsOpen(false);
  };

  const handleClickAddMenu = (e: MouseEvent<HTMLDivElement>) => {
    if (!inputRef.current || e.currentTarget.contains(document.activeElement)) return;
    inputRef.current.focus();
  };

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addItem();
  };

  const addItem = () => {
    if (!inputRef.current || !setDropItems || !inputValue) return;

    const { value } = inputRef.current;
    setDropItems((prev) => [...prev, { title: value }]);

    inputRef.current.blur();
    setInputValue('');
  };

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
              [styles.disabled]: disabledIdx?.includes(Number(idx) - Number(topIdx > idx) - Number(optional) + 1),
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
          <div className={styles.itemWrapper} role="menuitem" tabIndex={-1} onClick={handleClickAddMenu}>
            <div className={cx(styles.item, styles.addItem)}>
              <AddIcon className={styles.addIcon} onClick={addItem} />
              <input
                type="text"
                className={styles.addTitle}
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyUp={handleEnterKeyPress}
                placeholder="항목 추가"
              />
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
        onClick={toggleIsOpen}
        role="button"
        tabIndex={-1}
      >
        <div className={styles.item}>
          {dropItemsToRender[topIdx].color && <ColorIndicator color={dropItemsToRender[topIdx].color as string} />}
          <p className={styles.title}>{dropItemsToRender[topIdx].title}</p>
        </div>
        <ShowMoreIcon isOpen={isOpen} className={styles.dropIcon} />
      </div>
      {isOpen && dropMenu}
    </div>
  );
};

type DropButtonProps = PropsWithChildren<{
  setCurrentIdx: Dispatch<SetStateAction<number>>;
  dropItems: DropItem[] | string[];
  setDropItems?: Dispatch<SetStateAction<DropItem[]>>;
  disabledIdx?: number[];
  larger?: boolean;
  optional?: boolean;
  additional?: boolean;
  className?: string;
}>;

export default DropButton;

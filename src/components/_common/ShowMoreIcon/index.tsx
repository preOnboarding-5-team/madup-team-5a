import cx from 'classnames';
import { DropIcon } from 'assets/svgs';
import styles from './style.module.scss';

const ShoeMoreIcon = ({ isOpen, className, style }: ShowMoreIconProps) => {
  return <DropIcon className={cx(styles.showMoreIcon, className, { [styles.open]: isOpen })} style={style} />;
};

interface ShowMoreIconProps {
  isOpen: boolean;
  className?: string;
  style?: object;
}

export default ShoeMoreIcon;

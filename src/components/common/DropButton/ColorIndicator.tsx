import styles from './style.module.scss';

const ColorIndicator = ({ color }: ColorInidicatorProps) => {
  return <div className={styles.colorIndicator} style={{ backgroundColor: color }} />;
};

interface ColorInidicatorProps {
  color: string;
}

export default ColorIndicator;

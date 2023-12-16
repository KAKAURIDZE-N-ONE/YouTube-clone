import ShortsSvg from './ShortsSvg';
import styles from './ShortsContainerHeading.module.css';

function ShortsContainerHeading() {
  return (
    <div className={styles.headingOfShorts}>
      <ShortsSvg />
      <h1>Shorts</h1>
    </div>
  );
}

export default ShortsContainerHeading;

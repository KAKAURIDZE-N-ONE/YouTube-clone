import styles from './Short.module.css';
import PropTypes from 'prop-types';

function Short({ el }) {
  return (
    <div className={styles.shortBlock}>
      <div className={styles.shortImageAndVideoBox} key={el.shortImg}>
        <img style={{ width: '100%' }} src={el.shortImg} />
      </div>
      <h1 className={styles.shortHeading}>{el.heading}</h1>
      <h1 className={styles.viewsQuantity}>{el.views}</h1>
    </div>
  );
}

Short.propTypes = {
  el: PropTypes.shape({
    shortImg: PropTypes.string,
    heading: PropTypes.string,
    views: PropTypes.string,
  }),
};

export default Short;

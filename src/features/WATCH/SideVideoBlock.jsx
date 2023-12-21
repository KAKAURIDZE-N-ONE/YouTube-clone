import { Link } from 'react-router-dom';
import styles from './SideVideoBlock.module.css';
import PropTypes from 'prop-types';

function SideVideoBlock({ el }) {
  return (
    <Link
      to={`/watch?v=${el.id}`}
      className={styles.videoBlock}
      style={{
        height: '94px',
        gap: '7px',
        textDecoration: 'none',
      }}
      key={el.id}
    >
      <img
        src={el.videoImg}
        style={{
          width: '168px',
          height: '94px',
          borderRadius: '8px',
        }}
      ></img>
      <div style={{ height: '100%', width: '100%' }}>
        <h2
          style={{
            color: '#fff',
            fontWeight: '500',
            fontSize: '14px',
          }}
        >
          {el.videoName}
        </h2>
        <h3
          style={{
            color: '#aaa',
            fontSize: '12px',
            fontWeight: '500',
            marginTop: '8px',
          }}
        >
          {el.pageName}
        </h3>
        <div
          style={{
            color: '#aaa',
            display: 'flex',
            marginTop: '4px',
          }}
        >
          <h1 style={{ fontSize: '12px', fontWeight: '400' }}>
            {el.quantityOfViews} views
          </h1>
          <div className={styles.videoDescriptionDot}></div>
          <h1 style={{ fontSize: '12px', fontWeight: '400' }}>
            {el.uploadDate}
          </h1>
        </div>
      </div>
    </Link>
  );
}

SideVideoBlock.propTypes = {
  el: PropTypes.shape({
    uploadDate: PropTypes.string,
    quantityOfViews: PropTypes.string,
    pageName: PropTypes.string,
    videoName: PropTypes.string,
    videoImg: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default SideVideoBlock;

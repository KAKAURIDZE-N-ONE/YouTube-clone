import { useEffect, useRef, useState } from 'react';
import styles from './Short.module.css';
import PropTypes from 'prop-types';
import { useCalculateGridTemplateColumnsShortsBox } from '../../../hooks/useCalculateGridTemplateColumnsShortsBox';
import { useSelector } from 'react-redux';

function Short({ el }) {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const [shortBlockWidth, setShortBlockWidth] = useState(0);
  const [shortDistanceFromBottom, setShortDistanceFromBottom] = useState(0);
  const gridTemplateCols = useCalculateGridTemplateColumnsShortsBox();
  const shortImageAndVideoBoxRef = useRef(null);

  useEffect(
    function () {
      const handleResize = () => {
        if (shortImageAndVideoBoxRef) {
          setShortBlockWidth(shortImageAndVideoBoxRef.current.clientWidth);
        }
      };
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    [MainNavBar.windowWidth, gridTemplateCols]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (shortImageAndVideoBoxRef.current) {
        const rect = shortImageAndVideoBoxRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromBottom = windowHeight - rect.top;
        setShortDistanceFromBottom(distanceFromBottom);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to set the distance on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const SHORT_IMAGE_AND_VIDEO_BOX_STYLE = {
    height: `${shortBlockWidth * 1.7733}px`,
  };

  return (
    <div className={styles.shortBlock}>
      <div
        className={styles.shortImageAndVideoBox}
        ref={shortImageAndVideoBoxRef}
        style={SHORT_IMAGE_AND_VIDEO_BOX_STYLE}
      >
        <img
          className={styles.shortImg}
          src={shortDistanceFromBottom > 0 ? el.shortImg : ''}
        />
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

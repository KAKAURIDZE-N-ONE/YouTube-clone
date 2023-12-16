import { useSelector } from 'react-redux';
import styles from './SearchLoopSvg.module.css';
import PropTypes from 'prop-types';

function SearchLoopSvg({ size, handleClickToOpenSearch }) {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const VideosMain = useSelector(store => store.VideosMain);
  const deleteColor = VideosMain.videosIsLoading;
  const style = {
    fill: deleteColor && 'rgba(255, 255, 255, 0)',
  };

  return (
    <div
      className={styles['loop-box']}
      onClick={MainNavBar.needClickForSearch ? handleClickToOpenSearch : null}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        focusable="false"
        className={styles['loop']}
        style={size !== '' ? { ...style, width: size, height: size } : {}}
      >
        <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
      </svg>
    </div>
  );
}

SearchLoopSvg.propTypes = {
  size: PropTypes.string,
  handleClickToOpenSearch: PropTypes.func,
};

export default SearchLoopSvg;

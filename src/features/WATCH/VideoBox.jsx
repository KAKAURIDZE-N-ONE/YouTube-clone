import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateVideoBoxWidth } from './watchSlice';
import PropTypes from 'prop-types';

function VideoBox({ children }) {
  const Watch = useSelector(store => store.Watch);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!videoBoxRef.current) return;
    const handleResize = () => {
      if (videoBoxRef.current) {
        dispatch(updateVideoBoxWidth(videoBoxRef.current.clientWidth));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const videoBoxRef = useRef(null);

  const STYLE = {
    width: '100%',
    margin: '0 auto',
    marginTop: '7.7rem',
    height: `${Watch.videoBoxWidth / 1.7777}px`,
    backgroundColor: !Watch.videoIsLoaded && 'black ',
    borderRadius: '12px',
  };

  return (
    <div style={STYLE} ref={videoBoxRef}>
      {children}
    </div>
  );
}

VideoBox.propTypes = {
  children: PropTypes.node,
};

export default VideoBox;

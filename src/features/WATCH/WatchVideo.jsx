import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { videoIsLoaded } from './watchSlice';

function WatchVideo({ videoSrc }) {
  const [videoIsplaying, setVideoIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const dispatch = useDispatch();

  function handleVideoClick() {
    if (videoIsplaying) {
      videoRef.current.pause();
      setVideoIsPlaying(false);
    } else {
      videoRef.current.play();
      setVideoIsPlaying(true);
    }
  }

  function handleVideoLaod() {
    dispatch(videoIsLoaded());
  }

  const STYLE = {
    width: '100%',
    borderRadius: '12px',
  };
  return (
    <video
      onLoadedData={handleVideoLaod}
      onClick={handleVideoClick}
      ref={videoRef}
      style={STYLE}
      className={`video`}
      src={videoSrc}
      autoPlay
      loop
    />
  );
}

WatchVideo.propTypes = {
  videoSrc: PropTypes.string,
};

export default WatchVideo;

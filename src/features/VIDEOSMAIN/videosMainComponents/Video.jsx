import PropTypes from 'prop-types';
import styles from './Video.module.css';
import { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCalculateGridTemplateColumnsVideosBox } from '../../../hooks/useCalculateGridTemplateColumnsVideosBox';
import {
  pageImagesIsLoaded,
  updateVideoAndPhotoContainerHeight,
  updateVideoAndPhotoContainerWidth,
} from '../videosMainSlice';
import VoiceButtonBox from './VoiceButtonBox';
import LineBetweenVoiceAndSubtitles from './LineBetweenVoiceAndSubtitles';
import SubtitlesButtonBox from './SubtitlesButtonBox';
import SettingDotsForVideo from './SettingDotsForVideos';
import CurrentAndDurationTime from './CurrentAndDurationTime';
import DurationOnThePhoto from './DurationOnThePhoto';
import { Link } from 'react-router-dom';

import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video3.mp4';
import video4 from '../videos/video4.mp4';
import video5 from '../videos/video5.mp4';
import video6 from '../videos/video6.mp4';
import video7 from '../videos/video7.mp4';
import video8 from '../videos/video8.mp4';
import video9 from '../videos/video9.mp4';
import video10 from '../videos/video10.mp4';
import video11 from '../videos/video11.mp4';
import video12 from '../videos/video12.mp4';

const videosArr = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
  video10,
  video11,
  video12,
];

const Video = memo(function Video({ elementDetails, isMuted, setIsMuted }) {
  const dispatch = useDispatch();
  const MainNavBar = useSelector(store => store.MainNavBar);
  const VideosMain = useSelector(store => store.VideosMain);

  const [hoveredPercentage, setHoveredPercentage] = useState(0); // State to track hovered percentage
  const [duration, setDuration] = useState(0);
  const [inputRangeIsHovering, setInputRangeIsHovering] = useState(false);
  const [videoBoxIsHovering, setVideoBoxIsHovering] = useState(false);
  const [photoAndVideoBoxIsHovering, setPhotoAndVideoBoxIsHovering] =
    useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [readyToChange, setReadyToChange] = useState(false);
  const [videoIsLoaded, setVideoIsLoaded] = useState(false);
  const [videoImageIsLoaded, setVideoImageIsLoaded] = useState(false);
  const [videoDistanceFromBottom, setVideoDistanceFromBottom] = useState(0);

  const videoAndPhotoContainerRef = useRef(null);
  const videoRef = useRef(null);

  const gridTemplateCols = useCalculateGridTemplateColumnsVideosBox();

  useEffect(() => {
    const handleScroll = () => {
      if (videoAndPhotoContainerRef.current) {
        const rect = videoAndPhotoContainerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const distanceFromBottom = windowHeight - rect.top;
        setVideoDistanceFromBottom(distanceFromBottom);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to set the distance on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  ///to read width of photo and video container after page has arrive
  useEffect(() => {
    const handleResize = () => {
      if (videoAndPhotoContainerRef.current) {
        dispatch(
          updateVideoAndPhotoContainerWidth(
            videoAndPhotoContainerRef.current.clientWidth
          )
        );
        dispatch(
          updateVideoAndPhotoContainerHeight(
            videoAndPhotoContainerRef.current.clientHeight
          )
        );
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [MainNavBar.windowWidth, gridTemplateCols, dispatch]);
  ///to read width of photo and video container after page has arrive

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        playVideox();
      }
    };

    const timeout = setTimeout(playVideo, 1);

    return () => clearTimeout(timeout);
  }, [videoBoxIsHovering, readyToChange]);

  useEffect(() => {
    if (!videoBoxIsHovering) setReadyToChange(false);
    else if (videoIsLoaded) {
      const playVideo = () => {
        setReadyToChange(true);
      };

      const timeout = setTimeout(playVideo, 500);

      return () => clearTimeout(timeout);
    }
  }, [videoBoxIsHovering, dispatch, videoIsLoaded]);

  //video time controller
  function onTimeUpdate() {
    setCurrentTime(videoRef.current.currentTime);
  }

  function handlePageImgLoad() {
    dispatch(pageImagesIsLoaded());
  }

  function handleVideoLoad() {
    setVideoIsLoaded(true);
  }

  function handleVideoImageLoad() {
    setVideoImageIsLoaded(true);
  }

  const onSliderChange = e => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    videoRef.current.currentTime = time;
  };

  function onLoadedMetadata() {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
      setCurrentTime(video.currentTime);
    }
  }
  //////////////////////////

  function toggleMute() {
    const currentVideo = videoRef.current;
    if (currentVideo) {
      currentVideo.muted = !currentVideo.muted;
      setIsMuted(currentVideo.muted);
    }
  }

  function playVideox() {
    if (videoRef.current && videoBoxIsHovering && readyToChange) {
      videoRef.current.play();
    }
  }

  function pauseVideo() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  function handleMouseMoveInputRange(event) {
    const rect = event.target.getBoundingClientRect();
    const thumbPosition = event.clientX - rect.left; // Position of the mouse relative to the range input

    if (thumbPosition > 0) {
      setHoveredPercentage(thumbPosition);
    } else {
      setHoveredPercentage(0);
    }
  }

  function handleMouseEnterPhotoAndVideo() {
    setPhotoAndVideoBoxIsHovering(true);
  }

  function handleMouseLeavePhotoAndVideo() {
    setPhotoAndVideoBoxIsHovering(false);
  }

  function handleMouseEnterContentElementBox() {
    setVideoBoxIsHovering(true);
  }

  function handleMouseLeaveContentElementBox() {
    setVideoBoxIsHovering(false);
    pauseVideo();
  }

  function handleMouseEnterInputRange() {
    setInputRangeIsHovering(true);
  }

  function handleMouseLeaveInputRange() {
    setInputRangeIsHovering(false);
    setHoveredPercentage(0);
  }

  const VIDEOIMGSTYLE = {};

  const CONTENTELEMENTBOXSTYLE = {
    zIndex: '0',
    backgroundColor: '#0f0f0f',
    maxWidth: MainNavBar.windowWidth <= 700 && '50rem',
    textDecoration: 'none',
  };

  const VIDEOANDPHOTOCONTAINERSTYLE = {
    width: '100%',
    height: `${VideosMain.videoAndPhotoContainerWidth / 1.77782}px`,
    position: 'relative',
    borderRadius: videoBoxIsHovering ? '0' : '12px',
    transition: videoBoxIsHovering && 'border-radius 0.15s',
    overflow: !readyToChange && 'hidden',
    backgroundColor: !videoImageIsLoaded && 'rgba(255,255,255,0.2)',
  };

  const watchedPercentage = (currentTime / duration) * 100;

  const INPUTRANGESTYLE = {
    background: `linear-gradient(to right, red ${watchedPercentage}%, white ${hoveredPercentage}px, #dddddd3b ${hoveredPercentage}px)`,
    bottom: '0.23rem',
    zIndex: videoBoxIsHovering && readyToChange ? '13' : '-2',
  };

  const IMGFULLCONTAINERSTYLE = {
    zIndex: videoBoxIsHovering && readyToChange ? '-2' : '14',
    position: 'absolute',
  };

  const VIDEOFULLCONTAINERSTYLE = {
    zIndex: !(videoBoxIsHovering || (readyToChange ? '-2' : '12')),
    position: 'absolute',
  };

  return (
    <Link
      onClick={e => {
        if (e.target.classList.value !== 'video') e.preventDefault();
      }}
      to={`/watch?v=${elementDetails.id}`}
      className={styles.contentElementBox}
      style={CONTENTELEMENTBOXSTYLE}
      onMouseEnter={handleMouseEnterContentElementBox}
      onMouseLeave={handleMouseLeaveContentElementBox}
    >
      <div
        ref={videoAndPhotoContainerRef}
        style={VIDEOANDPHOTOCONTAINERSTYLE}
        onMouseEnter={handleMouseEnterPhotoAndVideo}
        onMouseLeave={handleMouseLeavePhotoAndVideo}
      >
        {videoBoxIsHovering && videoImageIsLoaded && (
          <div style={VIDEOFULLCONTAINERSTYLE}>
            {!inputRangeIsHovering && photoAndVideoBoxIsHovering && (
              <CurrentAndDurationTime
                inputRangeIsHovering={inputRangeIsHovering}
                duration={duration}
                currentTime={currentTime}
                videoBoxIsHovering={videoBoxIsHovering}
              />
            )}
            <input
              type="range"
              style={INPUTRANGESTYLE}
              className={styles.videoTimeControllerInput}
              min={0}
              max={duration}
              step={0.1}
              value={currentTime}
              onChange={onSliderChange}
              onMouseEnter={handleMouseEnterInputRange}
              onMouseLeave={handleMouseLeaveInputRange}
              onMouseMove={handleMouseMoveInputRange}
            />
            <div className={styles.soundAndSubtitlesControl}>
              <VoiceButtonBox toggleMute={toggleMute} isMuted={isMuted} />
              <LineBetweenVoiceAndSubtitles />
              <SubtitlesButtonBox />
            </div>
            <video
              className="video"
              ref={videoRef}
              src={videosArr[elementDetails.id]}
              style={{ width: '100%' }}
              onTimeUpdate={onTimeUpdate}
              onLoadedMetadata={onLoadedMetadata}
              onLoadedData={handleVideoLoad}
              loop
              muted={isMuted ? true : false}
            />
          </div>
        )}
        <div style={IMGFULLCONTAINERSTYLE}>
          <DurationOnThePhoto
            durationOfVideo={elementDetails.duration}
            videoBoxIsHovering={videoBoxIsHovering}
          />
          <div>
            <img
              onLoad={handleVideoImageLoad}
              id="ImageId"
              className={styles.videoImg}
              src={videoDistanceFromBottom > 0 ? elementDetails.videoImg : ''}
              alt="video image"
              style={VIDEOIMGSTYLE}
            />
          </div>
        </div>
      </div>
      {VideosMain.videoAndPhotoContainerWidth > 0 && (
        <div
          className={styles.videoDescription}
          style={{
            boxShadow:
              photoAndVideoBoxIsHovering &&
              readyToChange &&
              '10px -60px 10px 20px rgba(0, 0, 0, 0.214)',
          }}
        >
          <div
            className={styles.pageImgBox}
            style={{
              backgroundColor:
                !VideosMain.pageImagesIsLoaded && 'rgba(255,255,255,0.2)',
            }}
          >
            <img
              className={styles.pageImg}
              onLoad={handlePageImgLoad}
              src={elementDetails.pageImg}
              alt="page image"
            />
          </div>
          <div>
            <h1 className={styles.videoName}>{elementDetails.videoName}</h1>
            <h1 className={styles.pageName}>{elementDetails.pageName}</h1>
            <div className={styles.viewsAndTime}>
              <h1 className={styles.pageName}>
                {elementDetails.quantityOfViews} views
              </h1>
              <div className={styles.videoDescriptionDot}></div>
              <h1 className={styles.pageName}>{elementDetails.uploadDate}</h1>
            </div>
          </div>
          {videoBoxIsHovering && !photoAndVideoBoxIsHovering && (
            <SettingDotsForVideo />
          )}
        </div>
      )}
    </Link>
  );
});

Video.propTypes = {
  elementDetails: PropTypes.shape({
    videoName: PropTypes.string,
    pageName: PropTypes.string,
    videoImg: PropTypes.string,
    videoAnime: PropTypes.string,
    pageImg: PropTypes.string,
    quantityOfViews: PropTypes.string,
    uploadDate: PropTypes.string,
    videoUrl: PropTypes.string,
    videoId: PropTypes.string,
    id: PropTypes.number,
    duration: PropTypes.number,
  }),
  isMuted: PropTypes.bool,
  setIsMuted: PropTypes.func,
  pageImgIsLoaded: PropTypes.bool,
  setPageImgIsLoaded: PropTypes.func,
};

export default Video;

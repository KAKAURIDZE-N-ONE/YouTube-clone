import { useEffect, useRef, useState } from 'react';
import { useCalculateGridTemplateColumnsVideosBox } from '../../hooks/useCalculateGridTemplateColumnsVideosBox';
import { useDispatch, useSelector } from 'react-redux';

function LoadingVideos() {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const dispatch = useDispatch();
  const videoAndPhotoContainerRef = useRef(null);
  const [videoAndPhotoContainerWidth, setVideoAndPhotoContainerWidth] =
    useState(0);

  const gridTemplateColumns = useCalculateGridTemplateColumnsVideosBox();

  useEffect(() => {
    const handleResize = () => {
      if (videoAndPhotoContainerRef.current) {
        setVideoAndPhotoContainerWidth(
          videoAndPhotoContainerRef.current.clientWidth
        );
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [MainNavBar.windowWidth, gridTemplateColumns, dispatch]);

  const mainBoxStyle = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: gridTemplateColumns,
    backgroundColor: '#0f0f0f',
    columnGap: '1.5rem',
    rowGap: '5rem',
  };

  const blockStyle = {
    width: '100%',
    height: `${videoAndPhotoContainerWidth / 1.77782}px`,
    backgroundColor: 'rgba(255,255,255,0.11)',
    borderRadius: '8px',
  };
  const blockdescriptStyle = {
    width: '100%',
  };
  const pageImgStyle = {
    marginTop: '0.2rem',
    minWidth: '3.6rem',
    maxHeight: '3.6rem',
    backgroundColor: 'rgba(255,255,255,0.11)',
    borderRadius: '50%',
  };
  return (
    <div style={mainBoxStyle}>
      {Array.from({ length: 24 }, (z, i) => (
        <div key={i}>
          <div style={blockStyle} ref={videoAndPhotoContainerRef}></div>
          <div style={{ display: 'flex', marginTop: '0.9rem', gap: '1.1rem' }}>
            <div style={pageImgStyle}></div>
            <div style={blockdescriptStyle}>
              <div
                style={{
                  width: '89%',
                  height: '2rem',
                  backgroundColor: 'rgba(255,255,255,0.11)',
                  borderRadius: '3px',
                }}
              ></div>
              <div
                style={{
                  width: '59%',
                  marginTop: '1.1rem',
                  height: '2rem',
                  backgroundColor: 'rgba(255,255,255,0.11)',
                  borderRadius: '3px',
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingVideos;

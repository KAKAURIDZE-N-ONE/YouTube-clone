import styles from './Videos.module.css';
import Video from './Video';
import { useCalculateGridTemplateColumnsShortsBox } from '../../../hooks/useCalculateGridTemplateColumnsShortsBox';
import { useCalculateGridTemplateColumnsVideosBox } from '../../../hooks/useCalculateGridTemplateColumnsVideosBox';
import { useState } from 'react';
import ShortsContainerHeading from './ShortsContainerHeading';
import Short from './Short';
import ShowMoreButton from './ShowMoreButton';
import { useSelector } from 'react-redux';

function Videos() {
  const [isMuted, setIsMuted] = useState(true);
  const VideosMain = useSelector(store => store.VideosMain);

  const GRID_TEMPLATE_COLUMNS_SHORTS_BOX =
    useCalculateGridTemplateColumnsShortsBox();

  const GRID_TEMPLATE_COLUMNS_VIDEOS_BOX =
    useCalculateGridTemplateColumnsVideosBox();

  const quantityOfFirst2ColVideos =
    Number(GRID_TEMPLATE_COLUMNS_VIDEOS_BOX[7]) * 2;
  const quantityOfFirst1ColShorts = Number(GRID_TEMPLATE_COLUMNS_SHORTS_BOX[7]);

  const VIDEOSBOXSTYLE = {
    gridTemplateColumns: GRID_TEMPLATE_COLUMNS_VIDEOS_BOX,
    backgroundColor: '#0f0f0f',
  };

  const SHORTSCONTENTBOXSTYLE = {
    gridTemplateColumns: GRID_TEMPLATE_COLUMNS_SHORTS_BOX,
  };

  return (
    <>
      <div className={styles['videos-box']} style={VIDEOSBOXSTYLE}>
        {VideosMain.videosArr.map(
          (el, i) =>
            i < quantityOfFirst2ColVideos && (
              <Video
                key={el.id}
                elementDetails={el}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
              />
            )
        )}
      </div>
      {VideosMain.videoAndPhotoContainerHeigh && (
        <div className={styles.shortsContainer}>
          VideosMain.videosIsLoading
          <ShortsContainerHeading />
          <div
            className={styles.shortsContentBox}
            style={SHORTSCONTENTBOXSTYLE}
          >
            {VideosMain.shortsArr.map(
              (el, i) =>
                i < quantityOfFirst1ColShorts && (
                  <Short el={el} key={el.shortImg} />
                )
            )}
          </div>
          <ShowMoreButton />
        </div>
      )}
      <div
        className={styles['videos-box']}
        style={{ ...VIDEOSBOXSTYLE, paddingBottom: '4rem' }}
      >
        {VideosMain.videosArr.map(
          (el, i) =>
            i >= quantityOfFirst2ColVideos && (
              <Video
                key={el.id}
                elementDetails={el}
                isMuted={isMuted}
                setIsMuted={setIsMuted}
              />
            )
        )}
      </div>
    </>
  );
}

export default Videos;

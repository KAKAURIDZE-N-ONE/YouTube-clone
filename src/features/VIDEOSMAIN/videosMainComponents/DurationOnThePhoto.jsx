import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function DurationOnThePhoto({ durationOfVideo, videoBoxIsHovering }) {
  const VideosMain = useSelector(store => store.VideosMain);

  const durationSec = Math.floor(durationOfVideo % 60);
  const durationMin = Math.floor(durationOfVideo / 60);
  const durationHour = Math.floor(durationMin / 60);
  return (
    <div
      style={{
        position: 'absolute',
        right: '0.5rem',
        bottom: '0.5rem',
        backgroundColor: !videoBoxIsHovering ? '#0f0f0f' : '#00000000',
        color: !videoBoxIsHovering ? '#f1f1f1' : '#00000000',
        padding: '0.2rem 0.4rem',
        borderRadius: '3px',
        transition: '0.3s',
        zIndex: videoBoxIsHovering && VideosMain.readyToChange && '102',
      }}
    >
      <h3>
        {durationHour > 0 && `${durationHour}:`}
        {durationMin > 0 ? `${durationMin}:` : '0:'}
        {durationSec < 10 ? `0${durationSec}` : durationSec}
      </h3>
    </div>
  );
}

DurationOnThePhoto.propTypes = {
  durationOfVideo: PropTypes.number,
  videoBoxIsHovering: PropTypes.bool,
};

export default DurationOnThePhoto;

import PropTypes from 'prop-types';

function CurrentAndDurationTime({ duration, currentTime }) {
  const currentSec = Math.floor(currentTime % 60);
  const currentMin = Math.floor(currentTime / 60);
  const currentHour = Math.floor(currentMin / 60);

  const durationSec = Math.floor(duration % 60);
  const durationMin = Math.floor(duration / 60);
  const durationHour = Math.floor(durationMin / 60);

  return (
    <div
      style={{
        position: 'absolute',
        left: '1.1rem',
        bottom: '1.2rem',
        fontSize: '1rem',
        zIndex: '13',
      }}
    >
      <h3 style={{ color: '#eee', fontWeight: '300' }}>
        {currentHour > 0 && `${currentHour}:`}
        {currentMin > 0 ? `${currentMin}:` : `0:`}
        {currentSec < 10 ? `0${currentSec}` : currentSec} /{' '}
        {durationHour > 0 && `${durationHour}:`}
        {durationMin > 0 ? `${durationMin}:` : '0:'}
        {durationSec < 10 ? `0${durationSec}` : durationSec}
      </h3>
    </div>
  );
}

CurrentAndDurationTime.propTypes = {
  duration: PropTypes.number,
  currentTime: PropTypes.number,
  videoBoxIsHovering: PropTypes.bool,
};

export default CurrentAndDurationTime;

import PropTypes from 'prop-types';

function VoiceButtonBox({ toggleMute, isMuted }) {
  return (
    <div onClick={toggleMute} style={{ padding: '0 0.5rem' }}>
      <svg
        height="3rem"
        version="1.1"
        viewBox="0 0 36 36"
        width="3rem"
        fill="#f1f1f1"
      >
        <defs>
          <clipPath>
            <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
            <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
            <path d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"></path>
          </clipPath>
        </defs>
        <path
          d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
          fill="#fff"
        ></path>
        {isMuted && (
          <path
            d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"
            fill="#fff"
          ></path>
        )}
      </svg>
    </div>
  );
}

VoiceButtonBox.propTypes = {
  toggleMute: PropTypes.func,
  isMuted: PropTypes.bool,
};

export default VoiceButtonBox;

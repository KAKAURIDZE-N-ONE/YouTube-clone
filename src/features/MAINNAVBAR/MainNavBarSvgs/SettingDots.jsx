import useClickAnimation from '../../../hooks/useClickAnimation';
import styles from './SettingDots.module.css';

function SettingDots() {
  const { isclickmoment, handleMouseDown, handleMouseUp, forBorder } =
    useClickAnimation();

  return (
    <div
      className={styles['svg-box']}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={
        isclickmoment
          ? { backgroundColor: 'rgba(255, 255, 255, 0.11)' }
          : forBorder
          ? { border: '1px solid rgba(255, 255, 255, 0.11)' }
          : {}
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles['svg']}
      >
        <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
      </svg>
    </div>
  );
}

export default SettingDots;

import styles from './ShowMoreButton.module.css';

function ShowMoreButton() {
  return (
    <div className={styles.button}>
      <h1>Show more</h1>
      <svg
        style={{ fill: '#f1f1f1', marginLeft: '0.7rem' }}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
      >
        <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
      </svg>
    </div>
  );
}

export default ShowMoreButton;

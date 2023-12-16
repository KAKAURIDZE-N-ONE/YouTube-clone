import styles from "./ArrowBack.module.css";

function ArrowBack() {
  return (
    <div className={styles["svg-box"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        focusable="false"
        className={styles["svg"]}
      >
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
      </svg>
    </div>
  );
}

export default ArrowBack;
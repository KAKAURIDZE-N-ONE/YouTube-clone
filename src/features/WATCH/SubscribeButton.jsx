import styles from './SubscribeButton.module.css';

function SubscribeButton() {
  return (
    <div className={styles.subscribeButton}>
      <h1
        style={{
          color: '#0f0f0f',
          fontSize: '1.4rem',
          fontWeight: '500',
        }}
      >
        Subscribe
      </h1>
    </div>
  );
}

export default SubscribeButton;

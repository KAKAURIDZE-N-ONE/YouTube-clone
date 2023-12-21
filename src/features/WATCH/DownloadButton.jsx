function DownloadButton() {
  const STYLE = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0.6rem 1.2rem',
    paddingRight: '1.5rem',
    borderRadius: '1000px',
    marginRight: '0.8rem',
  };
  return (
    <div style={STYLE}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
        style={{ fill: '#fff' }}
      >
        <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
      </svg>
      <h1
        style={{
          color: '#fff',
          fontWeight: '500',
          fontSize: '1.4rem',
        }}
      >
        Download
      </h1>
    </div>
  );
}

export default DownloadButton;

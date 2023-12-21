function ShareButton() {
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
        style={{
          fill: '#fff',
          minWidth: '24px',
          minHeight: '24px',
        }}
      >
        <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
      </svg>
      <h1
        style={{
          color: '#fff',
          fontWeight: '500',
          fontSize: '1.4rem',
        }}
      >
        Share
      </h1>
    </div>
  );
}

export default ShareButton;

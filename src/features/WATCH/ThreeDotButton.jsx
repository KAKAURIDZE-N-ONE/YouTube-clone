function ThreeDotButton() {
  const STYLE = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0.6rem',
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
        <path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
      </svg>
    </div>
  );
}

export default ThreeDotButton;

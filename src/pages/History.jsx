import GoogleSignIn from '../features/MAINNAVBAR/MainNavBarComponents/GoogleSignIn';
import MainContentBox from '../features/MainContentBox';

function History() {
  return (
    <MainContentBox>
      <div
        style={{
          width: '99.3%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#f1f1f1',
          marginTop: '7.2rem',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            fill: '#f1f1f1',
            width: '12rem',
            height: '12rem',
          }}
        >
          <g>
            <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
          </g>
        </svg>

        <h1
          style={{ fontSize: '2.4rem', fontWeight: '400', marginTop: '2.5rem' }}
        >
          Don’t miss new videos
        </h1>
        <h1
          style={{ fontSize: '1.4rem', fontWeight: '400', marginTop: '1.9rem' }}
        >
          Sign in to see updates from your favorite YouTube channels
        </h1>
        <div style={{ marginRight: '-2.1rem', marginTop: '2rem' }}>
          <GoogleSignIn />
        </div>
      </div>
    </MainContentBox>
  );
}

export default History;

import GoogleSignIn from '../features/MAINNAVBAR/MainNavBarComponents/GoogleSignIn';
import MainContentBox from '../features/MainContentBox';

function You() {
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
          <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
        </svg>
        <h1
          style={{ fontSize: '2.4rem', fontWeight: '400', marginTop: '2.5rem' }}
        >
          Enjoy your favorite videos
        </h1>
        <h1
          style={{ fontSize: '1.4rem', fontWeight: '400', marginTop: '1.9rem' }}
        >
          Sign in to access videos that you’ve liked or saved
        </h1>
        <div style={{ marginRight: '-2.1rem', marginTop: '2rem' }}>
          <GoogleSignIn />
        </div>
      </div>
    </MainContentBox>
  );
}

export default You;

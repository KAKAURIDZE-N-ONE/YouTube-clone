import GoogleSignIn from '../features/MAINNAVBAR/MainNavBarComponents/GoogleSignIn';
import MainContentBox from '../features/MainContentBox';

function Subscriptions() {
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
          <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
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

export default Subscriptions;

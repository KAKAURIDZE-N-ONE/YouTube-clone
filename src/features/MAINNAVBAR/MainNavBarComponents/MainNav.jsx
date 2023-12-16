import { useEffect } from 'react';
import GoogleSignIn from './GoogleSignIn';
import styles from './MainNav.module.css';
import MainNavMenuSvg from '../MainNavBarSvgs/MainNavMenuSvg';
import MainNavYoutubeSvg from '../MainNavBarSvgs/MainNavYoutubeSvg';
import SearchBar from './SearchBar';
import SettingDots from '../MainNavBarSvgs/SettingDots';
import ArrowBack from '../MainNavBarSvgs/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { updateWindowWidth } from '../MainNavBarSlice';
import { updateWindowHeight } from '../../SIDENAVBAR/SideNavBarSlice';

function MainNav() {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const VideosMain = useSelector(store => store.VideosMain);

  const dispatch = useDispatch();

  // Update width on window resize

  useEffect(() => {
    function handleResize() {
      dispatch(updateWindowWidth(window.innerWidth));
    }
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    function handleResize() {
      dispatch(updateWindowHeight(window.innerHeight));
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const MAINNAVBOXSTYLE = {
    width: `${MainNavBar.windowWidth - 8}px`,
    marginRight: MainNavBar.searchInputIsFocused,
  };

  return (
    <nav className={styles['main-nav-box']} style={MAINNAVBOXSTYLE}>
      {!(MainNavBar.windowWidth <= 680 && MainNavBar.searchInputIsFocused) ? (
        <div className={styles['cont-1']}>
          <MainNavMenuSvg />
          <MainNavYoutubeSvg />
        </div>
      ) : (
        <ArrowBack />
      )}

      <div
        className={styles['cont-2']}
        style={
          MainNavBar.windowWidth <= 680 && MainNavBar.searchInputIsFocused
            ? { marginLeft: 0, width: '99.98%', marginRight: '1rem' }
            : {}
        }
      >
        <SearchBar />
      </div>
      {!(MainNavBar.windowWidth <= 680 && MainNavBar.searchInputIsFocused) && (
        <div className={styles['cont-3']}>
          {!VideosMain.videosIsLoading && <SettingDots />}
          {!VideosMain.videosIsLoading && <GoogleSignIn />}
          {VideosMain.videosIsLoading && (
            <div
              style={{
                width: '24.1rem',
                display: 'flex',
                alignItems: 'center',
                height: '2rem',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '3.2rem',
                  height: '3.2rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.11)',
                  marginLeft: 'auto',
                }}
              ></div>
              <div
                style={{
                  width: '3.2rem',
                  height: '3.2rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.11)',
                }}
              ></div>
              <div
                style={{
                  width: '3.2rem',
                  height: '3.2rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.11)',
                  marginRight: '3rem',
                }}
              ></div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default MainNav;

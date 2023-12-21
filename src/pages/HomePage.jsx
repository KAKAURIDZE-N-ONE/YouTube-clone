import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import MainNav from '../features/MAINNAVBAR/MainNavBarComponents/MainNav';
import MiniSideNavBar from '../features/SIDENAVBAR/SideNavBarComponents/MiniSideNavBar';
import MainNavMenuSvg from '../features/MAINNAVBAR/MainNavBarSvgs/MainNavMenuSvg';
import MainNavYoutubeSvg from '../features/MAINNAVBAR/MainNavBarSvgs/MainNavYoutubeSvg';
import MainSideNavBar from '../features/SIDENAVBAR/SideNavBarComponents/MainSideNavBar';
import {
  mainSideBarIsActive,
  miniSideBarIsNotActive,
} from '../features/SIDENAVBAR/SideNavBarSlice';
import { useEffect } from 'react';

import Categories from '../features/CATEGORIESBAR/CategoriesComponents/Categories.jsx';

import LoadingPage from '../pages/LoadingPage.jsx';
import { useLocation } from 'react-router-dom';
import {
  updateShortsArr,
  updateVideosArr,
  updateVideosIsLoading,
} from '../features/VIDEOSMAIN/videosMainSlice.js';
import { videosArray } from '../videosArray.jsx';

function HomePage({ children }) {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const SideNavBar = useSelector(store => store.SideNavBar);
  const VideosMain = useSelector(store => store.VideosMain);
  const dispatch = useDispatch();

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    async function getVideosData() {
      dispatch(updateVideosIsLoading(true));
      await new Promise(resolve => setTimeout(resolve, 2000));

      dispatch(updateVideosArr(videosArray[0]));
      dispatch(updateShortsArr(videosArray[1]));
      dispatch(updateVideosIsLoading(false));
    }

    getVideosData();
  }, [dispatch]);

  useEffect(() => {
    if (VideosMain.videosIsLoading) window.scrollTo({ top: 0 }); // Scrolls to the top on component mount
  }, [VideosMain.videosIsLoading]);

  // Assuming you have a useEffect hook to add event listeners
  // Assuming sidebarRef is a reference to your sidebar element
  function handleFullScreenShadowBoxClick() {
    dispatch(miniSideBarIsNotActive());
  }

  const SIDENAVBARFULLSTYLE = {
    left:
      !SideNavBar.miniSideBarIsActive && MainNavBar.windowWidth <= 1300
        ? '-49.5rem'
        : '0',
    top: '0',
    paddingTop: '0.85rem',
    position: 'fixed',
    overflow: SideNavBar.isHoveringSideNavBar && 'hidden',
    zIndex: 100,
  };

  const MAINCONTAINERSTYLE = {
    zIndex: 100,
    paddingRight: '0',
  };

  useEffect(
    function () {
      if (MainNavBar.windowWidth > 1300 && SideNavBar.miniSideBarIsActive)
        dispatch(mainSideBarIsActive());
      if (MainNavBar.windowWidth > 1300 && SideNavBar.mainSideBarIsActive)
        dispatch(miniSideBarIsNotActive());
    },
    [
      MainNavBar.windowWidth,
      SideNavBar.miniSideBarIsActive,
      SideNavBar.mainSideBarIsActive,
      dispatch,
    ]
  );
  const FULL_SCREEN_SHADOW_BOX_STYLE = {
    zIndex: '99',
    position: 'fixed',
    width: MainNavBar.windowWidth,
    height: '100vh',
    backgroundColor: SideNavBar.miniSideBarIsActive ? '#00000070' : '#00000000',
    transition: 'background-color 0.4s',
    left: SideNavBar.miniSideBarIsActive ? '0' : '100%',
  };
  if (VideosMain.videosIsLoading && location.pathname === '/')
    return <LoadingPage />;
  else
    return (
      <div className={styles['main-container']} style={MAINCONTAINERSTYLE}>
        {/* ///Full screen shadow when mini side bar is miniSideBarIsActive */}
        <div
          style={FULL_SCREEN_SHADOW_BOX_STYLE}
          onClick={handleFullScreenShadowBoxClick}
        ></div>
        <MainNav />
        {location.pathname !== '/watch' && (
          <div
            className="flex-div-for-categories-and-main-nav-bar"
            style={{ display: 'flex' }}
          >
            {MainNavBar.windowWidth <= 1300 && (
              <>
                <div
                  className={styles['side-nav-bar-full']}
                  style={SIDENAVBARFULLSTYLE}
                >
                  <div style={{ display: 'inline-block' }}>
                    <div className={styles['cont-1']}>
                      <MainNavMenuSvg />
                      <MainNavYoutubeSvg />
                    </div>
                  </div>
                  <MainSideNavBar needNoPadding={true} />
                </div>
                {MainNavBar.windowWidth > 790 && (
                  <MiniSideNavBar needToBeonPlace={true} />
                )}
              </>
            )}
            {MainNavBar.windowWidth <= 1300}
            {MainNavBar.windowWidth > 1300 &&
              SideNavBar.mainSideBarIsActive && <MainSideNavBar />}
            {MainNavBar.windowWidth > 1300 &&
              !SideNavBar.mainSideBarIsActive && (
                <MiniSideNavBar needToBeonPlace={true} />
              )}
            {/* for left scrollbar background  */}
            {MainNavBar.windowWidth <= 1300 && (
              ////miniNavBar scroll right side
              <div
                style={{
                  height: '100vh',
                  backgroundColor: '#0f0f0f',
                  zIndex: '99',
                  width: '1.2rem',
                  position: 'fixed',
                  top: '0',
                  left:
                    !SideNavBar.miniSideBarIsActive &&
                    MainNavBar.windowWidth <= 1300
                      ? '-49.5rem'
                      : '22.5rem',
                  transition: 'left 0.35s',
                }}
              ></div>
              ////////////////////////////////
            )}
          </div>
        )}
        {currentPath === '/' && <Categories />}
        {children}
      </div>
    );
}

HomePage.propTypes = {
  children: PropTypes.node,
};

export default HomePage;

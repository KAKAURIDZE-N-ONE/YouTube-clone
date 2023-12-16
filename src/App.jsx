import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import MainNav from './features/MAINNAVBAR/MainNavBarComponents/MainNav';
import MiniSideNavBar from './features/SIDENAVBAR/SideNavBarComponents/MiniSideNavBar';
import MainNavMenuSvg from './features/MAINNAVBAR/MainNavBarSvgs/MainNavMenuSvg';
import MainNavYoutubeSvg from './features/MAINNAVBAR/MainNavBarSvgs/MainNavYoutubeSvg';
import MainSideNavBar from './features/SIDENAVBAR/SideNavBarComponents/MainSideNavBar';
import {
  mainSideBarIsActive,
  miniSideBarIsNotActive,
} from './features/SIDENAVBAR/SideNavBarSlice';
import { Suspense, lazy, useEffect } from 'react';
const Videos = lazy(() =>
  import('./features/VIDEOSMAIN/videosMainComponents/Videos.jsx')
);
import MainContentBox from './features/MainContentBox.jsx';
import PageNotFound from './PageNotFound.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingPage from './LoadingPage.jsx';
import Categories from './features/CATEGORIESBAR/CategoriesComponents/Categories.jsx';
import {
  updateShortsArr,
  updateVideosArr,
  updateVideosIsLoading,
} from './features/VIDEOSMAIN/videosMainSlice.js';

function App() {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const SideNavBar = useSelector(store => store.SideNavBar);
  const VideosMain = useSelector(store => store.VideosMain);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getVideosData() {
      dispatch(updateVideosIsLoading(true));
      await new Promise(resolve => setTimeout(resolve, 2000));
      const res = await fetch('http://localhost:3000/videos');
      const data = await res.json();
      dispatch(updateVideosArr(data[0]));
      dispatch(updateShortsArr(data[1]));
      dispatch(updateVideosIsLoading(false));
    }

    getVideosData();
  }, []);

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
  if (VideosMain.videosIsLoading) return <MainNav />;
  else
    return (
      <div className={styles['main-container']} style={MAINCONTAINERSTYLE}>
        {/* ///Full screen shadow when mini side bar is miniSideBarIsActive */}
        <div
          style={FULL_SCREEN_SHADOW_BOX_STYLE}
          onClick={handleFullScreenShadowBoxClick}
        ></div>
        ;
        <MainNav />
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
          {MainNavBar.windowWidth > 1300 && SideNavBar.mainSideBarIsActive && (
            <MainSideNavBar />
          )}
          {MainNavBar.windowWidth > 1300 && !SideNavBar.mainSideBarIsActive && (
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
        <Categories />
        <MainContentBox>
          <BrowserRouter>
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route path="/" element={<Videos />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </MainContentBox>
      </div>
    );
}

export default App;

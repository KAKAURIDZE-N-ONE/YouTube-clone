import { useSelector } from 'react-redux';

function MainContentBox({ children }) {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const SideNavBar = useSelector(store => store.SideNavBar);

  const MARGIN_LEFT_MAIN_CONTENT_BOX =
    SideNavBar.mainSideBarIsActive && MainNavBar.windowWidth > 1300
      ? 265
      : !SideNavBar.mainSideBarIsActive && MainNavBar.windowWidth > 1300
      ? 95
      : MainNavBar.windowWidth <= 1300 && MainNavBar.windowWidth > 790
      ? 95
      : 31;

  const MAINCCONTENTBOXSTYLE = {
    paddingTop: '12.4rem',
    marginLeft: MARGIN_LEFT_MAIN_CONTENT_BOX,
    marginRight: '2.3rem',
    backgroundColor: '#0f0f0f',
  };
  return <div style={MAINCCONTENTBOXSTYLE}>{children}</div>;
}

export default MainContentBox;

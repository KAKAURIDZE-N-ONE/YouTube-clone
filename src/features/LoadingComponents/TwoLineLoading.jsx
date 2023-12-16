import { useSelector } from 'react-redux';

function TwoLineLoading() {
  const SideNavBar = useSelector(store => store.SideNavBar);
  const MainNavBar = useSelector(store => store.MainNavBar);

  const MARGIN_LEFT_MAIN_CONTENT_BOX =
    SideNavBar.mainSideBarIsActive && MainNavBar.windowWidth > 1300
      ? 240
      : !SideNavBar.mainSideBarIsActive && MainNavBar.windowWidth > 1300
      ? 70
      : MainNavBar.windowWidth <= 1300 && MainNavBar.windowWidth > 790
      ? 70
      : 0;
  return (
    <div
      style={{
        width: 'auto',
        height: '6.5rem',
        marginTop: '4.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.11)',
        borderTop: '1px solid rgba(255,255,255,0.11)',
        marginLeft: `${MARGIN_LEFT_MAIN_CONTENT_BOX}px`,
      }}
    ></div>
  );
}

export default TwoLineLoading;

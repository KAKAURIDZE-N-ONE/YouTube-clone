import styles from './MainSideNavBar.module.css';
import PropTypes from 'prop-types';
import GoogleSignIn from '../../MAINNAVBAR/MainNavBarComponents/GoogleSignIn';
import { menuSvgsArray } from '../menuSvgsArray';
import { useDispatch, useSelector } from 'react-redux';
import {
  isHoveringSideNavBar,
  isNotHoveringSideNavBar,
  updateActiveMenuElement,
} from '../SideNavBarSlice';
import { NavLink } from 'react-router-dom';

const footerWords = [
  'About',
  'Press',
  'Copyright',
  'Contact us',
  'Creators',
  'Advertise',
  'Developers',
  'Terms',
  'Privacy',
  'Policy & Safety',
  'How YouTube works',
  'Test new features',
];

function SideNavBar({ needNoPadding }) {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const SideNavBar = useSelector(store => store.SideNavBar);
  const dispatch = useDispatch();

  function handleUpdateMenuActiveElement(el) {
    dispatch(updateActiveMenuElement(el));
  }

  function handleMouseEnter() {
    dispatch(isHoveringSideNavBar());
  }
  function handleMouseLeave() {
    dispatch(isNotHoveringSideNavBar());
  }

  const SIDENAVBARSTYLE = {
    height: `${SideNavBar.windowHeight - 55}px`,
    overflow: SideNavBar.isHoveringSideNavBar ? 'auto' : 'hidden',
    width: SideNavBar.isHoveringSideNavBar ? '23.3rem' : '22.5rem',
    position: MainNavBar.windowWidth <= 1300 && 'sticky',
    zIndex: '10',
  };

  return (
    <div
      className={styles['side-nav-bar']}
      style={SIDENAVBARSTYLE}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles['side-nav-bar-container']}
        style={needNoPadding ? { paddingTop: '1rem' } : {}}
      >
        {menuSvgsArray.map((el, i) => {
          const isActiveSvg = el.name === SideNavBar.activeMenuElement;

          if (i <= 2)
            return (
              <NavLink
                to={el.url}
                className={styles['side-nav-bar-block']}
                style={{
                  textDecoration: 'none',
                  backgroundColor: isActiveSvg && 'rgba(255,255,255,0.085)',
                }}
                key={el.name}
                onClick={() => handleUpdateMenuActiveElement(el.name)}
              >
                {isActiveSvg ? el.activeSvg : el.svg}
                <h1 style={{ fontWeight: isActiveSvg && '500' }}>{el.name}</h1>
              </NavLink>
            );
        })}
      </div>
      <div className={styles['side-nav-bar-container']}>
        {menuSvgsArray.map((el, i) => {
          const isActiveSvg = el.name === SideNavBar.activeMenuElement;

          if (i <= 4 && i >= 3)
            return (
              <NavLink
                to={el.url}
                className={styles['side-nav-bar-block']}
                style={{
                  textDecoration: 'none',
                  backgroundColor: isActiveSvg && 'rgba(255,255,255,0.085)',
                }}
                key={el.name}
                onClick={() => handleUpdateMenuActiveElement(el.name)}
              >
                {isActiveSvg ? el.activeSvg : el.svg}
                <h1 style={{ fontWeight: isActiveSvg && '500' }}>{el.name}</h1>
              </NavLink>
            );
        })}
      </div>
      <div className={styles['side-nav-bar-container']}>
        <h1 className={styles['sign-in-text']}>
          Sign in to like videos, comment, and subscribe.
        </h1>
        <div className={styles['sign-in-box']}>
          <GoogleSignIn />
        </div>
      </div>
      <div className={styles['side-nav-bar-container']}>
        <h1 className={styles['container-heading']}>Explore</h1>
        {menuSvgsArray.map((el, i) => {
          const isActiveSvg = el.name === SideNavBar.activeMenuElement;
          if (i <= 8 && i >= 5)
            return (
              <div
                className={styles['side-nav-bar-block']}
                key={el.name}
                onClick={() => handleUpdateMenuActiveElement(el.name)}
              >
                {isActiveSvg ? el.activeSvg : el.svg}
                <h1>{el.name}</h1>
              </div>
            );
        })}
      </div>
      <div className={styles['side-nav-bar-container']}>
        <div
          className={styles['side-nav-bar-block']}
          onClick={() => handleUpdateMenuActiveElement(menuSvgsArray[9].name)}
        >
          {menuSvgsArray[9].svg}
          <h1>{menuSvgsArray[9].name}</h1>
        </div>
      </div>
      <div className={styles['side-nav-bar-container']}>
        <h1 className={styles['container-heading']}>More from YouTube</h1>
        <div
          className={styles['side-nav-bar-block']}
          onClick={() => handleUpdateMenuActiveElement(menuSvgsArray[10].name)}
        >
          {menuSvgsArray[10].svg}
          <h1>{menuSvgsArray[10].name}</h1>
        </div>
      </div>
      <div className={styles['side-nav-bar-container']}>
        {menuSvgsArray.map((el, i) => {
          const isActiveSvg = el.name === SideNavBar.activeMenuElement;

          if (i <= 14 && i >= 11)
            return (
              <div
                className={styles['side-nav-bar-block']}
                key={el.name}
                onClick={() => handleUpdateMenuActiveElement(el.name)}
              >
                {isActiveSvg && i === 12 ? el.activeSvg : el.svg}
                <h1>{el.name}</h1>
              </div>
            );
        })}
      </div>
      <footer className={styles['footer-box']}>
        <div className={styles['footer-component']}>
          {footerWords.map(
            (el, i) =>
              i <= 6 && (
                <h4 className={styles['footer-links']} key={i}>
                  {el}
                </h4>
              )
          )}
        </div>
        <div className={styles['footer-component']}>
          {footerWords.map(
            (el, i) =>
              i > 6 && (
                <h4 className={styles['footer-links']} key={i}>
                  {el}
                </h4>
              )
          )}
        </div>
        <h3 className={styles['copyrighting']}>© 2023 Google LLC</h3>
      </footer>
    </div>
  );
}

SideNavBar.propTypes = {
  needNoPadding: PropTypes.bool,
};

export default SideNavBar;

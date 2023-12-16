import { useDispatch, useSelector } from 'react-redux';
import styles from './MiniSideNavBar.module.css';
import { menuSvgsArray } from '../menuSvgsArray';
import PropTypes from 'prop-types';
import { updateActiveMenuElement } from '../SideNavBarSlice';

function MiniSideNavBar({ needToBeonPlace }) {
  const SideNavBar = useSelector(store => store.SideNavBar);
  const dispatch = useDispatch();

  function handleUpdateMenuActiveElement(el) {
    dispatch(updateActiveMenuElement(el));
  }

  const MINISIDENAVBARBOXSTYLE = {
    minHeight: `${SideNavBar.windowHeight - 55}px`,
    paddingTop: needToBeonPlace && '0.5rem',
  };

  return (
    <div
      className={styles['mini-side-nav-bar-box']}
      style={MINISIDENAVBARBOXSTYLE}
    >
      {menuSvgsArray.map((el, i) => {
        const isActiveSvg = el.name === SideNavBar.activeMenuElement;

        if (i <= 4)
          return (
            <div
              className={styles['mini-side-nav-bar-block']}
              key={el.name}
              onClick={() => handleUpdateMenuActiveElement(el.name)}
            >
              {isActiveSvg ? el.activeSvg : el.svg}
              <h2>{el.name}</h2>
            </div>
          );
      })}
    </div>
  );
}

MiniSideNavBar.propTypes = {
  needToBeonPlace: PropTypes.bool,
};

export default MiniSideNavBar;

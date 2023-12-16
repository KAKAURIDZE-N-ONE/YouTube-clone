import { useDispatch, useSelector } from 'react-redux';
import styles from './Categories.module.css';
import { categoriesArr } from '../categoriesArr';
import { useEffect, useRef } from 'react';
import {
  horizontalScrollBarIsHovering,
  horizontalScrollBarIsNotHovering,
  updateActiveCategory,
  updateHorizontalScrollBarLeft,
  updateHorizontalScrollBarWidth,
  updatescrollBarElementWidth,
} from '../CategoriesSlice';

const SCROLL_LENGHT = 300;
//23.7

function Categories() {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const SideNavBar = useSelector(store => store.SideNavBar);
  const Categories = useSelector(store => store.Categories);
  const VideosMain = useSelector(store => store.VideosMain);
  const dispatch = useDispatch();
  const horizontalScrollBar = useRef(null);

  Categories.horizontalScrollBarIsHovering ||
  SideNavBar.isHoveringSideNavBar ||
  VideosMain.videosIsLoading
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');

  Categories.horizontalScrollBarIsHovering ||
  SideNavBar.isHoveringSideNavBar ||
  VideosMain.videosIsLoading
    ? (document.body.style.marginRight = '0.8rem')
    : (document.body.style.marginRight = '0rem');

  const horizontalScrollBarRight =
    Categories.horizontalScrollBarWidth -
    Categories.scrollBarElementWidth -
    Categories.horizontalScrollBarLeft;

  const updateScrollInfo = () => {
    if (horizontalScrollBar.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        horizontalScrollBar.current;
      dispatch(updateHorizontalScrollBarLeft(scrollLeft));
      dispatch(updateHorizontalScrollBarWidth(scrollWidth));
      dispatch(updatescrollBarElementWidth(clientWidth));
    }
  };

  const handleScroll = () => {
    updateScrollInfo();
  };

  function handleMouseEnter() {
    dispatch(horizontalScrollBarIsHovering());
  }

  function handleMouseLeave() {
    dispatch(horizontalScrollBarIsNotHovering());
  }

  function handleScrollLeft() {
    if (horizontalScrollBar.current) {
      horizontalScrollBar.current.scrollLeft -= SCROLL_LENGHT; // Adjust scroll amount as needed
    }
  }
  function handleScrollRight() {
    if (horizontalScrollBar.current) {
      horizontalScrollBar.current.scrollLeft += SCROLL_LENGHT; // Adjust scroll amount as needed
    }
  }

  function handleCategoryClick(el) {
    dispatch(updateActiveCategory(el));
  }

  useEffect(() => {
    // Add scroll event listener when the component mounts
    if (horizontalScrollBar.current) {
      horizontalScrollBar.current.addEventListener('scroll', handleScroll);
      // Update scroll information initially
      updateScrollInfo();
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (horizontalScrollBar.current) {
        horizontalScrollBar.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const LEFT_FOR_CATEGORIES_FIXEDBOX_STYLE =
    SideNavBar.mainSideBarIsActive && MainNavBar.windowWidth > 1300
      ? 264
      : !SideNavBar.mainSideBarIsActive && MainNavBar.windowWidth > 1300
      ? 96
      : MainNavBar.windowWidth <= 1300 && MainNavBar.windowWidth > 790
      ? 96
      : 22;

  const LENGHT_FOR_MINUS_WIDTH = LEFT_FOR_CATEGORIES_FIXEDBOX_STYLE + 39;

  const CATEGORIESFIXEDBOXSTYLE = {
    width: !SideNavBar.isHoveringSideNavBar
      ? `${(MainNavBar.windowWidth - LENGHT_FOR_MINUS_WIDTH) / 10}rem`
      : `${(MainNavBar.windowWidth - LENGHT_FOR_MINUS_WIDTH) / 10}rem`,
    left: LEFT_FOR_CATEGORIES_FIXEDBOX_STYLE,
  };

  const LEFT_FOR_SHADOW_LEFT_STYLE =
    SideNavBar.mainSideBarIsActive && MainNavBar.windowWidth > 1300
      ? '24.5rem'
      : !SideNavBar.mainSideBarIsActive && MainNavBar.windowWidth > 1300
      ? '8rem'
      : MainNavBar.windowWidth <= 1300 && MainNavBar.windowWidth > 790
      ? '8rem'
      : '0.8rem';
  const SHADOWLEFTSTYLE = {
    display: Categories.horizontalScrollBarLeft === 0 && 'none',
    left: LEFT_FOR_SHADOW_LEFT_STYLE,
  };

  const checkPadding =
    (Categories.horizontalScrollBarIsHovering &&
      SideNavBar.mainSideBarIsActive) ||
    SideNavBar.miniSideBarIsActive ||
    SideNavBar.isHoveringSideNavBar ||
    VideosMain.videosIsLoading ||
    Categories.horizontalScrollBarIsHovering;

  const SHADOWRIGHTSTYLE = {
    display: horizontalScrollBarRight <= 1 && 'none',
    right: checkPadding ? '2.1rem' : '1.3rem',
  };

  return (
    <div className={styles['div-for-padding']}>
      <div className={styles['relative-div-for-arrows']}>
        <div
          className={`${styles.shadow} ${styles.shadowLeft}`}
          style={SHADOWLEFTSTYLE}
        >
          <div className={`${styles.arrow}`} onClick={handleScrollLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path>
            </svg>
          </div>
        </div>

        <div
          className={styles['categories-fixed-box']}
          style={CATEGORIESFIXEDBOXSTYLE}
          ref={horizontalScrollBar}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {categoriesArr.map(el => {
            const CATEGORY_BLOCK_STYLE = {
              backgroundColor: Categories.activeCategory === el && '#f1f1f1',
            };
            const CATEGORY_TXT_STYLE = {
              color: Categories.activeCategory === el && '#0f0f0f',
            };

            return (
              <div
                className={styles['categories-block']}
                key={el}
                onClick={() => handleCategoryClick(el)}
                style={CATEGORY_BLOCK_STYLE}
              >
                <h1
                  className={styles['categories-txt']}
                  style={CATEGORY_TXT_STYLE}
                >
                  {el}
                </h1>
              </div>
            );
          })}
        </div>

        <div
          className={`${styles.shadow} ${styles.shadowRight}`}
          style={SHADOWRIGHTSTYLE}
        >
          <div className={`${styles.arrow}`} onClick={handleScrollRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              focusable="false"
            >
              <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

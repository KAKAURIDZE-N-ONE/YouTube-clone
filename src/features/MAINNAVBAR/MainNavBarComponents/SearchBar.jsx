import { useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';
import SearchLoopSvg from '../MainNavBarSvgs/SearchLoopSvg.jsx';
import SearchAbsoluteDiv from '../MainNavBarSvgs/SearchAbsoluteDiv.jsx';
import useClickAnimation from '../../../hooks/useClickAnimation.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateSearchText,
  deleteSearchText,
  needClickForSearch,
  dontNeedClickForSearch,
  searchInputIsFocused,
  searchInputIsNotFocused,
} from '../MainNavBarSlice.js';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const MainNavBar = useSelector(store => store.MainNavBar);
  const VideosMain = useSelector(store => store.VideosMain);
  const deleteColor = VideosMain.videosIsLoading;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isclickmoment, handleMouseDown, handleMouseUp } = useClickAnimation();
  const SearchInputEl = useRef(null);
  const SearchInputElBox = useRef(null);

  function handleChange(e) {
    dispatch(updateSearchText(e.target.value));
  }

  function handleFocusSearchInputEl() {
    SearchInputEl.current.focus();
  }

  function handleclickonX() {
    dispatch(deleteSearchText());
  }

  function handlefocus() {
    dispatch(searchInputIsFocused());
  }

  function handleBlur() {
    dispatch(searchInputIsNotFocused());
    if (MainNavBar.windowWidth <= 680)
      SearchInputElBox.current.classList.add('display-none');
  }

  useEffect(
    function () {
      if (MainNavBar.windowWidth <= 680) {
        dispatch(needClickForSearch());
        if (!MainNavBar.searchInputIsFocused)
          SearchInputElBox.current.classList.add('display-none');
      } else {
        SearchInputElBox.current.classList.remove('display-none');
        dispatch(dontNeedClickForSearch());
      }
    },
    [MainNavBar.windowWidth, MainNavBar.searchInputIsFocused, dispatch]
  );

  function handleSearchSubmit(e) {
    e.preventDefault();
    navigate('/sorry');
  }

  function handleClickToOpenSearch() {
    SearchInputElBox.current.classList.toggle('display-none');
    handleFocusSearchInputEl();
  }

  const StyleOfSearch = {
    borderBottomLeftRadius: MainNavBar.searchInputIsFocused && '0%',
    borderTopLeftRadius: MainNavBar.searchInputIsFocused && '0%',
  };

  const styleOfMic2 = {
    backgroundColor: deleteColor && '#0f0f0f',
    color: deleteColor && '#0f0f0f',
  };

  const StyleOfMic = {
    backgroundColor: isclickmoment && 'rgba(255, 255, 255, 0.285)',
    marginLeft:
      MainNavBar.searchInputIsFocused &&
      MainNavBar.windowWidth <= 680 &&
      '0.7rem',
  };

  return (
    <>
      <div
        className={styles['search-bar-box']}
        style={MainNavBar.searchInputIsFocused ? { paddingLeft: '-5rem' } : {}}
        ref={SearchInputElBox}
      >
        <div className={styles['focusing']}>
          {MainNavBar.searchInputIsFocused && <SearchAbsoluteDiv />}
          {MainNavBar.searchInputIsFocused && (
            <div
              className={styles['search-loop-focus']}
              onClick={handleclickonX}
            >
              <SearchLoopSvg size="2rem" />
            </div>
          )}
          <form onSubmit={handleSearchSubmit}>
            <input
              placeholder="Search"
              type="search"
              value={MainNavBar.searchText}
              className={styles['search-input']}
              onChange={handleChange}
              onFocus={handlefocus}
              onBlur={handleBlur}
              ref={SearchInputEl}
              style={{ ...StyleOfSearch }}
            />
          </form>
          {MainNavBar.searchText && (
            <div className={styles['ion-icon-box']} onClick={handleclickonX}>
              <ion-icon
                name="close-outline"
                className={styles['close-button-icon']}
              ></ion-icon>
            </div>
          )}
        </div>
      </div>

      <div
        className={styles['search-loop']}
        onClick={handleSearchSubmit}
        style={
          MainNavBar.needClickForSearch && MainNavBar.searchInputIsFocused
            ? {
                minWidth: '6.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.11)',
              }
            : {}
        }
      >
        <SearchLoopSvg handleClickToOpenSearch={handleClickToOpenSearch} />
      </div>

      <div
        className={styles['mic-box']}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{ ...StyleOfMic, ...styleOfMic2 }}
      >
        <ion-icon name="mic" style={styleOfMic2}></ion-icon>
      </div>
    </>
  );
}

export default SearchBar;

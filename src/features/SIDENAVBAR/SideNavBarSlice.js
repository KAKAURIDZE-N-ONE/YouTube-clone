import { createSlice } from '@reduxjs/toolkit';
import { menuSvgsArray } from './menuSvgsArray';

const initialState = {
  windowHeight: window.innerHeight,
  isHoveringSideNavBar: false,
  mainSideBarIsActive: true,
  miniSideBarIsActive: false,
  activeMenuElement: menuSvgsArray[0].name,
};

const SideNavBarSlice = createSlice({
  name: 'SideNavBar',
  initialState,
  reducers: {
    updateWindowHeight(state, action) {
      state.windowHeight = action.payload;
    },
    isHoveringSideNavBar(state) {
      state.isHoveringSideNavBar = true;
    },
    isNotHoveringSideNavBar(state) {
      state.isHoveringSideNavBar = false;
    },
    mainSideBarIsActive(state) {
      state.mainSideBarIsActive = true;
    },
    mainSideBarIsNotActive(state) {
      state.mainSideBarIsActive = false;
    },
    miniSideBarIsActive(state) {
      state.miniSideBarIsActive = true;
    },
    miniSideBarIsNotActive(state) {
      state.miniSideBarIsActive = false;
    },
    toggleMiniSideBar(state) {
      state.miniSideBarIsActive = !state.miniSideBarIsActive;
    },
    updateActiveMenuElement(state, action) {
      state.activeMenuElement = action.payload;
    },
  },
});

export const {
  updateWindowHeight,
  isHoveringSideNavBar,
  isNotHoveringSideNavBar,
  mainSideBarIsActive,
  mainSideBarIsNotActive,
  miniSideBarIsActive,
  miniSideBarIsNotActive,
  toggleMiniSideBar,
  updateActiveMenuElement,
} = SideNavBarSlice.actions;

export default SideNavBarSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
  needClickForSearch: false,
  searchInputIsFocused: false,
  windowWidth: window.innerWidth,
};

const MainNavBarSlice = createSlice({
  name: 'MainNavBar',
  initialState,
  reducers: {
    updateSearchText(state, action) {
      state.searchText = action.payload;
    },
    deleteSearchText(state) {
      state.searchText = '';
    },
    needClickForSearch(state) {
      state.needClickForSearch = true;
    },
    dontNeedClickForSearch(state) {
      state.needClickForSearch = false;
    },
    searchInputIsFocused(state) {
      state.searchInputIsFocused = true;
    },
    searchInputIsNotFocused(state) {
      state.searchInputIsFocused = false;
    },
    updateWindowWidth(state, action) {
      state.windowWidth = action.payload;
    },
  },
});

export const {
  updateSearchText,
  deleteSearchText,
  needClickForSearch,
  dontNeedClickForSearch,
  searchInputIsFocused,
  searchInputIsNotFocused,
  updateWindowWidth,
} = MainNavBarSlice.actions;

export default MainNavBarSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import MainNavBarReducer from './features/MAINNAVBAR/MainNavBarSlice';
import SideNavBarReducer from './features/SIDENAVBAR/SideNavBarSlice';
import CategoriesReducer from './features/CATEGORIESBAR/CategoriesSlice';
import VideosMainReducer from './features/VIDEOSMAIN/videosMainSlice';

const store = configureStore({
  reducer: {
    MainNavBar: MainNavBarReducer,
    SideNavBar: SideNavBarReducer,
    Categories: CategoriesReducer,
    VideosMain: VideosMainReducer,
  },
});

export default store;

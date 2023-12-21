import { configureStore } from '@reduxjs/toolkit';
import MainNavBarReducer from './features/MAINNAVBAR/MainNavBarSlice';
import SideNavBarReducer from './features/SIDENAVBAR/SideNavBarSlice';
import CategoriesReducer from './features/CATEGORIESBAR/CategoriesSlice';
import VideosMainReducer from './features/VIDEOSMAIN/videosMainSlice';
import WatchReducer from './features/WATCH/watchSlice';

const store = configureStore({
  reducer: {
    MainNavBar: MainNavBarReducer,
    SideNavBar: SideNavBarReducer,
    Categories: CategoriesReducer,
    VideosMain: VideosMainReducer,
    Watch: WatchReducer,
  },
});

export default store;

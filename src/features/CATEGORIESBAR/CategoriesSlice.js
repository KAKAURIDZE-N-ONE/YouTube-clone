import { createSlice } from '@reduxjs/toolkit';
import { categoriesArr } from './categoriesArr';

const initialState = {
  horizontalScrollBarLeft: 0,
  horizontalScrollBarWidth: 0,
  scrollBarElementWidth: 0,
  horizontalScrollBarIsHovering: false,
  activeCategory: categoriesArr[0],
};

const CategoriesSclice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    updateHorizontalScrollBarLeft(state, action) {
      state.horizontalScrollBarLeft = action.payload;
    },
    updateHorizontalScrollBarWidth(state, action) {
      state.horizontalScrollBarWidth = action.payload;
    },
    updatescrollBarElementWidth(state, action) {
      state.scrollBarElementWidth = action.payload;
    },
    horizontalScrollBarIsHovering(state) {
      state.horizontalScrollBarIsHovering = true;
    },
    horizontalScrollBarIsNotHovering(state) {
      state.horizontalScrollBarIsHovering = false;
    },
    updateActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const {
  horizontalScrollBarLeft,
  horizontalScrollBarWidth,
  scrollBarElementWidth,
  updateHorizontalScrollBarLeft,
  updateHorizontalScrollBarWidth,
  updatescrollBarElementWidth,
  horizontalScrollBarIsHovering,
  horizontalScrollBarIsNotHovering,
  updateActiveCategory,
} = CategoriesSclice.actions;

export default CategoriesSclice.reducer;

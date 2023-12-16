import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videoAndPhotoContainerWidth: 0,
  videosIsLoading: false,
  videosArr: [],
  shortsArr: [],
};

const VideosMainSlice = createSlice({
  name: 'VideosMain',
  initialState,
  reducers: {
    updateVideoAndPhotoContainerWidth(state, action) {
      state.videoAndPhotoContainerWidth = action.payload;
    },
    updateVideosIsLoading(state, action) {
      state.videosIsLoading = action.payload;
    },
    updateVideosArr(state, action) {
      state.videosArr = action.payload;
    },
    updateShortsArr(state, action) {
      state.shortsArr = action.payload;
    },
  },
});

export const {
  updateVideoAndPhotoContainerWidth,
  updateVideosIsLoading,
  updateVideosArr,
  updateShortsArr,
} = VideosMainSlice.actions;

export default VideosMainSlice.reducer;

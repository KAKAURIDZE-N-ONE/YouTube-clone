import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videoAndPhotoContainerWidth: 0,
  videoAndPhotoContainerHeight: 0,
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
    updateVideoAndPhotoContainerHeight(state, action) {
      state.videoAndPhotoContainerHeight = action.payload;
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
    updateVideosVideos(state, action) {
      state.videosVideos = action.payload;
    },
  },
});

export const {
  updateVideoAndPhotoContainerWidth,
  updateVideoAndPhotoContainerHeight,
  updateVideosIsLoading,
  updateVideosArr,
  updateShortsArr,
  updateVideosVideos,
} = VideosMainSlice.actions;

export default VideosMainSlice.reducer;

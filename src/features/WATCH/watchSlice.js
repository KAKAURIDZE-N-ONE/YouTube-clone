import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videoBoxWidth: 0,
  videoIsLoaded: false,
};

const WatchSlice = createSlice({
  name: 'Watch',
  initialState,
  reducers: {
    updateVideoBoxWidth(state, action) {
      state.videoBoxWidth = action.payload;
    },
    videoIsLoaded(state) {
      state.videoIsLoaded = true;
    },
  },
});

export const { updateVideoBoxWidth, videoIsLoaded } = WatchSlice.actions;

export default WatchSlice.reducer;

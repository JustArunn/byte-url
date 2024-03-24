import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "urls",
  initialState: {
    urls: [],
  },
  reducers: {
    setUrls(state, action) {
      state.urls = action.payload;
    },
    addUrl(state, action) {
      state.urls.push(action.payload);
    },
    removeUrl(state, action) {
      state.urls = state.urls.filter((url) => url._id !== action.payload);
    },
  },
});

export const { setUrls, addUrl, removeUrl } = urlSlice.actions;
export default urlSlice.reducer;

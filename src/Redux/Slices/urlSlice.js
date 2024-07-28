import { createSlice } from "@reduxjs/toolkit";

const urlSlice = createSlice({
  name: "urls",
  initialState: {
    urls: [],
    isUrlLoading:false,
  },
  reducers: {
    setUrls(state, action) {
      state.urls = action.payload;
    },
    addUrl(state, action) {
      if(state.urls.length < 1){
        state.urls.push({...action.payload, index:state.urls.length+1});
      }else{
        state.urls.push({...action.payload, index:state.urls[state.urls.length-1].index+1});
      }
    },
    removeUrl(state, action) {
      state.urls = state.urls.filter((url) => url._id !== action.payload);
    },
    setUrlLoading(state, action){
      state.isUrlLoading = action.payload
    }
  },
});

export const { setUrls, addUrl, removeUrl,setUrlLoading } = urlSlice.actions;
export default urlSlice.reducer;

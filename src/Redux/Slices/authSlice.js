import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("byte-url-auth-token")
      ? JSON.parse(localStorage.getItem("byte-url-auth-token"))
      : "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("byte-url-auth-token", JSON.stringify(action.payload));
    },
    removeToken(state) {
      state.token = "";
      localStorage.removeItem("byte-url-auth-token");
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;

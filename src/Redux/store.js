import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authSlice";
import userReducer from "./Slices/userSlice";
import urlsReducer from "./Slices/urlSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    urls: urlsReducer,
  },
});

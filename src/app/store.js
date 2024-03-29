import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./reducers/urlReducer";

const store = configureStore({
  reducer: {
    urlReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import mgtSlice from "./Slice";

export const store = configureStore({
  reducer: {
    mgt: mgtSlice,
  },
});

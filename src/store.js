import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from "./features/storeSlice";

export default configureStore({
  reducer: { store: StoreReducer },
});

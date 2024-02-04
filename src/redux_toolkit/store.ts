import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import articlesReducer from "./features/articlesSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    articles: articlesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
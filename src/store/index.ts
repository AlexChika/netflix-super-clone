import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
  reducer: {
    counter: () => {},
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;

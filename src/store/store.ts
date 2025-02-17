import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import newsReducer from './News/newsSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

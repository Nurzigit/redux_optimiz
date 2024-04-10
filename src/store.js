import { configureStore } from '@reduxjs/toolkit';
import announcementsReducer from './redux/announcementsSlice';

export const store = configureStore({
  reducer: {
    announcements: announcementsReducer,
  },
});
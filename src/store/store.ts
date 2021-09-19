import { configureStore } from '@reduxjs/toolkit';
import courseSlice from 'store/features/courseSlice';
import projectSlice from 'store/features/projectSlice';

const store = configureStore({
  reducer: {
    projects: projectSlice,
    courses: courseSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

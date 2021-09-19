import { configureStore } from '@reduxjs/toolkit';
import courseSlice from './features/courseSlice';
import projectSlice from './features/projectSlice';

const store = configureStore({
  reducer: {
    projects: projectSlice,
    courses: courseSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

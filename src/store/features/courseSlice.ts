import { createSlice } from '@reduxjs/toolkit';
import { ICourses } from '../../interfaces/ICourses';
import courses from '../../server/courses';
import { RootState } from '../store';

interface IStateCourses {
  courses: ICourses[];
}

const initialState: IStateCourses = {
  courses: courses,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
});

export const selectCourses = (state: RootState) => state.courses.courses;
export default courseSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProjects } from '../../interfaces/IProjects';
import projects from '../../server/projects';
import { RootState } from '../store';

interface IStateProjects {
  projects: IProjects[];
}

const initialState: IStateProjects = {
  projects: projects,
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFocus: (state, action: PayloadAction<number>) => {
      state.projects.forEach((project: IProjects) => {
        if (action.payload !== project.id) project.focus = false;
        if (action.payload === project.id) {
          if (project.focus === true) {
            project.focus = false;
          } else {
            project.focus = true;
          }
        }
      });
    },
  },
});

export const { setFocus } = projectSlice.actions;
export const selectProjects = (state: RootState) => state.projects.projects;
export default projectSlice.reducer;

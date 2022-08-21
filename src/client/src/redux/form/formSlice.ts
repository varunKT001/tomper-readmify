import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DEFAULT_ABOUT_ME,
  DEFAULT_ACHIEVEMENTS,
  DEFAULT_FIELDS_OF_WORK,
  DEFAULT_FULL_NAME,
  DEFAULT_GITHUB_USERNAME,
  DEFAULT_SKILLS,
  DEFAULT_STATS,
} from '../../utils/contants';
import { set } from '../../utils/utility';
import {
  FormState,
  ChangePayload,
  CheckboxPayload,
  ThemePayload,
} from './types';

const initialState: FormState = {
  githubUsername: DEFAULT_GITHUB_USERNAME,
  fullName: DEFAULT_FULL_NAME,
  fieldsOfWork: DEFAULT_FIELDS_OF_WORK,
  aboutMe: DEFAULT_ABOUT_ME,
  achievements: DEFAULT_ACHIEVEMENTS,
  skills: DEFAULT_SKILLS,
  stats: DEFAULT_STATS,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    change: (state: FormState, action: PayloadAction<ChangePayload>) => {
      const { name, value } = action.payload;
      set(state, name.split('.'), value);
    },
    checkbox: (state: FormState, action: PayloadAction<CheckboxPayload>) => {
      const { name, value } = action.payload;
      set(state, name.split('.'), value);
    },
    theme: (state: FormState, action: PayloadAction<ThemePayload>) => {
      const { name, value } = action.payload;
      set(state, name.split('.'), value);
    },
    reset: (state: FormState) => {
      return { ...initialState };
    },
  },
});

export const { change, checkbox, theme, reset } = formSlice.actions;
export const formReducer = formSlice.reducer;

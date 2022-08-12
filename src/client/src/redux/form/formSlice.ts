import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DEFAULT_ABOUT_ME,
  DEFAULT_ACHIEVEMENTS,
  DEFAULT_FIELDS_OF_WORK,
  DEFAULT_FULL_NAME,
  DEFAULT_GITHUB_USERNAME,
} from '../../utils/contants';
import { set } from '../../utils/utility';
import { FormState, ChangePayload } from './types';

const initialState: FormState = {
  isGithubUsernameModalOpen: false,
  githubUsername: DEFAULT_GITHUB_USERNAME,
  fullName: DEFAULT_FULL_NAME,
  fieldsOfWork: DEFAULT_FIELDS_OF_WORK,
  aboutMe: DEFAULT_ABOUT_ME,
  achievements: DEFAULT_ACHIEVEMENTS,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    change: (state: FormState, action: PayloadAction<ChangePayload>) => {
      const { name, value } = action.payload;
      set(state, name.split('.'), value);
    },
    reset: (state: FormState) => {
      return { ...initialState };
    },
    openGithubUsernameModal: (state: any) => {
      state.isGithubUsernameModalOpen = true;
    },
    closeGithubUsernameModal: (state: any) => {
      state.isGithubUsernameModalOpen = false;
    },
  },
});

export const {
  change,
  reset,
  openGithubUsernameModal,
  closeGithubUsernameModal,
} = formSlice.actions;
export const formReducer = formSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_GITHUB_USERNAME } from '../../utils/contants';
import { FormState, ChangePayload } from './types';

const initialState = {
  githubUsername: DEFAULT_GITHUB_USERNAME,
  isGithubUsernameModalOpen: false,
} as FormState;

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    change: (state: any, action: PayloadAction<ChangePayload>) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    openGithubUsernameModal: (state: any) => {
      state.isGithubUsernameModalOpen = true;
    },
    closeGithubUsernameModal: (state: any) => {
      state.isGithubUsernameModalOpen = false;
    },
  },
});

export const { change, openGithubUsernameModal, closeGithubUsernameModal } =
  formSlice.actions;
export const formReducer = formSlice.reducer;

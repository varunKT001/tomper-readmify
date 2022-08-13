import { createSlice } from '@reduxjs/toolkit';
import { ExtraState } from './types';

const initialState: ExtraState = {
  isGithubUsernameModalOpen: false,
};

const extraSlice = createSlice({
  name: 'extra',
  initialState,
  reducers: {
    openGithubUsernameModal: (state: ExtraState) => {
      state.isGithubUsernameModalOpen = true;
    },
    closeGithubUsernameModal: (state: ExtraState) => {
      state.isGithubUsernameModalOpen = false;
    },
  },
});

export const { openGithubUsernameModal, closeGithubUsernameModal } =
  extraSlice.actions;
export const extraReducer = extraSlice.reducer;

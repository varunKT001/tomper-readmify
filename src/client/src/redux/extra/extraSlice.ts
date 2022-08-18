import { createSlice } from '@reduxjs/toolkit';
import { ExtraState } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FailedResponse } from '../template';
import { customFetch } from '../../config/axios';
import { AxiosError } from 'axios';

const initialState: ExtraState = {
  skillBadges: [],
  isGithubUsernameModalOpen: false,
};

export const fetchSkillBadges = createAsyncThunk<
  ExtraState,
  string,
  { rejectValue: FailedResponse }
>('extra/fetchSkillBadges', async (_, thunkAPI) => {
  try {
    const res = await customFetch(`/skill-badges`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<FailedResponse>;
    return thunkAPI.rejectWithValue(err.response?.data as FailedResponse);
  }
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchSkillBadges.fulfilled, (state, action) => {
      state.skillBadges = Array.from(action.payload);
    });
  },
});

export const { openGithubUsernameModal, closeGithubUsernameModal } =
  extraSlice.actions;
export const extraReducer = extraSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtraState, SkillBadge } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ChangePayload, FailedResponse } from './types';
import { customFetch } from '../../config/axios';
import { AxiosError } from 'axios';

const initialState: ExtraState = {
  skillBadges: [],
  isGithubUsernameModalOpen: false,
};

export const fetchSkillBadges = createAsyncThunk<
  SkillBadge[],
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
    change: (state: ExtraState, action: PayloadAction<ChangePayload>) => {
      const { name, value } = action.payload;
      (state as Record<typeof name, typeof value>)[name] = value;
    },
    openGithubUsernameModal: (state: ExtraState) => {
      state.isGithubUsernameModalOpen = true;
    },
    closeGithubUsernameModal: (state: ExtraState) => {
      state.isGithubUsernameModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSkillBadges.fulfilled, (state, action) => {
      state.skillBadges = action.payload;
    });
  },
});

export const { openGithubUsernameModal, closeGithubUsernameModal } =
  extraSlice.actions;
export const extraReducer = extraSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtraState, SkillBadge, SocialIcons, ThemesInfo } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ChangePayload, FailedResponse } from './types';
import { customFetch } from '../../config/axios';
import { AxiosError } from 'axios';

const initialState: ExtraState = {
  skillBadges: [],
  socialIcons: { base: '', icons: {} },
  streaks: { base: '', themes: [] },
  contributions: { base: '', themes: [] },
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

export const fetchStreaksInfo = createAsyncThunk<
  ThemesInfo,
  string,
  { rejectValue: FailedResponse }
>('extra/fetchStreaksInfo', async (_, thunkAPI) => {
  try {
    const res = await customFetch(`/streaks-info`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<FailedResponse>;
    return thunkAPI.rejectWithValue(err.response?.data as FailedResponse);
  }
});

export const fetchContributionInfo = createAsyncThunk<
  ThemesInfo,
  string,
  { rejectValue: FailedResponse }
>('extra/fetchContributionInfo', async (_, thunkAPI) => {
  try {
    const res = await customFetch(`/contribution-info`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<FailedResponse>;
    return thunkAPI.rejectWithValue(err.response?.data as FailedResponse);
  }
});

export const fetchSocialIcons = createAsyncThunk<
  SocialIcons,
  string,
  { rejectValue: FailedResponse }
>('extra/fetchSocialIcons', async (_, thunkAPI) => {
  try {
    const res = await customFetch(`/social-icons`);
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
    builder.addCase(fetchStreaksInfo.fulfilled, (state, action) => {
      state.streaks = action.payload;
    });
    builder.addCase(fetchContributionInfo.fulfilled, (state, action) => {
      state.contributions = action.payload;
    });
    builder.addCase(fetchSocialIcons.fulfilled, (state, action) => {
      state.socialIcons = action.payload;
    });
  },
});

export const { openGithubUsernameModal, closeGithubUsernameModal } =
  extraSlice.actions;
export const extraReducer = extraSlice.reducer;

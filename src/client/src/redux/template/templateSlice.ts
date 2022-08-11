import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TemplateState, FailedResponse, ChangePayload } from './types';
import { customFetch } from '../../config/axios';
import { Toast } from '../../config/toast';
import { AxiosError } from 'axios';

const initialState = {
  templateName: 'simple',
  templateString: '',
  acceptedFields: [],
} as TemplateState;

export const fetchTemplateInfo = createAsyncThunk<
  TemplateState,
  string,
  { rejectValue: FailedResponse }
>('template/fetchTemplateInfo', async (name, thunkAPI) => {
  try {
    const res = await customFetch(`/template?name=${name}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<FailedResponse>;
    return thunkAPI.rejectWithValue(err.response?.data as FailedResponse);
  }
});

const templateSlice = createSlice({
  name: 'templateSlice',
  initialState,
  reducers: {
    change: (state: TemplateState, action: PayloadAction<ChangePayload>) => {
      const { name, value } = action.payload;
      state[name] = value as string & string[];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTemplateInfo.fulfilled, (state, action) => {
      state.templateString = action.payload.templateString;
      state.acceptedFields = action.payload.acceptedFields;
    });
    builder.addCase(fetchTemplateInfo.rejected, (state, action) => {
      Toast.error(action.payload?.message as string);
    });
  },
});

export const { change } = templateSlice.actions;
export const templateReducer = templateSlice.reducer;

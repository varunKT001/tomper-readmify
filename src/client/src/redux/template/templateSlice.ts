import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TemplateState, FailedResponse } from './types';
import { customFetch } from '../../config/axios';
import { Toast } from '../../config/toast';

const initialState: TemplateState = {
  templateName: 'simple',
  templateString: '',
  acceptedFields: [],
};

export const fetchTemplateInfo = createAsyncThunk<
  TemplateState,
  string,
  { rejectValue: FailedResponse }
>('template/fetchTemplateInfo', async (name, thunkAPI) => {
  try {
    const res = await customFetch(`/template?name=${name}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: 'Something went wrong' });
  }
});

const templateSlice = createSlice({
  name: 'templateSlice',
  initialState,
  reducers: {},
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

export const templateReducer = templateSlice.reducer;

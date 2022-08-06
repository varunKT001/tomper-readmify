import { createSlice } from '@reduxjs/toolkit';
import { TemplateState, ChangePayload } from './types';

const initialState: TemplateState = {
  templateName: 'modern',
};

const templateSlice = createSlice({
  name: 'templateSlice',
  initialState,
  reducers: {
    change: (
      state: TemplateState,
      { payload }: { payload: ChangePayload }
    ): void => {
      const { name, value } = payload;
      state[name] = value;
    },
  },
});

export const { change } = templateSlice.actions;
export const templateReducer = templateSlice.reducer;

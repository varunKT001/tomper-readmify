import { configureStore } from '@reduxjs/toolkit';
import { templateReducer } from '../template';
import { StoreState } from './types';

export const store = configureStore<StoreState>({
  reducer: {
    template: templateReducer,
  },
});

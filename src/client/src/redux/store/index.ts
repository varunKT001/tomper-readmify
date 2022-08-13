import { configureStore } from '@reduxjs/toolkit';
import { templateReducer } from '../template';
import { useDispatch } from 'react-redux';
import { formReducer } from '../form';
import { extraReducer } from '../extra';

export const store = configureStore({
  reducer: {
    template: templateReducer,
    form: formReducer,
    extra: extraReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

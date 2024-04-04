// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../tasks/tasksSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

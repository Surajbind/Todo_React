import { createSlice } from '@reduxjs/toolkit';

// Initial state fetched from localStorage or an empty array
const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

// Create a slice for tasks management
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
       // Add a task
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    removeTask: (state, action) => {
       // Remove a task
      const newState = state.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(newState));
      return newState;
    },
    toggleTaskCompletion: (state, action) => {
      // Toggle completion status of a task
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
  },
});

export const { addTask, removeTask, toggleTaskCompletion } = tasksSlice.actions;

export default tasksSlice.reducer;

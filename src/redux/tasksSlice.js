import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitState,
  reducers: {
    addTask: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      return state.filter(task => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      return state.map(task => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

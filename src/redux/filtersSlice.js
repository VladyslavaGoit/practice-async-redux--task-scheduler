import { createSlice } from '@reduxjs/toolkit';
import { filterStatus } from './constants';

const filtersInitState = { status: filterStatus.all };

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitState,
  reducers: {
    setStatusFilter(state, action) {
      return { ...state, status: action.payload };
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

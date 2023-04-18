import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onChangeInput(state, action) {
      return (state = action.payload);
    },
  },
});

export const { onChangeInput } = filterSlice.actions;

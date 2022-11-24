import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appLoading: false,
};

const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.appLoading = action.payload;
    },
  },
});

export const { setLoading } = GlobalSlice.actions;
export default GlobalSlice;

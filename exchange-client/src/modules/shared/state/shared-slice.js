import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appLoading: false,
};

const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    showLoader(state) {
      state.appLoading = true;
    },
    hideLoader(state) {
      state.appLoading = false;
    },
  },
});

export const { showLoader, hideLoader } = GlobalSlice.actions;
export default GlobalSlice;

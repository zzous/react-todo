import { configureStore } from '@reduxjs/toolkit';

// slice
import modal from './slice/modal';

// Midleware
// import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    modalSlice: modal
  }
});

export default store;

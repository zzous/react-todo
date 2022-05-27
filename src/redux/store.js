import { configureStore } from '@reduxjs/toolkit';

// slice
import modal from './slice/modal';
import member from './slice/member';

// Midleware
// import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    modalSlice: modal,
    userSlice: member
  }
});

export default store;

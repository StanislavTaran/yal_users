import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import UsersReducer from './users/users.reducer';

const middlewares = [ReduxThunk];

const store = configureStore({
  reducer: UsersReducer,
  middleware: middlewares,
  devTools: true,
});

export default store;

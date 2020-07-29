import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import UsersReducer from './users/users.reducer';
import AppReducer from './app/app.reducer';

const rootReducer = combineReducers({ app: AppReducer, users: UsersReducer });

const middlewares = [ReduxThunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: true,
});

export default store;

import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as usersActions from '../users/users.actions';

const isLoading = createReducer(false, {
  [usersActions.getUsersRequest]: () => true,
  [usersActions.getUsersSucces]: () => false,
  [usersActions.getUsersError]: () => false,
});

export default combineReducers({ isLoading });

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getUsersSucces, getUsersError } from './users.actions';
import countBDInMonth from '../../utils/countBDInMonth';

const monthsInitialState = {
  january: [],
  february: [],
  march: [],
  april: [],
  may: [],
  june: [],
  july: [],
  august: [],
  september: [],
  october: [],
  november: [],
  december: [],
};

const monthsWithUsers = createReducer(monthsInitialState, {
  [getUsersSucces]: (state, action) => {
    const countedMonths = countBDInMonth(monthsInitialState, action.payload);
    return countedMonths;
  },
});

const errors = createReducer(
  {},
  {
    [getUsersError]: (state, action) => action.payload,
  },
);

const users = combineReducers({ errors, monthsWithUsers });

export default users;

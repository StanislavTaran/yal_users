import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getUsersSucces, getUsersError } from './users.actions';
import countBDInMonth from '../../utils/countBDInMonth';

const usersList = createReducer([], {
  [getUsersSucces]: (state, action) => [...action.payload],
});

const errors = createReducer(
  {},
  {
    [getUsersError]: (state, action) => action.payload,
  },
);

const monthsInitialState = [
  ['Январь'],
  ['Февраль'],
  ['Март'],
  ['Апрель'],
  ['Май'],
  ['Июнь'],
  ['Июль'],
  ['Август'],
  ['Сентябрь'],
  ['Октябрь'],
  ['Ноябрь'],
  ['Декабрь'],
];

const monthsWithUsers = createReducer([], {
  [getUsersSucces]: (state, action) => {
    const countedMonths = countBDInMonth(monthsInitialState, action.payload);
    return countedMonths;
  },
});

const users = combineReducers({ usersList, errors, monthsWithUsers });

export default users;

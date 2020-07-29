import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getUsersSucces, getUsersError, getUsersRequest } from './users.actions';
import countBDInMonth from '../../utils/countBDInMonth';

const errors = createReducer(null, {
  [getUsersError]: (state, action) => action.payload,
  [getUsersSucces]: () => null,
  [getUsersRequest]: () => null,
});

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

const users = combineReducers({ monthsWithUsers, errors });

export default users;

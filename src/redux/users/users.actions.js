import { createAction } from '@reduxjs/toolkit';

export const getUsersRequest = createAction('users/GET_USERS_REQUEST');
export const getUsersSucces = createAction('users/GET_USERS_SUCCES');
export const getUsersError = createAction('users/GET_USERS_ERROR');

/* eslint-disable import/prefer-default-export */
import { getUsersRequest, getUsersSucces, getUsersError } from './users.actions';
import USERS_API from '../../api/users-api';

export const getUsersInfo = () => dispatch => {
  dispatch(getUsersRequest());

  USERS_API.fetchUsers()
    .then(res => {
      dispatch(getUsersSucces(res.data));
    })
    .catch(err => {
      dispatch(getUsersError(err));
    });
};

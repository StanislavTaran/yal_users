import React from 'react';
import propTypes from 'prop-types';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

const UserList = ({ users }) => {
  return (
    <ol className={styles.list}>
      {users.map(user => (
        <UserItem key={user.id} name={user.firstName} surname={user.lastName} />
      ))}
    </ol>
  );
};

UserList.propTypes = {
  users: propTypes.arrayOf(
    propTypes.shape({
      firstName: propTypes.string.isRequired,
      lastName: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default UserList;

/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import propTypes from 'prop-types';
import styles from './UserItem.module.css';

const UserItem = ({ name, surname }) => {
  return (
    <li className={styles.item}>
      <span className={styles.nameField}>
        {name} {surname}
      </span>
    </li>
  );
};

UserItem.propTypes = {
  name: propTypes.string.isRequired,
  surname: propTypes.string.isRequired,
};

export default UserItem;

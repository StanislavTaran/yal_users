import React from 'react';
import propTypes from 'prop-types';
import styles from './ErrorNotification.module.css';

const ErrorNotification = ({ message }) => (
  <div className={styles.errorBlock}>
    <p className={styles.errorText}>{message}</p>
  </div>
);

ErrorNotification.propTypes = {
  message: propTypes.string.isRequired,
};

export default ErrorNotification;

import React from 'react';
import propTypes from 'prop-types';
import MonthItem from '../MonthItem/MonthItem';
import styles from './MonthList.module.css';

const MonthsList = ({ months }) => {
  return (
    <ul className={styles.monthsList}>
      {Object.keys(months).map(monthName => (
        <MonthItem key={monthName} monthName={monthName} usersList={months[monthName]} />
      ))}
    </ul>
  );
};

MonthsList.propTypes = {
  months: propTypes.objectOf(propTypes.arrayOf(propTypes.object)).isRequired,
};

export default MonthsList;

import React from 'react';
import propTypes from 'prop-types';
import MonthItem from '../MonthItem/MonthItem';
import styles from './MonthList.module.css';

const MonthsList = ({ months }) => {
  return (
    <ul className={styles.monthsList}>
      {months.map(month => (
        <MonthItem key={month[0]} month={month} numberUsers={month.length - 1} />
      ))}
    </ul>
  );
};

MonthsList.propTypes = {
  months: propTypes.arrayOf(propTypes.array).isRequired,
};

export default MonthsList;

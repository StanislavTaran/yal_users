import React from 'react';
import propTypes from 'prop-types';
import MonthItem from '../MonthItem/MonthItem';
import styles from './MonthList.module.css';

const MonthsList = ({ months }) => {
  return (
    <ul className={styles.monthsList}>
      {Object.values(months).map((month, idx) => (
        <MonthItem
          key={Object.keys(months)[idx]}
          monthName={Object.keys(months)[idx]}
          usersList={Object.values(months)[idx]}
          length={month.length}
        />
      ))}
    </ul>
  );
};

MonthsList.propTypes = {
  months: propTypes.objectOf(propTypes.arrayOf(propTypes.object)).isRequired,
};

export default MonthsList;

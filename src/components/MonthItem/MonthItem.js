import React from 'react';
import propTypes from 'prop-types';
import styles from './MonthItem.module.css';

const MonthItem = ({ month, numberUsers }) => {
  let stylesItem;
  switch (true) {
    case numberUsers < 7 && numberUsers > 2:
      stylesItem = styles.itemSecondLevel;
      break;

    case numberUsers < 11 && numberUsers > 6:
      stylesItem = styles.itemThirdLevel;
      break;

    case numberUsers >= 11:
      stylesItem = styles.itemFourthLevel;
      break;

    default:
      stylesItem = styles.itemFirstLevel;
  }

  return <li className={stylesItem}>{month[0]}</li>;
};

MonthItem.propTypes = {
  month: propTypes.arrayOf(propTypes.any).isRequired,
  numberUsers: propTypes.number.isRequired,
};

export default MonthItem;

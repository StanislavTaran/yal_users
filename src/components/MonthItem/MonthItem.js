import React from 'react';
import propTypes from 'prop-types';
import styles from './MonthItem.module.css';

const MonthItem = ({ monthName, usersList }) => {
  const numberUsers = usersList.length;
  // usersList.push({ a: 'hello' });
  // console.log(usersList);
  // console.log('numberUsers' + numberUsers);

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

  return <li className={stylesItem}>{monthName}</li>;
};

MonthItem.propTypes = {
  usersList: propTypes.arrayOf(propTypes.shape({})).isRequired,
  monthName: propTypes.string.isRequired,
};

export default MonthItem;

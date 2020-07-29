import React, { useState } from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import fadeTransition from '../../styles/transitions/fade.module.css';
import UserList from '../UserList/UserList';
import styles from './MonthItem.module.css';

const MonthItem = ({ month, numberUsers }) => {
  const [isShowUsers, setUsersShowFlag] = useState(false);

  const users = month.slice(1);

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
  return (
    <li
      className={stylesItem}
      onMouseEnter={() => setUsersShowFlag(true)}
      onMouseLeave={() => setUsersShowFlag(false)}
    >
      {month[0]}
      <CSSTransition in={isShowUsers} timeout={200} classNames={fadeTransition} unmountOnExit>
        <UserList users={users} />
      </CSSTransition>
    </li>
  );
};

MonthItem.propTypes = {
  month: propTypes.arrayOf(propTypes.any).isRequired,
  numberUsers: propTypes.number.isRequired,
};

export default MonthItem;

/* eslint-disable max-len */
import React from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import fadeTransition from '../../styles/transitions/fade.module.css';
import UserList from '../UserList/UserList';
import styles from './MonthItem.module.css';


class MonthItem extends React.Component {
  state = {
    isShowUsers: false,
  };


  showUsers = () => {
    this.setState({
      isShowUsers: true,
    });
  };

  hideUsers = () => {
    this.setState({
      isShowUsers: false,
    });
  };

  render() {
    const { numberUsers, month } = this.props;
    const { isShowUsers } = this.state;
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
      <li className={stylesItem} onMouseEnter={() => this.showUsers()} onMouseLeave={() => this.hideUsers()}>
        {month[0]}
        <CSSTransition in={isShowUsers} timeout={200} classNames={fadeTransition} unmountOnExit>
          <UserList users={users} />
        </CSSTransition>
      </li>
    );
  }
}


MonthItem.propTypes = {
  usersList: propTypes.arrayOf(propTypes.shape({})).isRequired,
  monthName: propTypes.string.isRequired,
};

export default MonthItem;

/* eslint-disable react/destructuring-assignment */
import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import MonthsList from '../components/MonthList/MonthsList.container';
import { getUsersInfo } from '../redux/users/users.operations';

class UsersInfoPage extends React.Component {
  componentDidMount() {
    this.props.getUsersInfo();
  }

  render() {
    return (
      <section>
        <MonthsList />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { getUsersInfo: () => dispatch(getUsersInfo()) };
};

UsersInfoPage.propTypes = {
  getUsersInfo: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(UsersInfoPage);

/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import MonthsList from '../components/MonthList/MonthsList.container';
import * as userOperations from '../redux/users/users.operations';

const UsersInfoPage = ({ getUsersInfo }) => {
  useEffect(() => {
    getUsersInfo();
  }, [getUsersInfo]);

  return (
    <section>
      <MonthsList />
    </section>
  );
};

const mapDispatchToProps = dispatch => {
  return { getUsersInfo: () => dispatch(userOperations.getUsersInfo()) };
};

UsersInfoPage.propTypes = {
  getUsersInfo: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(UsersInfoPage);

import React from 'react';
import propTypes from 'prop-types';

import UsersInfoPage from '../../views/UsersInfoPage';
import ErrorNotification from '../ErrorNotification/ErrorNotification';

function App({ error, isLoading }) {
  return (
    <div className="App">
      {!isLoading && error && <ErrorNotification message={error.message} />}
      {isLoading && <div style={{ textAlign: 'center' }}>LOADING...</div>}
      <UsersInfoPage />
    </div>
  );
}

App.propTypes = {
  error: propTypes.shape({ message: propTypes.string.isRequired }).isRequired,
  isLoading: propTypes.bool.isRequired,
};

export default App;

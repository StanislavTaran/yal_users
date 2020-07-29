import { connect } from 'react-redux';
import App from './App';
import { getIsLoadingStatus } from '../../redux/app/app.selectors';
import { getErrors } from '../../redux/users/users.selectors';

const mapStateToProps = state => ({
  error: getErrors(state),
  isLoading: getIsLoadingStatus(state),
});

export default connect(mapStateToProps)(App);

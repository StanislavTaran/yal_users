import { connect } from 'react-redux';
import MonthList from './MonthList';
import * as usersSelectors from '../../redux/users/users.selectors';

const mapStateToProps = state => ({
  months: usersSelectors.getMonthsWithUsers(state),
});

export default connect(mapStateToProps)(MonthList);

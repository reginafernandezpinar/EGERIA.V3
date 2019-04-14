import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// component
import AuthPage from './AuthPage.component';

// Add Redux State to Component props
const mapStateToProps = state => {
  return {
    auth: state.user.auth,
    token: state.user.token
  };
};

export default withRouter(connect(
  mapStateToProps,
  null,
)(AuthPage));
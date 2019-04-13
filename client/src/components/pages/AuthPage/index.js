import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// component
import AuthPage from './AuthPage.component';


export default withRouter(connect(
  null,
  null,
)(AuthPage));
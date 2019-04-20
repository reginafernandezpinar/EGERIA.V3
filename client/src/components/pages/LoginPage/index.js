import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import component
import LoginPage from './loginPage.component';

// Import action creator
import { loginUser } from '../../../models/actions/user.actions';

// Add Redux State to Component props
const mapStateToProps = state => ({
    loading: state.user.loading,
    loginSuccessful: state.user.loginSuccessful
});

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
    loginUser
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage));
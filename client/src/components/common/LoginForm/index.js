import { connect } from 'react-redux';

// Import component
import LoginForm from './loginForm.component';

// Import action creator
import { loginUser } from '../../../models/actions/user.actions';

// Add Redux State to Component props
const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    auth: state.user.auth,
  };
};

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
    loginUser
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
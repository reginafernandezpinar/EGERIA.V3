import { connect } from 'react-redux';

// Import component
import RegisterForm from './registerForm.component';

// Import action creator
import { registerUser } from '../../../models/actions/user.actions';

// Add Redux State to Component props
const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    auth: state.user.auth
  };
};

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
    registerUser
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
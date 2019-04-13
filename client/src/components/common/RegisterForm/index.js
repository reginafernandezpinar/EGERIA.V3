import { connect } from 'react-redux';

// Import component
import RegisterForm from './registerForm.component';

// Import action creator
import { registerUser } from '../../../models/actions/user.actions';

// Add Redux State to Component props
const mapStateToProps = state => {
  return {
    register: state.user.register,
    loading: state.user.loading,
    error: state.user.error,
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
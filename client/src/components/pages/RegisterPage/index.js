import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Import component
import RegisterPage from './registerPage.component';

// Import action creator
import { registerUser } from '../../../models/actions/user.actions';

// Add Redux State to Component props
const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    registrationSuccessful: state.user.registrationSuccessful
  };
};

// Add Redux dispatch to Component props
const mapDispatchToProps = { 
    registerUser
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage));
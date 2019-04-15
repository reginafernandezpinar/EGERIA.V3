import { connect } from 'react-redux';

// Import component
import MainLayout from './mainLayout.component';

// Import action creator
import { whoAmI } from '../../../models/actions/user.actions';

// Add Redux State to Component props
const mapStateToProps = state => {
    return {
      token: state.user.token
    };
  };

// Add Redux dispatch to Component props
const mapDispatchToProps = {
    whoAmI
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainLayout);
import { connect } from 'react-redux';

// component
import Header from './header.component';

// Import action creator
import { logoutUser } from '../../../models/actions/user.actions';

// Add Redux dispatch to Component props
const mapDispatchToProps = {
    logoutUser
};

export default connect(
    null,
    mapDispatchToProps
)(Header);
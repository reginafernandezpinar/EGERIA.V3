import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Import component
import LogoutPage from "./logoutPage.component";

// Import action creator
import { logoutUser } from "../../../models/actions/user.actions";

// Add Redux State to Component props
const mapStateToProps = state => {
  return {
    loading: state.user.loading
  };
};


// Add Redux dispatch to Component props
const mapDispatchToProps = {
    logoutUser
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutPage));

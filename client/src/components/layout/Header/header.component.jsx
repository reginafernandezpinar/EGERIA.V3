import React from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { user } = this.props;
    const isAuthenticated = user.name !== null;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <NavbarBrand href="/">Egeria</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {!isAuthenticated && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
                {isAuthenticated && (
                  <a className="nav-link" href="/" onClick={() => this.props.logoutUser()}>
                    Logout
                  </a>
                )}
              </NavItem>
              {!isAuthenticated && (
                <NavItem>
                  <Link className="nav-link" to="/register">
                    Sign Up
                  </Link>
                </NavItem>
              )}
              {isAuthenticated && (
                <NavItem>
                  <Link className="nav-link" to="/mytrips">
                    My trips
                </Link>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </nav>
      </div>
    );
  }
}

// Navbar.propTypes = {
//   light: PropTypes.bool,
//   dark: PropTypes.bool,
//   fixed: PropTypes.string,
//   color: PropTypes.string,
//   role: PropTypes.string,
//   expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
//   // pass in custom element to use
// }

export default Header;

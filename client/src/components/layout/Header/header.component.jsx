import React from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
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
    const { user, className } = this.props;
    const isAuthenticated = user.name !== null;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-dark bg-transparent ${className}`}>
          <NavbarBrand href="/">Egeria</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="/category/family">Family</a>
                    <a class="dropdown-item" href="/category/gastro">Gastro</a>
                    <a class="dropdown-item" href="/category/monumental">Monumental</a>
                    <a class="dropdown-item" href="/category/nature">Nature</a>
                    <a class="dropdown-item" href="/category/rural">Rural</a>
                    <a class="dropdown-item" href="/category/urban">Urban</a>
                  </div>
                </li>
              </NavItem>
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

export default Header;

import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { isAuth } from '../../util/storage-token';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.history.push(`/username/${this.state.value}`);
  };

  render() {
    return (
      <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
        <li className="navbar-brand">
          <Link to="/">Egeria</Link>
        </li>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/countries">
                Countries
              </Link>
            </li>
            <li className="nav-item active">
              {!isAuth() && (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
              {isAuth() && (
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);

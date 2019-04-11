import React, { Component } from 'react';
import LoginForm from '../../common/LoginForm';
import PropTypes from 'prop-types';
import MainLayout from '../../layout/MainLayout';


class LoginPage extends Component {

  render() {
    return (
      <MainLayout>
        <div>
          <h3>Login and register Page</h3>
          <LoginForm />
        </div>
      </MainLayout>
    );
  }
}

LoginPage.propTypes = {
  getTripsCategory: PropTypes.func.isRequired
};

export default LoginPage;
import React, { Component } from 'react';
import LoginForm from '../../common/LoginForm';
import RegisterForm from '../../common/RegisterForm';
import MainLayout from '../../layout/MainLayout';

class AuthPage extends Component {

  render() {
    return (
      <MainLayout>
        <div>
          <h3>Login and register Page</h3>
          <div className="container">
          <h4>Login</h4>
            <LoginForm />
          </div>

          <div className="container">
          <h4>Register</h4>
            <RegisterForm />
          </div>
        </div>
      </MainLayout>
    );
  }
}


export default AuthPage;
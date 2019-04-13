import React, { Component } from 'react';
// import LoginForm from '../../common/LoginForm';
import RegisterForm from '../../common/RegisterForm';
import MainLayout from '../../layout/MainLayout';


class AuthPage extends Component {

  render() {
    return (
      <MainLayout>
        <div>
          <h3>Login and register Page</h3>
          <div className="container">
            {/* <LoginForm /> */}
          </div>

          <div className="container">
            <RegisterForm />
          </div>
        </div>
      </MainLayout>
    );
  }
}


export default AuthPage;
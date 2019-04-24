// Import libraries
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';

// Import Components
import MainLayout from '../../layout/MainLayout';

// Import global resources
import loginImg from "../../../assets/img/login.jpg";

// Import styles
import "./styles.scss";


class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidUpdate(prevProps) {
    // We check if there was a change in the prop 'loginSuccessful' from false to true due to 
    // a successful login and then we redirect to the home page    
    if (!prevProps.loginSuccessful && this.props.loginSuccessful) {
      this.props.history.push('/');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  }

  render() {
    const { loading } = this.props;
    return (
      <MainLayout headerClassName="black-text">
        <div className="login-page">

          <div className="login-image"
            style={{
              "backgroundImage": `url('${loginImg}')`
            }}>
            <div className="login-img-filter"></div>
          </div>

          <div className="login-container">
            <Form>
              <FormGroup className="mb-3">
                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool"
                  onChange={(e) => this.setState({ email: e.target.value })} />
              </FormGroup>

              <FormGroup className="mb-3">
                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="don't tell!"
                  onChange={(e) => this.setState({ password: e.target.value })} />
              </FormGroup>

              <button className="btn-blue" type="submit" onClick={this.handleSubmit}>Submit</button>

              {loading && <p>Loading...</p>}
            </Form>
          </div>

          <div className="boton-login-container">
            <h6>I don´t have an account yet</h6>
            <div>
              <button className="btn-blue" onClick={() => this.props.history.push('/register')}>Sign up</button>
            </div>
          </div>
        </div>
      </MainLayout>

    );
  }
}

export default withRouter(LoginPage)
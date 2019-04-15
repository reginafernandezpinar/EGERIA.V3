// Import libraries
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Import global resources
import MainLayout from '../../layout/MainLayout';


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
      <MainLayout>
        <h4>Login</h4>
        <div className="container">

        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool"
              onChange={(e) => this.setState({ email: e.target.value })} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="don't tell!"
              onChange={(e) => this.setState({ password: e.target.value })} />
          </FormGroup>
          <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
          {loading && <p>Loading...</p>}
        </Form>
        
        </div>
      </MainLayout>

    );
  }
}

export default withRouter(LoginPage)
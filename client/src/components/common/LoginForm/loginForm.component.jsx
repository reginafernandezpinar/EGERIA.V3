import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  }


  render() {
    const { auth, error, loading } = this.props;
    return (
      <Form inline>
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
        {auth && loading && <p>Loading...</p>}
        {auth && error && <p>Sorry, there seems to be an error with the internet connection</p>}
      </Form>
    );
  }
}
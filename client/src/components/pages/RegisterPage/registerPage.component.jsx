// Import libraries
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

// Import Components
import MainLayout from '../../layout/MainLayout';

// Import global resources
import loginImg from "../../../assets/img/login.jpg";

// Import styles
import "./styles.scss";


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            nameIsValid: false,
            emailIsValid: false,
            passwordIsValid: false,
            validateFields: false
        };
    }

    componentDidUpdate(prevProps) {
        // if user register is ok go to login page
        if (!prevProps.registrationSuccessful && this.props.registrationSuccessful) {
            this.props.history.push('/login');
        }
    }

    handleChange = event => {
        const newState = { ...this.state };
        const value = event.target.value;
        const field = event.target.name;
        newState[field] = value;
        this.setState(newState);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;

        if (this.validateForm()) {
            const registerData = {
                name,
                email,
                password
            };
            this.props.registerUser(registerData);
        }
    }

    validateForm() {
        const { email, name, password } = this.state;
        const newState = {
            nameIsValid: true,
            emailIsValid: true,
            passwordIsValid: true,
            validateFields: true
        };
        const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        newState.emailIsValid = emailRe.test(String(email).toLowerCase());
        newState.nameIsValid = name !== '';
        newState.passwordIsValid = password !== '' && password.length >= 6;

        this.setState(newState);

        return newState.emailIsValid && newState.nameIsValid && newState.passwordIsValid;
    }

    render() {
        const { loading } = this.props;
        const { validateFields, nameIsValid, emailIsValid, passwordIsValid } = this.state;
        let nameAtts = {}, emailAtts = {}, passwordAtts = {};
        if (validateFields) {
            nameAtts = nameIsValid ? { valid: true } : { invalid: true };
            emailAtts = emailIsValid ? { valid: true } : { invalid: true };
            passwordAtts = passwordIsValid ? { valid: true } : { invalid: true };
        }

        return (
            <MainLayout headerClassName="black-text">
                <div className="register-page">

                    <div className="register-image"
                        style={{
                            "backgroundImage": `url('${loginImg}')`
                        }}>
                        <div className="register-img-filter"></div>
                    </div>

                    <div className="register-container">
                        <Form>
                            <FormGroup>
                                <Label for="nameRegister">Name</Label>
                                <Input {...nameAtts} type="text" name="name" id="nameRegister" placeholder="enter your name" onChange={this.handleChange} />
                                {!nameIsValid && validateFields &&
                                    <FormFeedback {...nameAtts} >The name field cannot be empty</FormFeedback>
                                }
                            </FormGroup>
                            <FormGroup>
                                <Label for="emailRegister">Email Address</Label>
                                <Input {...emailAtts} type="text" name="email" id="emailRegister" placeholder="enter your email address" onChange={this.handleChange} />
                                {!emailIsValid && validateFields &&
                                    <FormFeedback {...emailAtts} >This is not a valid email address</FormFeedback>
                                }
                            </FormGroup>
                            <FormGroup>
                                <Label for="passwordRegister">Password</Label>
                                <Input {...passwordAtts} type="password" name="password" id="passwordRegister" placeholder="enter a password" onChange={this.handleChange} />
                                {!passwordIsValid && validateFields &&
                                    <FormFeedback {...passwordAtts} >The password needs to be at least 6 characters long</FormFeedback>
                                }
                            </FormGroup>

                            <button className="btn-blue" onClick={this.handleSubmit}>Sign me up</button>
                            {loading && <p>Loading...</p>}
                        </Form>
                    </div>

                </div>
            </MainLayout>
        );
    }
}

export default withRouter(RegisterPage)
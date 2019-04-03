import React from "react";
import { Redirect } from "react-router-dom";
import { saveToken } from "../../util/storage-token";
import LoginForm from '../../components/LoginForm';
import AxiosRemote from '../AxiosRemote';


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
    }
    // state = { user: false };  // otra forma de inicializar el estado.

    // logIn = (user) => {
    //     console.log("loggin user: " + user);
    //     this.setState({ user })
    // }

    render() {
        // const { user } = this.state;
        const goTo = this.props.location.state ? this.props.location.state.from.pathname : '/countries';

        return (
            <React.Fragment>
                <AxiosRemote
                    url="http://localhost:4000/api/auth/login"
                    error={(error) => <div>Error</div>}
                    render={(data) => {
                        saveToken(data);
                        console.log(this.props)
                        return <Redirect
                            to={{
                                pathname: goTo,
                                state: { referrer: '/login' }
                            }}
                        />
                    } }>
                    <LoginForm />
                </AxiosRemote>
            </React.Fragment>
        );
    }
}

export default LoginComponent;
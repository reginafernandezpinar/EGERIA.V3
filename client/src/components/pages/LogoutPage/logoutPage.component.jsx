// Import libraries
import React from 'react';
import { withRouter } from 'react-router-dom';

// Import global resources
import MainLayout from '../../layout/MainLayout';


class LogoutPage extends React.Component {
    render() {
        this.props.logoutUser()
        return (
            <MainLayout>
                <div className="container">
                    <h4>You´ve been successfully log out</h4>
                </div>
            </MainLayout>
        )
    }
}

export default withRouter(LogoutPage)
// Import libraries
import React from 'react';

// Import global resources
import MainLayout from '../../layout/MainLayout';


class LogoutPage extends React.Component {

    render() {
        this.props.logoutUser();
        const { loading } = this.props;
        return (
            <MainLayout>
                <div className="container">
                    {loading && <p>Loading... </p>} 
                    <h4>You´ve been successfully log out</h4>
                </div>
            </MainLayout>
        )
    }
}

export default LogoutPage

// Funciona el loading aqui? ya q esta despues de la func de logout ...
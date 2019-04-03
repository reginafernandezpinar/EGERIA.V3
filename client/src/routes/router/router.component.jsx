// Import libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux'; // esto es un High Order Component
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';

// Import global resources
import { Store } from '@Models';
// import {  } from '@Assets';
// import {  } from '@Components';


// Import local resources
import styles from './router.styles.css';

///////////// Component ////////////////
export class Router extends Component {


  render() {
    return (
      <Provider store={Store}>
        <Container><h2 className="text-center">Home</h2></Container>
      </Provider>
    );
  }
}

// ejecuta una funcion cada vez q cambiamos el stado al Store

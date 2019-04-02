// Import libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux'; // esto es un High Order Component

// Import global resources
import { Store } from '@Models';
// import {  } from '@Assets';
// import {  } from '@Components';

// Import local resources
import styles from './router.styles.css';

///////////// Component ////////////////
export class Router extends Component {
  handle() {
    Store.dispatch({ payload: 'Text prueba', type: 'CHANGE_TEXT' });
  }

  render() {
    return (
      <Provider store={Store}>
        <div className={styles.container}>
            <a onClick={this.handle} className={styles.button}>Boton</a>
        </div>
      </Provider>
    );
  }
}

// ejecuta una funcion cada vez q cambiamos el stado al Store

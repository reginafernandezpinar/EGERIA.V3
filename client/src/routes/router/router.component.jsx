// Import libraries
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Import global resources
import { Store } from '@Models';
import MainPage from '../../containers/MainPage';

// Import local resources
import './styles.css';

///////////// Component ////////////////
export class Router extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
  }
}

// ejecuta una funcion cada vez q cambiamos el stado al Store

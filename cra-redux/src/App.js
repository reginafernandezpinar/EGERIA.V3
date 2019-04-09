// Import libraries
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Import global resources
import Store from './models/store';
import MainPage from './components/layout/MainPage';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends Component {
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

export default App;
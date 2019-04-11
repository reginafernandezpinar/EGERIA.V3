// Import libraries
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import global resources
import Store from './models/store';
import Home from './components/pages/Home';
import CategoryPage from './components/pages/CategoryPage';
import TripDetailPage from './components/pages/TripDetailPage';
import LoginPage from './components/pages/LoginPage';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:id" component={CategoryPage} />
            <Route path="/trip/:id" component={TripDetailPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}


export default App;
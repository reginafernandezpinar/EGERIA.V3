// Import libraries
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr'


// Import global resources
import Store from './models/store';
import Home from './components/pages/Home';
import CategoryPage from './components/pages/CategoryPage';
import TripDetailPage from './components/pages/TripDetailPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'


class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/category/:id" component={CategoryPage} />
              <Route path="/trip/:id" component={TripDetailPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </Switch>
          </Router>
          <ReduxToastr
              timeOut={4000}
              newestOnTop={false}
              preventDuplicates
              position="top-left"
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              progressBar
              closeOnToastrClick/>
        </div>
      </Provider>
    );
  }
}


export default App;
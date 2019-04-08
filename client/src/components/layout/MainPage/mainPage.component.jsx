import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from '../MainLayout';
import Home from '../../pages/Home';
import CategoryPage from '../../pages/CategoryPage';

class MainPage extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={CategoryPage} />
        </Switch>
      </MainLayout>
    );
  }
}

export default MainPage;

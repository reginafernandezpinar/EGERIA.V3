import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from '../MainLayout';
import Home from '../../pages/Home';

class MainPage extends Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
      </MainLayout>
    );
  }
}

export default MainPage;

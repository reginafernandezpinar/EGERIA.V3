import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout';
import Home from '../../components/Home';

class MainPage extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    );
  }
}

export default MainPage;

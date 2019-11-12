import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Submitted } from './components/Submitted';
import { Counter } from './components/Counter';

import './custom.css'
import { Contact } from './components/Contact';
import { UnansweredQuestions } from './components/UnansweredQuestions';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/fetch-data' component={Submitted} />
            <Route path='/Contact' component={Contact} />
      </Layout>
    );
  }
}

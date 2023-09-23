import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Greeting} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

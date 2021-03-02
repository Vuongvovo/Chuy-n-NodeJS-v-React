import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from './features/components/Home/Home';
import Jobs from './features/components/Jobs/Jobs';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

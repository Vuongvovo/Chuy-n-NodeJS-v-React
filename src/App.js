import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from './features/components/Home/Home';
import Jobs from './features/components/Jobs/Jobs';
import { checkBar } from './features/container/Functionjs';
import 'antd/dist/antd.css';
import DetailJob from './features/components/DetailJob/DetailJob';
import ListNews from './features/components/ListNews/ListNews';

function App() {
  useEffect(() => {
    checkBar();
  })
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/news">
            <ListNews />
          </Route>
          <Route exact path="/jobs/work/:id">
            <DetailJob />
          </Route>
        </Switch>
        {/* <Jobs /> */}
        {/* <Home /> */}

        {/* <DetailJob /> */}
      </Router>
    </div>
  );
}

export default App;

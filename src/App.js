import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from './features/components/Home/Home';
import Jobs from './features/components/Jobs/Jobs';
import { checkBar } from './features/container/Functionjs';
import 'antd/dist/antd.css';
import DetailJob from './features/components/DetailJob/DetailJob';
import ListNews from './features/components/ListNews/ListNews';
import DetailNew from './features/components/DetailNew/DetailNew';
import Company from './features/components/company/Company';
import DetailCompany from './features/components/DetailCompany/DetailCompany';
import Candidates from './features/components/Candidates/Candidates';
import DetailCandidate from './features/components/DetailCandidate/DetailCandidate';
import Login from './features/components/Login/Login';

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
          <Route exact path="/news/detailNew/:id">
            <DetailNew />
          </Route>
          <Route exact path="/jobs/work/:id">
            <DetailJob />
          </Route>
          <Route exact path="/companys">
            <Company />
          </Route>
          <Route exact path="/companys/:id">
            <DetailCompany />
          </Route>
          <Route exact path="/candidates">
            <Candidates />
          </Route>
          <Route exact path="/candidates/:id">
            <DetailCandidate />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

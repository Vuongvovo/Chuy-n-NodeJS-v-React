import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

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
import Admin from './app/Admin';
import Register from './features/components/Register/Register';
import InforCompany from './features/components/inforCompany/InforCompany';
import InforUser from './features/components/inforUser/InforUser';
import CreateCv from './features/components/CreateCv/CreateCv';
import DetailFormCV from "./features/components/DetaiFormCV/DetaiFormCV"
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
          <Route path="/admin" >
            <Ladmin />
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
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/inforCompany">
            <InforCompany />
          </Route>
          <Route exact path="/inforUser">
            <InforUser />
          </Route>
          <Route exact path="/createCv">
            <CreateCv />
          </Route>
          <Route exact path="/detaiFormCV/:id">
            <DetailFormCV />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}
function Ladmin() {
  let { path, url } = useRouteMatch();
  // if (localStorage.getItem("token")) {
  return <Admin path={path} url={url} />
  // } else {
  //   return <Error />
  // }
}
export default App;

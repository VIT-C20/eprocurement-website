import React, { Component } from 'react'
import { BrowserRouter as Router,Redirect, Route, Switch } from "react-router-dom";
import FAQ from './Components/FAQ/FAQ';
import NavBar from "./Components/NavBar/NavBar";
import SignUp from "./Pages/SignUp/SignUp";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
          <Switch>
            {/* <Route exact path="/home" component={AllTenders} />
            <Route exact path="/tender/:tenderId" component={TenderDetails} />
            <Route exact path="/tender/:tenderId/history" component={TenderHistory} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/users/:userId" component={UserDetails} />
            <Route exact path="/login" component={Login} /> */}
            <Route exact path="/signup" component={SignUp} />
            <Redirect to="/home" />
          </Switch>
        <FAQ />
      </Router>
    );
  }
}


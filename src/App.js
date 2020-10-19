import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import FAQ from './Components/FAQ/FAQ';
import Header from "./Components/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";
import Users from "./Pages/Users/Users";
import Tenders from "./Pages/Tenders/Tenders";
import Profile from './Pages/Profile/Profile';
import TenderDetails from './Pages/Tenders/TenderDetails'
import './App.css';
import Master from './Components/Master/Master';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path="/home" component={Tenders} />
            <Route exact path="/tender/:tenderId" component={TenderDetails} />
            <Route exact path="/master" component={Master} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:userId" component={Profile}/>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/faq" component={FAQ} />
            <Redirect to="/home" />
          </Switch>
      </Router>
    );
  }
}
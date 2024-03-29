import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import FAQ from './Components/FAQ/FAQ';
import Header from "./Components/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";
import Users from "./Pages/Users/Users";
import Tenders from "./Pages/Tenders/Tenders";
import ApplyTender from "./Pages/Tenders/ApplyTender";
import UserProfile from './Pages/Profile/UserProfile';
import TenderDetails from './Pages/Tenders/TenderDetails';
import TenderHistory from './Pages/Tenders/TenderHistory';
import CreateTender from './Pages/Tenders/CreateTender'
import ViewBids from './Pages/Tenders/ViewBids'
import BidDetails from './Pages/Tenders/BidDetails'
import MyTenders from './Pages/Tenders/MyTenders'
import MyBids from "./Pages/Tenders/MyBids";
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orgChain: '',
      role: ''
    }
  }

  setProfile = (data) => {
    this.setState({
      orgChain: data.orgChain,
      role: data.role
    })
    console.log(this.state)
  }

  render() {
    return (
      <Router>
        <Header setProfile={this.setProfile}/>
          <Switch>
            <Route exact path="/home" component={Tenders} />
            <Route exact path="/tender/:tenderId" component={TenderDetails} />
            <Route exact path="/tender/host/:host" component={MyTenders} />
            <Route exact path="/tender/myBids/:bidderId" component={MyBids} />
            <Route exact path="/tender/:tenderId/history" component={TenderHistory} />
            <Route exact path="/tender/:tenderId/applyTender" component={ApplyTender} />
            <Route exact path="/tender/:tenderId/viewBids" component={ViewBids} />
            <Route exact path="/tender/:tenderId/appliedBid/:bidId" component={BidDetails} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:userId" component={UserProfile}/>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/createTender" component={CreateTender} />
            <Redirect to="/home" />
          </Switch>
      </Router>
    );
  }
}
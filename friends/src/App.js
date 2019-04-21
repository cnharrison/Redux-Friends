import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";

import { getFriends }  from "./actions"

import FriendsList from "./components/FriendsList"
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  componentDidMount() { 
    this.props.getFriends();
  }


  render() {
    return (
      <Router>
        <div className="App">
          <h1>Redux Friends</h1>
          <Link to="/login">Login</Link>
          <Link to="/protected">Protected Page</Link>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendsList} friends={this.props.friends}/>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { getFriends }
)(App);

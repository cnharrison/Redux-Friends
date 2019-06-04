import React, { Component } from "react";
import { connect } from "react-redux";
import { submitFriend } from "../actions"

import Friend from "./Friend";

class FriendsList extends Component {
  state = {
    friendName: "",
    friendAge: 0,
    friendEmail: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = event => {
    let newFriend = {
      name: this.state.friendName,
      age: this.state.friendAge,
      email: this.state.friendEmail
    };
    event.preventDefault();
    this.props.submitFriend(newFriend);
  };

  render() {
    return (
      <div className="friendslist">
        {this.props.friends.map(friend => {
          return (
            <Friend
              name={friend.name}
              id={friend.id}
              age={friend.age}
              email={friend.email}
              key={friend.id}
            />
          );
        })}
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="friendName"
            placeholder="name"
            value={this.state.friendName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="friendAge"
            placeholder="age"
            value={this.state.friendAge}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="friendEmail"
            placeholder="email"
            value={this.state.friendEmail}
            onChange={this.handleChange}
          />
          <button onSubmit={this.submitForm}>Add friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  { submitFriend }
)(FriendsList);

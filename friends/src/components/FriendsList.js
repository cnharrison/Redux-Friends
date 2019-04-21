import React, { Component } from "react";
import { connect } from "react-redux";

import Friend from "./Friend";

class FriendsList extends Component {
  render() {
    return (
      <div className="friendslist">
        {this.props.friends.map(friend => {
          return (
            <Friend
              name={friend.name}
              id={friend.id}
              age={friend.age}
              email={friend.height}
              key={friend.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default connect(
  mapStateToProps,
  {}
)(FriendsList);

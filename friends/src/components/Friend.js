import React from "react";

const Friend = props => {
  return (
    <div className="friend">
      <p>{props.name} </p>
      <p>{props.age} years old</p>
      <p>email: {props.email}</p>
    </div>
  );
};

export default Friend;

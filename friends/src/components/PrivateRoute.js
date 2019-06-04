import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...therest }) => {
  return (
    <Route
      {...therest}
      render={() => {
        if (localStorage.getItem("token")) {
          console.log("token found!")
          return <Component />;
        } else {
          console.log("redirecting");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

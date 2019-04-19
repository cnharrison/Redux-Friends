import { React, Component } from "react";
import { connect } from "react-redux";
import { login } from "..actions";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  render() {
    return <h2>Login component</h2>;
  }
}
const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);

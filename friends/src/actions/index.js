import axios from "axios";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIENDS_FAIL = "GET_FRIENDS_FAIL";
export const GET_FRIENDS_START = "GET_FRIENDS_START";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(response => {
      localStorage.setItem("token", response.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch(error => {
      console.log("login error: ", error);
      if (error.response && error.response.status === 403) {
        localStorage.Storage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(response => {
      dispatch({
        type: GET_FRIENDS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_FRIENDS_FAIL,
        payload: error
      });
    });
};

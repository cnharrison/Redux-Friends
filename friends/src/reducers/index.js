import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAIL,
  GET_FRIENDS_START,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAIL
} from "../actions";

const initialState = {
  error: null,
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        logginIn: false,
        error: action.payload
      };
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false
      };
    case GET_FRIENDS_FAIL:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    case GET_FRIENDS_START:
      return {
        ...state,
        fetchingFriends: true
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        savingFriends: true
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        savingFriends: false,
        friends: action.payload
      };
    case ADD_FRIEND_FAIL:
      return {
        ...state,
        savingFriends: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

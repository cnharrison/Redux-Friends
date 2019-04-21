import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_FRIENDS,
  GET_FRIENDS_FAIL,
  GET_FRIENDS_START
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
    case GET_FRIENDS:
      return {
        ...state,
        friends: action.payload
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
        fetchingFriends: true,
      }
    default:
      return state;
  }
};

export default reducer;

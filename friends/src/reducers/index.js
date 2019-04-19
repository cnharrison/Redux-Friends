import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";


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
    switch(action.type) { 
        case LOGIN_START:
        return state;
        case LOGIN_SUCCESS: 
        return state; 
        case LOGIN_FAILURE: 
        return state; 
        default: 
        return state; 
    }
}

export default reducer;
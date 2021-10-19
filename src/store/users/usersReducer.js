// Decides whats going to happen to your state based on an action

import { GET_USER } from '../types';
import { SET_LOADING } from '../types';
export default (state, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.payload],
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

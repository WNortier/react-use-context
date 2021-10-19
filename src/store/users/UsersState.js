// This is where all of our actions goes

import React, { useReducer } from 'react';
import UsersContext from './usersContext';
import UsersReducer from './usersReducer';
import { GET_USER, SET_LOADING } from '../types';

const UsersState = (props) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  // GET USER
  const getUser = async () => {
    setLoading();
    const response = await fetch('https://randomuser.me/api/?page=2');
    const data = await response.json();

    dispatch({
      type: GET_USER,
      payload: data.results,
    });
  };

  // SET LOADING
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        getUser,
        setLoading,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersState;

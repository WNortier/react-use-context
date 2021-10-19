import { createContext } from 'react';

const usersContext = createContext({
  users: [],
  loading: false,
  getUser: () => {},
});

export default usersContext;

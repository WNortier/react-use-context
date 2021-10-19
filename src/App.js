import { useEffect, useState, useContext } from 'react';

import UsersContext from './store/users/usersContext';

function App() {
  const usersContext = useContext(UsersContext);

  const getUser = async () => {
    await usersContext.getUser();
  };
  useEffect(() => {}, []);

  return (
    <div className="App">
      <pre>
        <h1>Hello</h1>
        <button onClick={getUser}>Get User</button>
        {usersContext.loading
          ? 'loading...'
          : usersContext.users.map((user) => <li>{user.name.first}</li>)}
      </pre>
      {/* <img src={userData[0].picture.medium}></img> */}
    </div>
  );
}

export default App;

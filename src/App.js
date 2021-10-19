import { useEffect, useState, useContext } from 'react';
import './app.css';
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
        <button onClick={getUser}>Get User</button>
        {usersContext.loading ? (
          <h1>loading...</h1>
        ) : (
          usersContext.users.map((user) => (
            <li>
              <img src={user.picture.large}></img>
              <p>{user.name.first}</p>
            </li>
          ))
        )}
      </pre>
      {/* <img src={userData[0].picture.medium}></img> */}
    </div>
  );
}

export default App;

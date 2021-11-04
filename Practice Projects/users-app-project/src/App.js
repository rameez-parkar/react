import React, {useState} from 'react';
import Users from './components/Users';
import "./App.css";
import NewUser from './components/NewUser';

function App() {
  const [usersList, setUsersList] = useState([]);

  const newUserHandler = (user) => {
    setUsersList((prevUsersList) => {
      return [user, ...prevUsersList];
    });
  }

  return (
    <div className='app'>
      <NewUser onAddNewUser={newUserHandler} />
      {usersList.length > 0 && <Users usersList={usersList} />}
    </div>
  );
}

export default App;

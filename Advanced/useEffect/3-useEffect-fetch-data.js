import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

//second argument 

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url) // external library
    const users = await response.json();
    // setUsers(users) - negerai :) updatingam users, that triggers rerender, mes gaunam userius ir setinam userius - sukuriam infinite loop. nebent isimetame [] ir nebekonsolinam useriu:
    setUsers(users);
    //console.log(users);
  }
  // nenaudoti async awwait, nes useEffect negali returninti promise. Aync Await galima ideti i callback arba daryti atskira funkcija
  useEffect(() => {
    getUsers();
  }, [])
  return (
    <>
      <h3>Github Users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    // if list doesn't exists, return empty array
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  // ({}) - when we are passing an object
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here are conditions: 
    if (!name) { // checking if the value is empty. show alert on submit
      // display alert
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      // deal w` edit // setting list to a new value
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName('');
    }
  };
  // funkcija alertui

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    // list filter always return a new array // if item id matches to whatever id I passed into removed item then don't return it from this filter function // if item id does not  match then it's gonna be added to new array
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);// getting the item which id is matching then return that name
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);// kai pasirenkam kuri norim editinti, to name ismeta input'e
  };
  // everytime list changes, set local storage, save the latest values
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])


  return (
    <section className='section-center'>
      <form action='grocery-form' onSubmit={handleSubmit}>
        {/* setting alert */}
        {alert.show && <Alert {...alert} removeAlert={showAlert}
          list={list} />}
        {/* list={list} - pridedam sita, kad visi alertai uzimtu 3 sek zr i  *alert */}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <button type='submit' className='submit-btn'>
            {/* if isEditing is true I will display edit, if not - submit */}
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form >
      {
        list.length > 0 && (
          <div className='grocery-container'>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button className='clear-btn' onClick={clearList}>Clear Items</button>
          </div>
        )}
    </section >
  );
}

export default App

// useful when passing through 1 || 2 levels, otherwise better to use useContext
import React, { useState } from 'react';
import {data} from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return (
        people.filter((person) => person.id !== id)
      );
    });
  };
  return (
  <section>
    <h3>Prop Drilling</h3>
    <List people = {people} removePerson={removePerson} />
  </section>
  );
};

const List = ({people, removePerson}) => {
return (
  <>
  {/* {...person} - means add all the properties of a person id, name & etc */}
  {people.map((person) => {
    return <SinglePerson key={person.id} {...person} removePerson={removePerson} />;
  })}
  </>
)
}

const SinglePerson = ({id, name, removePerson}) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={()=>removePerson(id)}>Remove</button>
    </div>
  )
}

export default PropDrilling;

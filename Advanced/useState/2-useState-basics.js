import React, { useState } from 'react';
// useState - funkcija

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState('random title');
  // [text - we get a particular value setText - function, that controls that value]

  const handleClick = () => {
    if (text === 'random title') {
      setText('Hello World');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
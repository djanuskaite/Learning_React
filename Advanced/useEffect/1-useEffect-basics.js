// UseEffect is used when we want to set up a side effect and that is somewhere outside the component

import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  //useState cia issaugojo value tarp renderiu ir kai paspaudziam buttona, veikia use effect
  const [value, setValue] = useState(0);

  // we pass in the callback function & and within this, callback function will run after every render
  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  // [list of dependencies] - we only run on the initial(pradinio) run
  useEffect(() => {
    console.log('hello world');
  }, []);
  // runs only once and everytime if we write [value]


  console.log('render component');
  // we do see render component twice because -> index.js 'strict mode'

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  );
};

export default UseEffectBasics;

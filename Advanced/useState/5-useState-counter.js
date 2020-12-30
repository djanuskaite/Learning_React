import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1); with this we are not getting the right value, bcs if I click 3 times, it only changes once
      // kai pakeiciu i sita - jei paspausiu greitai 5 kartus, visus kartus ir padidins, susumuos
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
      </section>

      {/* this one will be with a delay */}
      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase Later</button>
      </section>
    </>
  );
};

export default UseStateCounter;
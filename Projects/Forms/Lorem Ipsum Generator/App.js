import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof count);
    let amount = parseInt(count);  // insted of a string value becomes a number

    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }

    // 'slice' will return a new copy of an array and we select items from start to an end (end is not included)
    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>
        Tired of boring lorem ipsum?
      </h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          Paragraphs:
        </label>
        <input type='number' name='amount' id='amount' value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;

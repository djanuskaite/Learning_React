// rafce
import React from 'react'

const Book = ({ img, title, author, about }) => {

  // atribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello World');
  }
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    // onMouseOver-kai pele uzvedi, konsoleje title ismeta
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt='' />
      {/* h1 onClick kai paspaudi ant title - konsole ismeta title */}
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <p>{about}</p>
      <button type='button' onClick={clickHandler}>Reference Example</button>
      {/* jeigu palikciau {complexExample(author)} - ismestu visus autorius konsoleje, net nepaklikinus */}
      <button type='button' onClick={() => complexExample(author)}>More Complex Example</button>
    </article >
  );
};

export default Book

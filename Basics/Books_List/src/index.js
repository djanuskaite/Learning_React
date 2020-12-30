import React from 'react'
import ReactDom from 'react-dom';

import { data } from './books'
import SpecificBook from './Book'
import { greeting }
  from './testing/testing'

// CSS. vienas taskas kai failas tame paciame folderyje, o '..' kai kitame
import './index.css';

// MAP METHOD - with map method Im accessing each of every name

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {/* // use index if you are not going to change anything : key={index} */}
      {data.map((book) => {
        return (
          // nebereikia rasyti book={book}, kai dadedame '...'
          <SpecificBook key={book.id} {...book}></SpecificBook>
        );
      })}
    </section>
  );
}
// ka norim renderinti ir kur:
ReactDom.render(<BookList />, document.getElementById('root'));
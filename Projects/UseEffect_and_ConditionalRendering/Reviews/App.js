// npm install react-icons --save
// https://react-icons.github.io/react-icons/

import React from 'react';
import Review from './Review';
// import { FaGithubSquare } from 'react-icons/fa';
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;

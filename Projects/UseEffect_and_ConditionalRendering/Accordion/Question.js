import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  // false, kad pradzioje nerodytu pilnos info
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        {/* kai showInfo yra  true, t.y. rodo full text, icona bus minus ir atvirksciai */}
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* if showInfo is true, only then I wanna show my program */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

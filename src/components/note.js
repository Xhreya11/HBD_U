import './note.css';
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Note = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
    });

    typewriter
      .typeString('Ahhh, such wildly indented website and I just could not get it to look better')
      .pauseFor(1000)
      .deleteAll()
      .typeString('But you know a weird website for a weird friend...')
      .pauseFor(2000)
      .deleteAll()
      .typeString('And I do not mean you are weird in a bad way, you are a perfect friend and the one who does npt care what others think.')
      .pauseFor(2000)
      .deleteAll()
      .typeString('And yes I am lazy so I am gonna end this here, ILY')
      .pauseFor(2000)
      .start();
  }, []);

  return <div className='note' ref={typewriterRef}></div>;
};

export default Note;
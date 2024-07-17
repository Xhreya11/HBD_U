import React from 'react';
import useSound from 'use-sound';
import { motion } from "framer-motion"
import './SongBtn.css';


const App = (props) => {
  const [playSound] = useSound(props.sound);

  return (
    <div className='song-btn'>
      <motion.button className='btn' onClick={playSound}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}>{props.wish}</motion.button>
    </div>
  );
};

export default App;
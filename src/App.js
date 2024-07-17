// // src/App.js
import React from 'react'
import Card from './components/Card';
import Photos from './components/Photos';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import GetWishes from './components/GetWishes';
import Note from './components/note';


export default () => {
  const { width, height } = useWindowSize()
  return (
    <>
    <Confetti
      width={width}
      height={height}
      
    />
    <div className="App" >
        <Card/>
        <GetWishes/>
        <Photos/>
        <Note/>
      </div>
    </>
    
  )
}

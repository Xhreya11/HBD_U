import React from 'react';
import SongBtn from './SongBtn';
import './GetWishes.css';
import hbd from '../assets/happy-birthday.mp3';
import mewWishes from '../assets/hbd-kitty.mp3';

const GetWishes = ()=>{
    return(
        <div className='get-wishes'>
        <h3 > Here is a song for you... ahh actually two </h3>
        <div className='get-wishes-flex'>
        <SongBtn sound = {hbd} wish = "Human version"/>
        <SongBtn sound = {mewWishes} wish = "Kitty version"/>
        </div>
        {/* <img className = "img-cat2"src={cat2}/> */}
        </div>
        
    );
};
export default GetWishes;
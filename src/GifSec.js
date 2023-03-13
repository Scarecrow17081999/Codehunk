import React from 'react';
import Typewriter from 'typewriter-effect';
import Gif from './images/Gif.png';

let logo1 = <img src={'/images/Gif.png'} alt='Canvas Logo' />;

function GifSec() {
  return (
    <div class='gif-sec'>
    <Typewriter
  options={{
    strings: ['Come, let’s show you the first step to make your business add-up!'],
    autoStart: true,
    loop: true,
  }}
/>

      <img src={Gif} alt='fdg' />
    </div>
  );
}
export default GifSec;

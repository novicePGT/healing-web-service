import React from 'react';
import { useLocation } from 'react-router-dom';
import mainvideo from '../assets/mainvideo.mp4';
import brazilvideo from '../assets/brazil.mp4';
import parisvideo from '../assets/paris.mp4';
import russiavideo from '../assets/russia.mp4';
import swedenvideo from '../assets/sweden.mp4';
import argentinavideo from '../assets/argentina.mp4';

const Main = () => {
  const location = useLocation();
  let videoSrc = mainvideo;

  if (location.pathname === '/brazil') {
    videoSrc = brazilvideo;
  } else if (location.pathname === '/france') {
    videoSrc = parisvideo;
  } else if (location.pathname === '/russia') {
    videoSrc = russiavideo;
  } else if (location.pathname === '/sweden') {
    videoSrc = swedenvideo;
  } else if (location.pathname === '/argentina') {
    videoSrc = argentinavideo;
  }

  return (
    <div className='main'>
      <div className='overlay'></div>
      <video src={videoSrc} autoPlay loop muted />
      <div className='contentCenter'>
        <h1>Welcome</h1>
        <p>To Healing WebPage.</p>
      </div>
      <div className='contentTop'>
        <h3>This place is a gathering of people who need to rest.</h3>
        <h5>Do you want a break?</h5>
      </div>
    </div>
  );
};

export default Main;

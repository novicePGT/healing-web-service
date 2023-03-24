import React from 'react'
import mainvideo from '../assets/mainvideo.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={mainvideo} autoPlay loop muted />
        <div className='content'>
            <h1>Welcome</h1>
            <p>To Healing WebPage.</p>
        </div>
    </div>
  )
}

export default Main
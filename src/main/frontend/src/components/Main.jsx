import React from 'react'
import mainvideo from '../assets/mainvideo.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={mainvideo} autoPlay loop muted />
        <div className='contentCenter'>
            <h1>Welcome</h1>
            <p>To Healing WebPage.</p>
        </div>
        <div className='contentTop'>
          <h3>This place is gathering of people need to rest.</h3>
          <h5>Do you want a break?</h5>
        </div>
    </div>
  )
}

export default Main
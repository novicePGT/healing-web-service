import React from 'react'
import ocean from '../assets/ocean.mp4'

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={ocean} autoPlay loop muted />
        <div className='content'>
            <h1>Welcome</h1>
            <p>To Healing WebPage.</p>
        </div>
    </div>
  )
}

export default Main
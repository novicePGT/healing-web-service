import React, { useState, useRef, useEffect } from 'react'
import { musicData } from '../audio/audios.js'
import Player from '../audio/Player';
import TestMusic from '../assets/selfProduced1.mp3'

const AudioPlayer = () => {

    const [music, setMusic] = useState(musicData);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentMusic, setCurrentMusic] = useState(musicData[0])

    const onPlaying = () => {
      const duration = audioElement.current.duration
      const currentTime = audioElement.current.currentTime

      setCurrentMusic({ ... currentMusic, "progress": currentTime / duration * 100, "length": duration})

      // console.log(duration, currentTime)
    }

    const audioElement = useRef()

    useEffect(() => {
      if(isPlaying) {
        audioElement.current.play().catch(error => console.log(error));
      }
      else {
        audioElement.current.readyState === 4 && audioElement.current.pause();
      }
    }, [isPlaying])


  return (
    <div>
        <audio src={currentMusic.music.src} ref={audioElement} onTimeUpdate={onPlaying}></audio>
        <Player music={music} setMusic={setMusic} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement} 
        currentMusic={currentMusic} setCurrentMusic={setCurrentMusic} />
    </div>
  )
}

export default AudioPlayer
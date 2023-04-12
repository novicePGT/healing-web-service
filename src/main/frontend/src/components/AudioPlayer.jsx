import React, { useState, useRef, useEffect } from 'react'
import { musicData } from '../audio/audios.js'
import Player from '../audio/Player';
import TestMusic from '../assets/selfProduced1.mp3'

const AudioPlayer = () => {

    const [music, setMusic] = useState(musicData);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentMusic, setCurrentMusic] = useState(musicData[0])

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
        <audio src={currentMusic.music.src} ref={audioElement}></audio>
        <Player music={music} setMusic={setMusic} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement} currentMusic={currentMusic} />
    </div>
  )
}

export default AudioPlayer
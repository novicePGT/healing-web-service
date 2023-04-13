import React, { useRef } from 'react'
import './player.scss'
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill,
BsSkipEndCircleFill, BsFillSkipEndCircleFill } from 'react-icons/bs'

const Player = ({music, audioElement, isPlaying, setIsPlaying, currentMusic, setCurrentMusic}) => {

    const playPause = () => {
        setIsPlaying(!isPlaying)
    }

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth
        const offset = e.nativeEvent.offsetX

        const divProgress = offset / width * 100

        audioElement.current.currentTime = divProgress / 100 * currentMusic.length
    }

    const skipBack = () => {
        const index = music.findIndex(x=> x.title == currentMusic.title)
        if (index == 0) {
            setCurrentMusic(music[music.length-1])
        } else {
            setCurrentMusic(music[index-1])
        }

        audioElement.current.currentTime = 0
    }

    const skipNext = () => {
        const index = music.findIndex(x=> x.title == currentMusic.title)
        if (index == music.length-1) {
            setCurrentMusic(music[0])
        } else {
            setCurrentMusic(music[index+1])
        }

        audioElement.current.currentTime = 0
    }

    const clickRef = useRef();

  return (
    <div className='player_container'>
        <div className='title'>
            <p>{currentMusic.title}</p>
        </div>
        <div className='navigation'>
            {/* <div style={{display: 'flex', justifyContent: "space-between"}}>
                <p>0:10</p>
                <p>4:10</p>
            </div> */}
            <div className='navigation_wrapper' onClick={checkWidth} ref={clickRef}>
                <div className='seek_bar' style={{width: `${currentMusic.progress+"%"}`}}></div>
            </div>
        </div>
        <div className='controls'>
            <BsFillSkipStartCircleFill className='btn_action' onClick={skipBack} />
            {isPlaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={playPause} />
            : <BsFillPlayCircleFill className='btn_action pp' onClick={playPause} />}
            <BsFillSkipEndCircleFill className='btn_action' onClick={skipNext}/>
        </div>
    </div>
  )
}

export default Player
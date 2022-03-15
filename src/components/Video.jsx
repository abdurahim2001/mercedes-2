import React from 'react'
import video_1 from '../video/pexels-taryn-elliott-5309381.mp4'
import e from '../components/css/Video.module.css'
import {NavLink} from 'react-router-dom'

const Video = () => {
  return (
    <div className={e.okey}>
        <div className={e.menu_video}>
     
            <div className={e.video_button}>
                   <div><h1>"Mercedes-Benz"</h1></div>
                  <div className={e.nav}>
                  <NavLink to="">Узнайте больше</NavLink>
                   <NavLink to="">Узнайте больше</NavLink>
                  </div>
            </div>
     
             <div className={e.video}> 
                     <video autoPlay preload='auto'muted loop src={video_1}></video>
             </div>
        </div>
    </div>

  )
}

export default Video
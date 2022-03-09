import React from 'react'
import rr from '../mir/Mir.module.css'
import {NavLink} from 'react-router-dom'

const Mir = () => {
  return (
    <div>
         <div className={rr.menu}>
        <div> <NavLink to="">История </NavLink></div>
       <div>  <NavLink to=""> О Нас</NavLink></div>
         <div><NavLink to="">Вакансия </NavLink></div>
        <div> <NavLink to=""> Услуги</NavLink></div>
         </div>
    </div>
  )
}

export default Mir
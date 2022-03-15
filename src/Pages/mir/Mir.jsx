import React from 'react'
import rr from '../mir/Mir.module.css'
import {NavLink} from 'react-router-dom'

const Mir = () => {
  return (
    <div>
         <div className={rr.menu}>
       <div>  <NavLink to="/Istor"> О Нас</NavLink></div>
         <div><NavLink to="/Vac">Вакансия </NavLink></div>
        <div> <NavLink to="/Uslu"> Услуги</NavLink></div>
         </div>
    </div>
  )
}

export default Mir
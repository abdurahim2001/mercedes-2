import React from 'react'
import ss from '../avto/Avto.module.css'
import {NavLink} from 'react-router-dom'
import img_1 from '../../foto/pngwing.com (19).png'
import img_2 from '../../foto/pngwing.com (21).png'



function Avto() {
  return (
    <div>
       <section className={ss.mane}>
       <div className={ss.mane_1}>
      <div> <NavLink to="/Or_1"> <img src={img_1} alt="" /></NavLink></div>
     <div>  <NavLink  className={ss.mane_a}  to="/Or_1">	Аренда</NavLink></div>
       </div>
       <div className={ss.mane_1}>
      <div> <NavLink to="/Or_2"> <img src={img_2} alt="" /></NavLink></div>
       <div> <NavLink className={ss.mane_a} to="/Or_2">Рассрочка</NavLink> </div>
       </div>
     
        </section>
 
    </div>
  )
}

export default Avto
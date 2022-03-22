import React from 'react'
import aa from '../page/Page.module.css'
import { NavLink } from 'react-router-dom'
import img_1 from '../../foto/pngwing.com (18).png'
import img_2 from '../../foto/pngwing.com (17).png'
import img_3 from '../../foto/pngwing.com (14).png'
import img_5 from '../../foto/pngwing.com (15).png'
import img_4 from '../../foto/pngwing.com (16).png'




const Page = () => {
  return (
    <div className={aa.nav}>
     <NavLink to="/Auto"><img src={img_1} alt="" /></NavLink>
     <NavLink to="/Auto_1"><img src={img_2} alt="" /></NavLink>
     <NavLink to="/Auto_2"><img src={img_3} alt="" /></NavLink>
     <NavLink to="/Auto_3"><img src={img_4} alt="" /></NavLink>
     <NavLink to="/Auto_4"><img src={img_5} alt="" /></NavLink>
    </div>
  )
}

export default Page
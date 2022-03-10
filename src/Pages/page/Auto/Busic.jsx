import React from 'react'
import img_3 from "../../../foto/bus_mat_1.webp";
import img_4 from "../../../foto/aaaa---1.jpg";
import img_7 from "../../../foto//aa-2.jpg";
import img_8 from "../../../foto/aa--3.jpg";
import img_git1 from '../../../foto/git--1.jpg'
import img_git2 from '../../../foto/git--2-1.jpg'
import img_git3 from '../../../foto/git--2.jpg'
import img_git4 from '../../../foto/git--3-1.jpg'
import img_git5 from '../../../foto/git--3.jpg'
import img_git6 from '../../../foto/git-1-1.jpg'
import dd from '../Auto/Busic.module.css'
import { useState } from 'react';
import img_19 from "../../../foto/00--1.jpg";
import img_20 from "../../../foto/00--2.jpg";
import img_21 from "../../../foto/00--3.jpg";
import img_22 from "../../../foto/00-4.jpg";
import img_23 from "../../../foto/00-5.jpg";

const Busic = () => {
    const [menu, setMenu] = useState(img_22);
    const [hollo,setHollo] =useState (img_git1)
  return (
    <div>

             <div className={dd.ss}>
             <div className={dd.div_0}>
                <img src={menu} alt="" />
              </div>

              <div className={dd.div}>
                <div onClick={() => setMenu(img_19)} className={dd.div_1}></div>
                <div onClick={() => setMenu(img_20)} className={dd.div_2}></div>
                <div onClick={() => setMenu(img_21)} className={dd.div_3}></div>
                <div onClick={() => setMenu(img_22)} className={dd.div_4}></div>
                <div onClick={() => setMenu(img_23)} className={dd.div_5}></div>
                
              </div>
             </div>
        <div className={dd.hollo}>
              <div className={dd.foon_img}>
                  <div onClick={ ()=> setHollo (img_git1)} className={dd.foon_1}><img src={img_git6} alt="" /></div>
                  <div onClick={ ()=> setHollo (img_git3)} className={dd.foon_1}><img src={img_git2} alt="" /></div>
                  <div onClick={ ()=> setHollo (img_git5)} className={dd.foon_1}><img src={img_git4} alt="" /></div>
                </div>
             
                <div className={dd.hollo_1} >
                  <img src={hollo} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Busic
import React, { useState } from 'react'

import aa from '../re/Re.module.css'
import Video_1 from '../../video/saas.mp4'
import Footer from '../../components/Footer'
import img_1 from '../../foto/pngegg.png'
import img_2 from '../../foto/pngegg_(2).png'
import img_3 from '../../foto/pngegg_(3).png'
import img_4 from '../../foto/pngwing.com (000).png'


const Re = () => {
  const [menu, setMenu] =useState ()
  const [abdu,setAbdu] = useState('Отправить')

  const boot =()=>{
    setAbdu(
      <h1 className={aa.darc}>Успешно отправлено</h1>
    )
  }

  return (
    <div>
        <section className={aa.menu} >
            <div className={aa.menu_1}>
              

              <div className={aa.text}>

              <div className={aa.vide}> 
               <video autoPlay preload='auto'muted   >
                <source  src={Video_1}/>
              </video>
              </div>


                   <div className={aa.menu_input}>
                      <div className={aa.input}>
                        <h3>Оставить заявку</h3>
                        
                          <div  className={aa.input_1} >
                           <div> <label>Имя</label></div>
                            <div> <input type="text" id="fname" name="firstname" placeholder="Ваше имя.." /></div>
                          </div>
                          
                          <div className={aa.input_1}>
                            <label >Фамилия</label>
                            <input type="text" id="lname" name="lastname" placeholder="Ваша фамилия.." />
                          </div>
                        
                               <div >
                                 <div className={aa.i_h1}><h1>Страна</h1></div>

                                 <div className={aa.text_i}>

                                          <div className={aa.i_img1}><img onClick={()=> setMenu(
                                             <div>
                                             <div  className={aa.input_3}>
                                             <label>город</label>
                                             <select >
                                             <option ></option>
                                             <option >Алма-Ата</option>
                                             <option >Астана</option>
                                             <option >Шыкмент</option>
                                             <option >Караганда</option>
                                             <option >	Атырау</option>
                                             </select></div>


                                              
                                           </div>
                                          
                                           
                                          )} src={img_1} alt="" />

                                          </div>





                                          <div className={aa.i_img2}>
                                           <div><img onClick={()=> setMenu(
                                              <div  className={aa.input_3}>
                                              <label>город</label>
                                              <select >
                                              <option ></option>
                                              <option >	Берлин</option>
                                              <option >Гамбург</option>
                                              <option >Мюнхен</option>
                                              <option >Кёльн</option>
                                              <option >Бремен</option>
                                              </select>
                                            </div>
                                           )} src={img_2} alt="" /></div>

                                          </div>




 




                                          <div className={aa.i_img3}><img onClick={()=> setMenu(
                                             <div  className={aa.input_3}>
                                             <label>город</label>
                                             <select >
                                             <option ></option>
                                             <option >Москва</option>
                                             <option >Екатеринбург</option>
                                             <option >Махачкала </option>
                                             <option >Казань</option>
                                             <option >Красноярск</option>
                                             </select>
                                           </div>
                                          )} src={img_3} alt="" />

                                          </div>
                                          <div className={aa.i_img4}><img onClick={()=> setMenu(
                                             <div  className={aa.input_3}>
                                             <label>город</label>
                                             <select >
                                             <option ></option>
                                             <option >	Бишкек</option>
                                             <option >Ош</option>
                                             <option >Джалал-Абад</option>
                                             <option >Нарын</option>
                                             <option >Талас</option>
                                             </select>
                                           </div>
                                          )} src={img_4} alt="" />
                                          </div>
                                          </div>
                               </div>
                         

                          <div>
                            {menu}
                          </div>
                           
                          <div className={aa.input_0}>
                                                <div className={aa.gor}>

                                                 <div> <label>Телефон</label></div>
                                                <div>
                                                <select >
                                                  <option ></option>
                                                  <option >+996</option>
                                                  <option >+49</option>
                                                  <option >+7</option>
                                                  <option >+7</option>
                                                
                                                  </select>
                                                </div>
                                             </div>


                                               <div className={aa.gor_1}>
                                                 <div><label >Телефон</label></div>
                                                 <div> <input type="text" id="lname" name="lastname"  /></div>
                                              </div>
                                               </div>
                         <div  className={aa.input_2}> 
                           <h4 onClick={boot}>{abdu}</h4>
                         </div>
                      
                      </div>
                   </div>
              </div>
               
            </div>
        </section>
        
                
                
        <section className={aa.menu_2}>
        <Footer/>
        </section>
      
    </div>
  )
}

export default Re
import React, { useState } from 'react'

import aa from '../re/Re.module.css'
import Video_1 from '../../video/saas.mp4'
import Footer from '../../components/Footer'
import img_1 from '../../foto/pngegg.png'
import img_2 from '../../foto/pngegg_(2).png'
import img_3 from '../../foto/pngegg_(3).png'
import img_4 from '../../foto/pngwing.com (000).png'
import { YMaps, Placemark, Map } from 'react-yandex-maps';

const Re = () => {
  const [menu, setMenu] =useState ()
  const [abdu,setAbdu] = useState('Отправить')
  const mapData = {
    center: [42.882173, 74.584207],
    zoom: 15,
};
const coordinates = [
    [42.882173, 74.584207],
    
];

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
               <video autoPlay preload='auto'muted  loop  >
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
                                             <label>Город</label>
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
                                              <label>Город</label>
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
                                             <label>Город</label>
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
                                             <label>Город</label>
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
        
                
                <section className={aa.map}>
                <YMaps>
             
                  <Map defaultState={mapData}   width='60rem' height='500px' >
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                  </Map>
            </YMaps>
            <div>
            <div className={aa.footer_2}>
          <h1>Контакты</h1>
          <div className={aa.footer_3}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            <div>
              <h6>
               
                <b>Г.Бишкек,ул.Фрунзе 553</b>
              </h6>
            </div>
          </div>
          <div className={aa.footer_3}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>
            <div>
              <h6>
                <b>Звоните нам:</b> <br />
                +996(705)25-12-01<br />
                +996(500)50-12-50<br />
                +996(995)62-89-12
              </h6>
            </div>
          </div>
          <div className={aa.footer_3}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-clock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              </svg>
            </div>
            <div>
              <h6>
                <b>Пн-Пт</b> 10:00-18:00 <br />
                <b>Сб</b> 10:00-15:00 <br />
                <b>Вс</b> выходной
              </h6>
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
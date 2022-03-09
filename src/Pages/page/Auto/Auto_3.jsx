import React, { useState } from "react";
import dd from "../Auto/Auto_3.module.css";
import img_bus from "../../../foto/bus_2.jpg";
import Page from "../Page";
// bogal

import img_2 from "../../../foto/aaaaaaaaa.jpg";
// mator
import img_3 from "../../../foto/bus_mat_1.webp";
import img_4 from "../../../foto/aaaa---1.jpg";
import img_7 from "../../../foto//aa-2.jpg";
import img_8 from "../../../foto/aa--3.jpg";
import img_10 from "../../../foto/1111.jpg";
import img_11 from "../../../foto/2222.jpg";
import img_12 from "../../../foto/33333.jpg";
import img_13 from "../../../foto/444.jpg";
import img_14 from "../../../foto/555.jpg";
import img_15 from "../../../foto/666.jpg";
import img_16 from "../../../foto/777.jpg";
import img_17 from "../../../foto/8888.jpg";
import img_18 from "../../../foto/9999.jpg";
import img_19 from "../../../foto/00--1.jpg";
import img_20 from "../../../foto/00--2.jpg";
import img_21 from "../../../foto/00--3.jpg";
import img_22 from "../../../foto/00-4.jpg";
import img_23 from "../../../foto/00-5.jpg";
import img_24 from "../../../foto/foon.jpg";
import img_a from '../../../foto/pngwing.com (22).png'
import img_aaa from '../../../foto/pngwing.com (24).png'
import img_aa from '../../../foto/pngwing.com (23).png'
import img_b from '../../../foto/pngwing.com (25).png'
import img_bb from '../../../foto/pngwing.com (26).png'
import img_git1 from '../../../foto/git--1.jpg'
import img_git2 from '../../../foto/git--2-1.jpg'
import img_git3 from '../../../foto/git--2.jpg'
import img_git4 from '../../../foto/git--3-1.jpg'
import img_git5 from '../../../foto/git--3.jpg'
import img_git6 from '../../../foto/git-1-1.jpg'
import img_o_1 from '../../../foto/fo-1.jpg'
import img_o_2 from '../../../foto/fo-2.jpg'
import img_o_3 from '../../../foto/fo--4.jpg'
import img_o_4 from '../../../foto/fo1_3.jpg'
import img_o_7 from '../../../foto/fo1_4.jpg'
import img_o_5 from '../../../foto/fo2-1.jpg'
import img_o_6 from '../../../foto/fo2-2.jpg'
import img_o_8 from '../../../foto/fo2-3.jpg'
import Footer from "../../../components/Footer";


const Auto_3 = () => {
  const [menu, setMenu] = useState(img_22);
  const [abdu, setAbdu] = useState(img_8);
  const [hollo,setHollo] =useState (img_git1)

  return (
    <div>
      <Page />
      <section className={dd.section}>
        <div className={dd.menu}>
          <div className={dd.text}>
            <h1>Простор, комфорт и безопасность: Sprinter Микроавтобус</h1>
            <p>Перспективный, эффективный, надежный</p>
          </div>

          <div className={dd.menu_1}>
            <div className={dd.menu_1_1}>
              <h1>Перспективный, эффективный, надежный</h1>
            </div>
            <div className={dd.menu_1_1}>
              <p>
                Новый Sprinter Микроавтобус универсален: он подходит для
                выполнения любых задач транспортировки, а его дизайн никого не
                оставит равнодушным.
                <br />
                Заказчикам предлагаются три варианта длины, два варианта высоты
                крыши и до трех рядов сидений. Благодаря разнообразию вариантов
                и оснащения можно <br />
                сконфигурировать как экономичный автомобиль начального уровня,
                так и туристический автомобиль с комфортными сиденьями и
                роскошной обшивкой салона.
                <br />
                Системы интеллектуального управления и отображения информации, а
                также модульная система хранения багажа позволяют укомплектовать
                Sprinter Микроавтобус <br /> в соответствии с индивидуальными
                потребностями. Например, клиент может выбрать мультимедийную и
                вспомогательные системы. Sprinter выполнен как надежный <br />{" "}
                во всех отношениях автомобиль. Солидным основанием для этого
                служит остов кузова, особенно стабильный благодаря своей
                конструкции, составу материала <br /> и улучшенной
                антикоррозийной защите. Таким образом, высокий уровень
                инновационности и более чем 20-летний опыт позволили Sprinter
                предложить перспективные, <br /> эффективные и надежные решения
                и установить новые стандарты транспортировки, которые создадут
                благоприятные условия для развития Вашей компании.{" "}
              </p>
            </div>

            <div>
              <div className={dd.menu_1_1}>
                <h1>Основные характеристики</h1>
              </div>
              <div className={dd.menu_img_1}>
                <img src={img_bus} alt="" />
                <div>
                  <p>
                    Благодаря большому ассортименту опций оснащения Фургон
                    Sprinter можно привести в точное <br />
                    соответствие с отраслевыми и особыми требованиями. Плавная
                    градация вариантов оснащения позволяет <br />
                    сконфигурировать именно такой автомобиль, который необходим.
                  </p>
                </div>
              </div>

              <div>
                {/* 1 */}
                <div className={dd.class}>
                  <div className={dd.class_1}>
                    <div>
                      <img src={img_10} alt="" />
                      <h5>
                        Мультимедийная система MBUX с сенсорным экраном 26 см
                        (10,25 дюйма)
                      </h5>
                    </div>

                    <div>
                      <img src={img_11} alt="" />
                      <h5>Многофункциональное рулевое колесо</h5>
                    </div>
                  </div>
                  <div className={dd.class_4}>
                    <img src={img_12} alt="" />
                    <h5>Система контроля «слепых» зон</h5>
                  </div>
                </div>
                {/* 2 */}

                <div className={dd.class_2}>
                  <div className={dd.class_5}>
                    <div>
                      <img src={img_13} alt="" />
                      <h5>
                        Место для смартфона с функцией беспроводной зарядки
                      </h5>
                    </div>
                    <div>
                      <img src={img_14} alt="" />
                      <h5>
                        Многофункциональный бокс на сдвоенном сиденье,
                        портативный
                      </h5>
                    </div>
                  </div>
                  <div className={dd.class_10}>
                    {" "}
                    <img src={img_15} alt="" />
                    <h5>
                      Камера для движения задним ходом с индикацией на <br />
                      внутрисалонном зеркале заднего вида
                    </h5>
                  </div>
                </div>
                {/* 3 */}
                <div className={dd.dd}>
                  <h1>
                    Основные характеристики оснащения в серийной <br />{" "}
                    комплектации.
                  </h1>
                  <p>
                    Фургон Sprinter в серийной комплектации имеет обширное и{" "}
                    <br />
                    качественное оснащение. На традиционно для Mercedes-Benz
                    <br />
                    высоком уровне качества изготовлены элементы оснащения для
                    <br />
                    обеспечения безопасности и комфорта.
                  </p>
                </div>
                <div className={dd._3_img}>
                  <div className={dd._1_}>
                    <img src={img_16} alt="" />
                    <h5>KEYLESS-START</h5>
                  </div>
                  <div className={dd._1_}>
                    <img src={img_17} alt="" />
                    <h5>Электроусилитель руля</h5>
                  </div>
                  <div className={dd._1_}>
                    <img src={img_18} alt="" />
                    <h5>Система автоматического управления освещением</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* bus */}
         

            <div className={dd.img_text}>
              <img src={abdu} alt="" />
            </div>

            <div className={dd.text_1}>
              <div onClick={() => setAbdu(img_7)} className={dd.li_1}><div><img src={img_a} alt="" /></div><div> <h6>салон</h6></div></div>
              <div onClick={() => setAbdu(img_2)} className={dd.li_2}><div><img src={img_aa} alt="" /></div>  <div><h6>Багажник</h6></div></div>
              <div onClick={() => setAbdu(img_4)} className={dd.li_3}><div><img src={img_aaa} alt="" /></div> <div><h6>Руль</h6></div> </div>
              <div onClick={() => setAbdu(img_3)} className={dd.li_4}><div><img src={img_b} alt="" /></div> <div><h6>Моторная передача</h6></div></div>
              <div onClick={() => setAbdu(img_8)} className={dd.li_1}><div><img src={img_bb} alt="" /></div> <div><h6>Обзор</h6></div></div>
            </div>

            <div className={dd.oo_text}>
              <div><h4>Лакировка.</h4>
              <p>Описанные здесь стандартные лаки и лаки «металлик»1 представляют собой лишь небольшую <br /> часть  ассортимента доступных цветов, в которые может быть окрашен заказанный Sprinter. На заказ <br /> доступно около 200 дополнительных цветов в линейках специальных и опциональных лаков.</p></div>
            </div>

            <div className={dd.div_oo}> 
            
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
              <div className={dd.hollo_text}>
                 <h1>Обивка для сидений.</h1>
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
          
         <div className={dd.menu_img_1}>
                <div className={dd.jjjjj0}>
               
                  <h1> Mercedes-Benz Sprinter VS30 Van 5,0t 4325 EL 516CDI</h1>
             
                </div>

                <div className={dd.menu_text_1}>
                  <div  className={dd.img_4}>
                 <div className={dd.img_50}> 
                        <div> <img src={img_o_1} alt="" /></div>
                        <div><img src={img_o_2} alt="" /></div>
                  </div>

                  <div className={dd.img_50}>
                    <img src={img_o_3} alt="" />
                    <img src={img_o_4} alt="" />
                  </div>
                  </div>
                  <div>
                    <div className={dd.menu_text_10}>
                      <h6>Цена</h6>
                      <h6>30 220 009 сом</h6>
                    </div>
                    <hr />

                    <div>
                      <div className={dd.menu_text_10}>
                        <h6>Год</h6>
                        <h6>2022</h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Кузов</h6>
                        <h6> Baureihe C907 / C910 Sprinter</h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Салон</h6>
                        <h6>кожа</h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Страна сборки</h6>
                        <h6> Германия</h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Гарантия</h6>
                        <h6>1 года </h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Мощность</h6>
                        <h6> 340 л.с.</h6>
                      </div>
                      <hr />
                    </div>
                   
                  </div>
                  
                </div>
                  <div className={dd.tex_te}>
                    <h1>Mercedes-Benz Sprinter VS30 Tourist Comfort</h1>
                  </div>
                    <div className={dd.menu_text_1}>
                  <div  className={dd.img_4}>
                 <div className={dd.img_50}> 
                        <div> <img src={img_o_5} alt="" /></div>
                        <div><img src={img_o_6} alt="" /></div>
                  </div>

                  <div className={dd.img_50}>
                    <img src={img_o_7} alt="" />
                    <img src={img_o_8} alt="" />
                  </div>
                  </div>
                  <div>
                    <div className={dd.menu_text_10}>
                      <h6>Цена</h6>
                      <h6>35 220 009 сом</h6>
                    </div>
                    <hr />

                    <div>
                      <div className={dd.menu_text_10}>
                        <h6>Год</h6>
                        <h6>2022</h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Кузов</h6>
                        <h6> Baureihe C907 / C910 Sprinter</h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Салон</h6>
                        <h6>кожа</h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Страна сборки</h6>
                        <h6> Германия</h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Гарантия</h6>
                        <h6>1 года </h6>
                      </div>
                      <hr />
                      <div className={dd.menu_text_10}>
                        <h6>Мощность</h6>
                        <h6> 340 л.с.</h6>
                      </div>
                      <hr />
                    </div>
                   
                  </div>
                  
                </div>
                <div className={dd.menu_bu}>
                     <a href=""> <button>Связаться с дилером</button></a>
                    </div>
              </div>
             <Footer/>
        </div>
   
      </section>
      


    </div>
  );
};

export default Auto_3;

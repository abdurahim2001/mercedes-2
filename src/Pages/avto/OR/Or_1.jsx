import React from 'react'
import Avto from '../Avto'
import ss from '../OR/Or.module.css'
import img_1 from '../../../foto/or3.webp'
import img_2 from '../../../foto/or2.webp'
import Footer  from '../../../components/Footer.jsx'
import img_3 from '../../../foto/pngwing.com (27).png'
import img_4 from '../../../foto/pngwing.com (28).png'
import img_5 from '../../../foto/pngwing.com (29).png'
import img_6 from '../../../foto/darc--1.jpg'
import img_7 from '../../../foto/darc--2.jpeg'
import img_8 from '../../../foto/darc--3.jpg'
import img_9 from '../../../foto/darc--4.jpeg'
import y_1 from '../../../foto/Y-1.jpeg'
import y_2 from '../../../foto/y-2.jpg'
import y_3 from '../../../foto/y-3.png'
import y_4 from '../../../foto/y-4.jpg'
import y_5 from '../../../foto/yy.jpg'
import y_6 from '../../../foto/y-6.jpg'
const Or_1 = () => {
  return (

    <div>
        <Avto/>
        <section className={ss.menu}>
           
                <div className={ss.menu_text}>
                  
                <h1>Mercedes-Benz    <br />
                 Ваш идеальный Mercedes-Benz</h1>
                </div>
                <div className={ss.menu_tex_2}>
        <div> <h2>Дальше читай</h2></div>
      <div>   <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100 " fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
        </svg></div>
         </div>
            
        </section>
        <section className={ss.menu_4}>
          <div className={ss.div_1}>
           <h1>Условия аренды наших автомобилей</h1>
           <p>Условия аренды от Ам-прокат прозрачны и очень лояльны.</p>
          </div>

          <div className={ss.div_3}>
            {/* 1 */}
               <div className={ss.di_1}>
                  <div><img src={img_3} alt="" /></div> 
                  <div>
                    <h2>Документы</h2>
                    <p>Паспорт КР, Водительское</p>
                    <p>удостоверение и любой третий</p>
                    <p>документ (ИНН, загран паспорт,</p>
                    <p>военный билет и т.д.).</p>
                  </div>
                </div>
                {/* 2 */}
               <div className={ss.di_2}>
                  <div><img src={img_4} alt="" /></div>
                  <div>
                    <h2>Возраст</h2>
                    <p>Вам должно быть не менее 19 лет,</p>
                    <p>что бы иметь возможность</p>
                    <p>арендовать автомобиль в нашем</p>
                    <p>прокате.</p>
                  </div>
               </div>
               {/* 3 */}
               <div className={ss.di_3}>
                <div><img src={img_5} alt="" /> </div>
                <div>
                  <h1>Стаж</h1>
                  <p>Ваш водительский стаж должен</p>
                  <p>быть не менее 1 года. Для дорогих</p>
                  <p>автомобилей - не менее 3 лет.</p>
                
                </div>

               </div>
          </div>
        </section>
        <section className={ss.menu_0}>
          <div className={ss.di_4}>
            <div className={ss.d_1}>
              <h1>Условия страхования</h1>
            </div>
            <div className={ss.d_2}>
            <p>ОСАГО — стандартное страхование гражданской ответственности. </p>
            <p>КАСКО — с франшизой. Что это такое? Сейчас объясним.</p>
            <p>Если  ДТП происходит по вашей вине, то вы оплачиваете только сумму франшизы. Для разных классов её размер тоже разный:</p>
            <p className={ss.p_1}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>Для авто эконом класса — от 15 000</p>
            <p  className={ss.p_1}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>Для авто среднего класса — от 25 000</p>
            <p  className={ss.p_1}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>Для авто бизнес класса — от 40 000</p>
            <p  className={ss.p_1}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>Для авто премиум-класса — от 50 000</p>
            <p>Остальную сумму ремонта оплачивает страховая компания.</p>
            <p>Если ДТП происходит не по вашей вине, то никаких доплат с вас не требуется.</p>
            </div>
          </div>

        </section>
        
        <section className={ss.menu_4_1}>
          <div>
             <div><h1>Наши автомобили</h1></div>
             <div>
               <h6> Прокат предлагает своим клиентам прокат автомобилей в Бишкеке недорого при довольно широком выборе модельного ряда. <br />
                Нашими клиентами являются самые разные социальные ветви населения, которых интересует одно и то же, дешевая аренда автомобилей в Бишкеке:</h6>
                <div className={ss.menu_text_4_1}> 
                <h6 className={ss.p_2}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Бизнесмены;</h6>
                <h6 className={ss.p_2}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Новобрачные;</h6>
                <h6 className={ss.p_2}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Туристы;</h6>
                <h6 className={ss.p_2}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Просто автолюбители.</h6>
                </div>
                <h6>
                Те, кто ценит свое время и не желает долго ожидать общественного транспорта и ощущать бесконечный дискомфорт от его графика и переполненности пока <br />
                 его автомобиль находится на ремонте, однозначно выбирают дешевую аренду авто в  Бишкеке. Так, они везде успевают вовремя и не тратят кучу времени на дорогу. <br />
                  Время – деньги, это сейчас понимают абсолютно все успешные люди. <br />

Для молодоженов у  Прокат есть много заманчивых предложений. У нас вы сможете взять на прокат авто в  Бишкеке дешево и на весьма комфортных условиях. <br />
 У нас вас поджидают комфортные седаны и элегантные новенькие машины, которые помогут вам ощутить всю торжественность важного для вашей семьи дня. <br />

Приехав в столицу, очень удобно взять на прокат авто в  Бишкеке недорого, особенно если оно оснащено GPS-навигатором, так вы сможете с большим комфортом <br />
осмотреть главные достопримечательности столицы, не нервничая и не теряясь в улицах незнакомого города. <br /> 

А иногда хочется просто отдохнуть и прокатиться на действительно красивой машине, ведь жизнь коротка, так почему бы не скрасить свой день поездкой на отменном <br />
 авто?Сотрудничество с  Прокат принесет вам лишь позитивные эмоции, вас приятно удивит стоимость проката, выбор моделей и наше отношение к клиентам. 
                </h6>
                <h5>Наши машины ждут Вас!</h5>
             </div>
          </div>
        </section>
        <section className={ss.menu_1}>
        <div className={ss.aa}>
            {/* 1 */}
        <div className={ss.a_1}>
        
            <h1>Что бы арендовать автомобиль <br />
             в компании АМ-Прокат, вам нужно:</h1>
         
          </div>
          {/* 2 */}
          <div className={ss.a_1}>
              <h4>Мы попросим вас предоставить необходимые документы для оформления договора аренды автомобиля:</h4>
              <h6 className={ss.h6}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Паспорт гражданина Российской федерации</h6>
              <h6 className={ss.h6}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Водительское удостоверение</h6>
              <h6 className={ss.h6}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Любой третий документ. Это может быть, например, ИНН, заграничный паспорт, военный билет и т.д.</h6>
          </div>
          {/* 3 */}
          <div className={ss.a_1}>
            <h4>Оплатить аренду выбранного Вами автомобиля. Способов оплаты несколько. Выбирайте самый удобный: </h4>
            <h6 className={ss.h6}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Наличными в кассу при получении авто</h6>
            <h6 className={ss.h6}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Банковской картой</h6>
            <h6 className={ss.h6} > <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>Банковский перевод, с возможностью дистанционной оплаты</h6>
          </div>
          {/* 4 */}
          <div className={ss.a_1}>
            <h6>Далее остаётся только принять автомобиль по акту приема-передачи. И забрать ключи.</h6>
            <h6>Территория эксплуатации автомобилей – Москва и Московская область, выезд за пределы <br />
             Московской области осуществляется только по предварительному согласованию.</h6>
            <h6>Суточный пробег не должен превышать 300 км.  Пробег суммируется за все дни аренды. Например, <br />
             если вы берёте авто на 5 суток, то общий пробег за это время будет 1 500 км. Если же вам нужно <br />
              проехать большее расстояние, то тарифы следующие:</h6>
              <h6 className={ss.h6}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>8 сом за каждый километр перепробега для авто стоимостью до 3 000 сом/ сутки включительно;</h6>
              <h6 className={ss.h6}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>10 сом за каждый километр перепробега для автомобилей стоимостью от 3 000 сом до 8 000 сом сутки включительно;</h6>
              <h6 className={ss.h6}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
</svg>15 сом за каждый километр перепробега для машин от 8 000 сом.</h6>
          </div>
        </div>
        </section>
        <section className={ss.menu_4_2}>
    
            {/* 1 */}
            <div className={ss.im_1}>
              <div><img src={img_9} alt="" /></div>
              <div>
               <div> <h1>Mercedes-Benz S-Класс кабриолет</h1></div>
               <div className={ss.iv_1}> <p>Тип кузова</p>
                <p>Кабриолет</p></div>
               <div className={ss.iv_1}> <p>Рабочий объем</p>
                <p>3.9</p></div>
               <div className={ss.iv_1}> <p>Коробка передач</p>
                <p>автомат</p></div>
               <div className={ss.iv_1}> <p>Тип двигателя</p>
                <p>бензиновый</p></div>
                <div><a href="">ЗАБРОНИРОВАТЬ</a></div>
              </div>
            </div>
            {/* 2 */}
            <div className={ss.im_2}>
              <div><img src={img_8} alt="" /> </div>
              <div>
                <div><h1>Mercedes-Benz s-class</h1></div>
                <div className={ss.iv_1}> <p>Тип кузова</p> <p>Седан</p></div>
                <div className={ss.iv_1}> <p>Рабочий объем</p><p>3.8</p></div>
                <div className={ss.iv_1}><p>Коробка передач</p><p>автомат</p></div>
                <div className={ss.iv_1}><p>Тип двигателя</p><p>бензиновый</p></div>
               <div><a href="">ЗАБРОНИРОВАТЬ</a></div>

              </div>
            </div>
            {/* 3 */}
            <div className={ss.im_3}>
              <div><img src={img_7} alt="" /></div>
              <div>
                <div><h1>Mercedes-Benz s-class</h1></div>
                <div className={ss.iv_1}> <p>Тип кузова</p> <p>Седан</p></div>
                <div className={ss.iv_1}> <p>Рабочий объем</p><p>3.5</p></div>
                <div className={ss.iv_1}><p>Коробка передач</p><p>автомат</p></div>
                <div className={ss.iv_1}><p>Тип двигателя</p><p>бензиновый</p></div>
                <div><a href="">ЗАБРОНИРОВАТЬ</a></div>
              </div>
            </div>
            {/* 4 */}
            <div className={ss.im_4}> 
              <div><img src={img_6} alt="" /></div>
              <div>
                <div><h1>Mercedes-Benz s-class</h1></div>
                <div className={ss.iv_1}> <p>Тип кузова</p> <p>Седан</p></div>
                <div className={ss.iv_1}> <p>Рабочий объем</p><p>3.5</p></div>
                <div className={ss.iv_1}><p>Коробка передач</p><p>автомат</p></div>
                <div className={ss.iv_1}><p>Тип двигателя</p><p>бензиновый</p></div>
                <div><a href="">ЗАБРОНИРОВАТЬ</a></div>
              </div>
            </div>
          
        </section>
     
        <section className={ss.menu_2}>
        <div>
          <div className={ss.ot}>
            <h1>Отзывы клиентов</h1>
            <p>
            Мы ценим своих клиентов и всегда прислушиваемся к их пожеланиям, что бы сделать наш сервис лучше
            </p>
          </div>
          {/* 1 */}
          <div className={ss.y_ot}>
            <div className={ss.y_1}>
             <div>
             <h6> Ездил на нем в 
              Краснодарский край,<br />
              всё прошлобез происшествий.<br />
              Ребята ведутклиента от и до,<br />
              на 5+. Спасибо!</h6>
             </div>
              <div className={ss.y_1_img}><img src={y_1} alt="" /> 
              <div>
              <h4>Сергей</h4>
              <p>Отзыв с Яндекс Карт</p>
              </div>
              </div>
          
            </div>



            <div  className={ss.y_2}>
              <h6>Два раза пользовался услугами компании, <br />
               нареканий нет. Ребята работают слаженно,<br />
                нет задержек по возврату залога, оптимальное <br />
                 соотношение цена-качество, всё без обмана. Советую!
              </h6>
              <div className={ss.y_2_img}>
                <img src={y_2} alt="" />
              <div>  <h4>Евгений</h4>
              <p>Отзыв с Яндекс Карт</p>
              </div>
              </div>
            
            </div>



            <div  className={ss.y_3}>
              <h6>В целом хороший автопрокат, особенно понравилась <br />
                 клиентоориентированность, спустило в ноль колесо <br />
                  на BMW, сообщил о проблеме и мне пригнали другую<br />
                   машину в течении часа. (Просто оплатил ремонт<br />
                    колеса-300р. И поехал дальше).

              </h6>
              <div className={ss.y_3_img}>
                <img src={y_3} alt="" />
                <div> <h4>Никита</h4>
              <p>Отзыв с Яндекс Карт</p></div>
              </div>
             
            </div>



            <div  className={ss.y_4}>
              <h6>Брали Киа Рио на 3 дня, всё понравилось, сотрудники <br />
               очень вежливы, оформили договор быстро и объяснили<br />
                всё доступным языком, на сдачу машины ушло меньше<br />
                пяти минут, залог вернули сразу, плюс ко всему <br />
                 сделали скидку на первую аренду. Всем рекомендую!).

              </h6>
              <div className={ss.y_4_img}>
                <img src={y_4} alt="" />
                <div>
                <h4>Светлана</h4>
              <p>Отзыв с Яндекс Карт</p>
                </div>
              </div>
          
            </div>




            <div>
            
            </div>



            <div className={ss.y_5}>
              <h6>
              Я у них всегда беру машину. Хорошо встречают. <br />
               Вежливые, внимательные. Всё объяснят и покажут. <br />
                Предлагают кофе чай. На оформление уходит минут 15. <br />
                 Рекомендую всем.
              </h6>
              <div className={ss.y_5_img}>
                <img src={y_5} alt="" />
                <div>
                <h4>Шухрат</h4>
                 <p>Отзыв с Яндекс Карт</p>
                </div>
              </div>
           
            </div>


          <div  className={ss.y_6}>
            <h6>В связи с поломкой личного автомобиля, я первый <br />
             раз обратилась в прокат автомобилей….Мне дали <br />
              большой выбор автомобилей,из которых я выбрала <br />
               Audi A4. Оооочень ухоженная машина, никаких подстав <br />
                со стороны сотрудников не было.Каталась неделю и <br />
                 осталась очень довольна)))) Спасибо вам!

            </h6>
            <div className={ss.y_6_img}>
              <img src={y_6} alt="" />
              <div>
              <h4>Алина</h4>
            <p>Отзыв на Yell.ru</p>
              </div>
            </div>
           
          </div>
          </div>
        </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Or_1
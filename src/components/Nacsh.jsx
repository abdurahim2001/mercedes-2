import React from 'react'
import l from '../components/css/Nacsh.module.css'
import img_3 from '../foto/merc1_1.jpg'
import img_4 from '../foto/Line 3.png'
import { Carousel } from 'react-bootstrap'
import img_5 from '../foto/carusel.jpg'
import img_6 from '../foto/carusel_1.jpg'
import img_7 from '../foto/carusel_2.jpg'
import img_8 from '../foto/carusel_3.jpg'
import img_9 from '../foto/img2_6.jpg'
import img_10 from '../foto/img2_7.jpg'





const Nacsh = () => {
 

  return (
    <div className={l.menu}>
      <div className={l.text}>
        <img src={img_4} alt="" />
        <h2>Новые модели</h2>
        <img src={img_4} alt="" />
      </div>

      <div className={l.carusel}>
      <Carousel fade>
  <Carousel.Item>
   <div className={l.car_img}>
   <img
      className="d-block w-100"
      src={img_3}
      alt="First slide"
    />
   </div>
    <Carousel.Caption>
       <h3> <b>Mercedes Benz 2020 Vision</b></h3>
      <ul>
        <li>
          <a className={l.a_li} href="">Узнайть больше</a>
        </li>
      </ul>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className={l.car_img}>
      <img
      className="d-block w-100"
      src={img_7}
      alt="First slide"
      />
    </div>
    <Carousel.Caption>
      <h3><b>Mercedes Benz s-class </b></h3>
      <ul  className={l.carusel_li}>
        <li>
          <a className={l.a_li} href="">Узнайть больше</a>
        </li>
      </ul>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   <div className={l.car_img}>
   <img
      className="d-block w-100"
      src={img_8}
      alt="First slide"
    />
   </div>
    <Carousel.Caption>
      <h3>Mercedes Benz c class Cabrio 2016</h3>
      <ul  className={l.carusel_li}>
        <li>
          <a className={l.a_li} href="">Узнайть больше</a>
        </li>
      </ul>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   <div className={l.car_img}>
   <img
      className="d-block w-100"
      src={img_5}
      alt="Second slide"
    />
   </div>

    <Carousel.Caption>
      <h3>Mercedes Benz GLE  2020</h3>
      <ul className={l.carusel_li}>
        <li>
          <a className={l.a_li} href="">Узнайть больше</a>
        </li>
      </ul>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div className={l.car_img}>
    <img
      className="d-block w-100"
      src={img_6}
      alt="Third slide"
    />

    </div>
    <Carousel.Caption>
     
      <h3>Mercedes Benz e-class Coupe c 238</h3>
      <ul  className={l.carusel_li}>
        <li>
          <a className={l.a_li} href="">Узнайть больше</a>
        </li>
      </ul>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
      
        
        
     
     
      
      
    </div>
  )
}

export default Nacsh
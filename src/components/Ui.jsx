import React from "react";
import "bootstrap";
import r from "../components/css/Ui.module.css";
import img_1 from "../foto/logo.png";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import"../../src/Pages/page/Page" 

 
function Ul() {
  return (
 
    <div>
       
      <div className={r.burger}>
        <div className={r.burger_menu}>
          <Navbar className={r.menu_burger} variant="dark" expand="lg">
            <div>
              <li className={r.lia}>
                <NavLink to="/Header">
                  <img src={img_1} alt="" />
                </NavLink>
              </li>
            </div>
            <Container className={r.menu_ooo} fluid>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <div className={r.conponens}>
                  <Nav className={r.van}>
                  <NavLink to="/Page">Автомобили</NavLink>
                  </Nav>
                  <Nav className={r.van}>
                  <NavLink to="/avto">Покупка</NavLink>
                  </Nav>
                  <Nav className={r.van}>
                  <NavLink to="/Mir"> Мир Mercedes-Benz</NavLink>   
                  </Nav>

                  <div className={r.igonka}>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50 "
                        fill="currentColor"
                        class="bi bi-person-lines-fill"
                        viewBox="0  0  16 15"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
      
      <div>

      </div>
  
    </div>
  );
}

export default Ul;

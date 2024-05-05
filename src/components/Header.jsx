import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid"  id="navbar" >
        <a className="navbar-brand" href="#" id="title">
          <img
            src="/src/images/Logo.png"
            className="d-inline-block align-top"
            alt="Airbnb-logo"
          />
          airbnb
        </a>
        <ul className="navbar-nav mr-auto" id="navbar2"  >   
        <div id="navbar-center" >
          <li className="nav-item active">
            <a className="nav-link" href="#" id="estancias">
              Estancias 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="exp">
              Experiencias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.airbnb.mx/s/experiences/online" id="expl">
              Experiencias en linea
            </a>
          </li>
          </div>
          <div id="navbar-left" >
          <li className="nav-item">
            <a className="nav-link" href="#" id="house">
             Pon tu casa en airbnb
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="globe">
            <FontAwesomeIcon icon={faGlobe} />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a 
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            > <div id="icon-dropdown"> 
            <FontAwesomeIcon icon={faBars} /> 
            <FontAwesomeIcon icon={faUser} /> 
          </div> 
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Registrate
              </a>
              <a className="dropdown-item" href="#">
                Iniciar sesion
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
               Tarjetas de regalo
              </a>
              <a className="dropdown-item" href="#">
               Pon tu casa en Airbnb
              </a>
              <a className="dropdown-item" href="#">
               Centro de ayuda
              </a>
            </div>
          </li>
          </div>  
        </ul>
        </div>
      
    </nav>
  );
}

export default Header;

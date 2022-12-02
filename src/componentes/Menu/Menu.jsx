import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () =>{
    return(
        <header>
            <nav>
            <ul className="menu">
                <li className="menu__links">
                    <NavLink to="/Horario">Horario</NavLink>
                </li> 
                <li className="menu__links">
                    <NavLink to="/Cronometro">Cronómetro</NavLink>
                </li>
                <li className="menu__links">
                    <NavLink to="/Temporizador">Temporizador</NavLink>
                </li>
                <li className="menu__links">
                    <NavLink to="/Contacto">Contacto</NavLink>
                </li>
            </ul>
        </nav>
        </header> 
    );
}

export default Menu;
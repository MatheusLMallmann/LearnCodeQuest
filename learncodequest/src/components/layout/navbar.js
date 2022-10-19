import './Navbar-module.css';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return (        
        <nav className="header">   
                       
                <p className = "header-font">logo</p>

                <div className="register-buttons">
                    <NavLink to = "/Register" >
                       <button className="header-criar-conta">Register</button> 
                    </NavLink>
                    <NavLink to = "/Login" >
                       <button className="header-entrar">Entrar</button> 
                    </NavLink>
                </div>
             
        </nav> 
    );
}

export default Navbar;
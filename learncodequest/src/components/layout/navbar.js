import './Navbar-module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (        
        <nav id="navbar" className="header">        
                <Link to = "/"> <p className = "header-font">LearnCodeQuest</p></Link>
                <div>
                    <Link to = "/Register"><button className="header-criar-conta">Register</button></Link>
                    <Link to = "/Login" ><button className="header-entrar">Entrar</button></Link>
                </div>
             
        </nav> 
    );
}

export default Navbar;
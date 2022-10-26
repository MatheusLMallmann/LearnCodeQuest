import './Navbar-module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

    const telaLogin = () =>{
        //abre tela de login
    }

    const telaRegistro = () =>{
        //abre tela de registro
    }

    return (        
        <nav id="navbar" className="header">        
                <Link to = "/"> <p className = "header-font">LearnCodeQuest</p></Link>
                <div className='botoesNav'>
                    <Link to = "/Register"><button className="header-criar-conta">Criar conta</button></Link>
                    <Link to = "/Login" ><button className="header-entrar">Entrar</button></Link>
                </div>
             
        </nav> 
    );
}

export default Navbar;
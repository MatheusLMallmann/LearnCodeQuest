import './navbarStyles.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profileImg from '../../../img/unknown.png'

export const Navbar = () => {

    var tela;
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    };

    const data = localStorage.getItem("dadosUser");
    console.log(data);
    
    if(data !== null){
        tela = 
            <div>
                <button onClick={handleLogout} className='bttnLogout'>Logout</button>
                <img className= 'img' src={profileImg} alt = "imagemDaPage" />
            </div>
    }else{
        tela = <div>
                    <Link className='bttnCriarConta'  to="/register">Criar conta</Link>
                    <Link className='bttnRegistrar'  to="/login"><button className="header-entrar">Entrar</button></Link>
                </div>
    }
    


    return (        
        <nav id="navbar" className="header">  
                <Link className = "header-font" to= "/">LearnCodeQuest</Link>
                {tela}
        </nav> 
    );
}

export default  Navbar;

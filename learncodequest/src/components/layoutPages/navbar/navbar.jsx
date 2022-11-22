import './navbarStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../../img/unknown.png'

export const Navbar = () => {

    var tela

    const handleLogout = (e) => {
        e.preventDefault();
    };

    const isLogged = (props) => {
        const logged = props.isLoggedIn;
        if(logged){
            tela = 
                <div> 
                    <Link className='bttnCriarConta'  to="/"><button onClick={handleLogout}>Logout</button></Link>
                    <img src={profileImg} alt = "imagemDaPage" />
                </div> 
        }else{
            tela = <div>
                        <Link className='bttnCriarConta'  to="/register">Criar conta</Link>
                        <Link className='bttnRegistrar'  to="/login"><button className="header-entrar">Entrar</button></Link>
                    </div>
        }
    }
  
    tela = <div>
                <Link className='bttnCriarConta'  to="/register">Criar conta</Link>
                <Link className='bttnRegistrar'  to="/login"><button className="header-entrar">Entrar</button></Link>
            </div>

    return (        
        <nav id="navbar" className="header">  
                <Link className = "header-font" to= "/">LearnCodeQuest</Link>
                {tela}
        </nav> 
    );
}

export default  Navbar;

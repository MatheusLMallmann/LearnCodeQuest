import './navbarStyles.css';
import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../../img/unknown.png'

export const Navbar = () => {

    var tela

    const handleLogout = (e) => {
        e.preventDefault();
    };

    const logged = useState.logged;

    
    if(logged){
        tela = 
            <div>
                <Link to="/"><button onClick={handleLogout} className='bttnLogout'>Logout</button></Link>
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
                <Link className = "header-font" to= "/logado">LearnCodeQuest</Link>
                {tela}
        </nav> 
    );
}

export default  Navbar;

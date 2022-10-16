import './Navbar-module.css';

function Navbar(){
    return (        
        <div className="header">              
            <p className = "header-font">logo</p>

            <div className="register-buttons">
                <button className="header-criar-conta">Criar conta</button>
                <button className="header-entrar">Entrar</button> 
            </div>           
        </div> 
    );
}

export default Navbar;
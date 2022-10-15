import './navbar-module.css';

function Navbar(){
    return (        
        <div className="header">              
            <p className = "header-font">logo</p>

            <div className="register-buttons">
                <p className="header-criar-conta">Criar conta</p>
                <button className="header-entrar">Entrar</button> 
            </div>           
        </div> 
    );
}

export default Navbar;
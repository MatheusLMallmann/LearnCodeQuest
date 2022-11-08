import './styles.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutComponents } from '../../components/layoutComponents';



export const Login = () => {
    
    const[email, setEmail] = useState("")

    const[password, setPassword] = useState("")
    
    
    return (
        <LayoutComponents>
            <form className='login-form'>
                <span className='login-form-title'>Welcome!</span>
                <div className='wrap-input'>
                    <input 
                        className={email !== "" ? 'has-val input' : 'input'}
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Email'></span>
                </div>
                <div className='wrap-input'>
                    <input 
                        className={password !== "" ? 'has-val input' : 'input'}
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='password'></span>
                </div>

                <div className='container-login-form-btn'>
                    <button className='login-form-btn'>Login</button>
                </div>

                <div className='text-center'>
                    <span className='regiterTxt'>Não possui conta? </span>
                    <Link className='linkToRegister' to='/register'>Criar Conta.</Link>
                </div>

                <div className='text-center' >
                    <Link className='homePageButton' to='/'>Home Page</Link>
                </div>

            </form>
        </LayoutComponents>
             
    )
}

export default Login
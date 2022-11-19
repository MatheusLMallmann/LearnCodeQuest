import { LayoutComponents } from '../../components/layoutComponents'
import './styles.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const Register = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const[lastName, setLastName] = useState("");
    const[erro, setErro] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup  = () => {
        if(!email | !name | !lastName | !password){
            setErro('Preencha todos os campos');
            return;
        }

        const res = signup(email, password);

        if(res){
            setErro(res);
            return;
        }

        alert('Usuário cadastrado com sucesso');
        navigate('/');
    };



    return(
        <LayoutComponents>
            <form className='login-form'>
                <span className='login-form-title'>Criar Conta</span>
                
                <div className='wrap-input'>
                    <input 
                        className={name !== "" ? 'has-val input' : 'input'}
                        type='string'
                        value={name}
                        onChange={e => setName(e.target.value, setErro(''))}
                    />
                    <span className='focus-input' data-placeholder='Nome'></span>
                </div>

                <div className='wrap-input'>
                    <input 
                        className={lastName !== "" ? 'has-val input' : 'input'}
                        type='string'
                        value={lastName}
                        onChange={e => setLastName(e.target.value, setErro(''))}
                    />
                    <span className='focus-input' data-placeholder='Sobrenome'></span>
                </div>

                <div className='wrap-input'>
                    <input 
                        className={email !== "" ? 'has-val input' : 'input'}
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value, setErro(''))}
                    />
                    <span className='focus-input' data-placeholder='Email'></span>
                </div>

                <div className='wrap-input'>
                    <input 
                        className={password !== "" ? 'has-val input' : 'input'}
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value, setErro(''))}
                    />
                    <span className='focus-input' data-placeholder='password'></span>
                </div>

                <div>{erro}</div>

                <div className='container-login-form-btn'>
                    <button className='login-form-btn' onClick={handleSignup }>Registrar</button>
                </div>

                <div className='text-center'>
                    <span className='regiterTxt'>Já possui conta? </span>
                    <Link className='linkToLogin' to='/login'>Fazer Login.</Link>
                </div>

                <div className='text-center' >
                    <Link className='homePageButton' to='/'>Home Page</Link>
                </div>

            </form>
        </LayoutComponents>
    )
}
import './styles.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import  LayoutLogado  from '../../components/layoutConteudos/layoutLogado'


export const Bootcamp = () => {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/desafio');
    }

    return(
        <LayoutLogado>
            <h1 className='title'>Bootcamp</h1>
            <button onClick={handleClick}>DESAFIO</button>
        </LayoutLogado>
    )
}

export default Bootcamp;
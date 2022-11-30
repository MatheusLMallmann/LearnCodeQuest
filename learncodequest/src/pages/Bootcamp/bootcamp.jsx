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
            <div className='divBoot'>   
                <h1 className='title'>Bootcamp</h1>
                <button className="bttnDesafio"onClick={handleClick}>Desafio</button>
            </div> 
        </LayoutLogado>
    )
}

export default Bootcamp;
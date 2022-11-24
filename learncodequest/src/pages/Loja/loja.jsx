import './lojaStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/javaBootcamp.png'
import  LayoutLogado  from '../../components/layoutConteudos/layoutLogado'

export const Bootcamp = () => {

    return(
        <LayoutLogado>
            <h1 className='title'>Loja</h1>
        </LayoutLogado>
    )

}

export default Bootcamp;
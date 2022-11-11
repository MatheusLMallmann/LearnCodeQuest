import './styles.css';
import React from 'react';
import  LayoutConteudos  from '../../components/layoutConteudos/layoutConteudos'


export const Desafio = () => {

    return(
        <LayoutConteudos>
            <h1 className='title'>Titulo</h1>
            <h4 className='content'>Texto do desafio que vai ser exibido por uma váriavel longo para poder ver como ele vai quebrar a linha e exibir tudo da maneira que eu quero. tenho que seguir digitandinho para saberzinho se isso vai ficar muito longo dentro do site</h4>
        </LayoutConteudos>
    )

}

export default Desafio;
import './desafioStyles.css';
import { React, useState, useEffect, useCallback, useRef } from 'react';
import LayoutLogado  from '../../components/layoutConteudos/layoutLogado'
import CodeMirror from '@uiw/react-codemirror';
import { sublime } from '@uiw/codemirror-theme-sublime';
import { python } from '@codemirror/lang-python';
import axios from "axios";

export const Desafio = () => {
    const [code, setCode] = useState("def add(a,b):\n return a");
    const [desafioAtual, setDesafioAtual] = useState(1);
    const challenges = useRef([]);
    
    
    const fetchChallenges = useCallback(async () => {
        const response = await axios.get('https://api-learncodequest.herokuapp.com/bootcamp/retrievechallenges');
        if (response.status !== 200){
            console.log('error: ', response.error);
            return;
        }
    
        challenges.current = response.data.desafios;
        console.log(JSON.stringify(challenges));
        
    }, [challenges]);
    
    useEffect(() => {
        fetchChallenges();
    }, [fetchChallenges]);

    const handleCode = () => {
        console.log(code);

        axios({
            method: 'POST',
            url: 'https://api-learncodequest.herokuapp.com/bootcamp/python/desafio2',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                code: code
            }
        })
        .then(function (response) {
            if(response.status !== 200){
                console.log('error: ', response.data.error);
                return;
            }

            console.log(response.data);
        })
        .catch((err) => console.log(err))
    }

    return(
        <LayoutLogado>
            <div className="challenge">
                {Object.keys(challenges.current).map((key) => {
                //setDesafioAtual(0);
                   //if(key === desafioAtual){
                        return (
                            <div>
                                <h1 className='title'>{challenges.current[key].titulo}</h1>
                                <p className='descricao'>{challenges.current[key].descricaoDesafio}</p>
                                <div className='PyCode'>
                                    <div className='Pycode-header'>
                                        <CodeMirror
                                            value={challenges.current[key].initialCode}
                                            height='5rem'
                                            width='60rem'                    
                                            extensions={[python()]}
                                            theme={sublime}
                                            onChange={(editor) => {
                                                setCode(editor);
                                            }}
                                        />
                                        </div>
                                    <button className='bttnEnviarDesafio'onClick={handleCode}>Enviar desafio</button>
                                </div>
                            </div>
                        )
                    //}
                }
                )}
            </div>
        </LayoutLogado>
    )
}

export default Desafio;
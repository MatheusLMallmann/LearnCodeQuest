import './histStyles.css';
import { React, useState } from 'react';
import  LayoutLogado  from '../../components/layoutConteudos/layoutLogado'


export const Desafio = () => {

    const [userMock, setUserMock] = useState({
        "id": "63812d967f31323388bdb38b",
        "name": "Stomr",
        "learnPoints": 0,
        "level": 0,
        "purchasesHistoric": [
            {
                "productId": "fifa_pc",
                "productName": "FIFA 23",
                "productActivationCode": "XXX",
                "purchaseDate": "2022-11-25T21:03:56.590Z",
                "_id": "63812dbc7f31323388bdb395"
            },
            {
                "productId": "fifa_ps",
                "productName": "FIFA 23",
                "productActivationCode": "XXX",
                "purchaseDate": "2022-11-25T21:12:36.446Z",
                "_id": "63812fc4c28efad53e3a3651"
            },
            {
                "productId": "mw_pc",
                "productName": "Call of Duty Modern Warfare II",
                "productActivationCode": "XXX",
                "purchaseDate": "2022-11-25T21:13:18.903Z",
                "_id": "63812feec28efad53e3a365c"
            },
            {
                "productId": "fifa_pc",
                "productName": "FIFA 23",
                "productActivationCode": "XXX",
                "purchaseDate": "2022-11-27T21:05:40.205Z",
                "_id": "6383d124cb1c9b2cbda218f8"
            }
        ]        
    })

    function handleRevealCode(){
        return null;
    }

    let historic = userMock.purchasesHistoric;
    
    return(
        <LayoutLogado>
            <h1 className='title'>Histórico</h1>
            <div className="Historio">      
                <div className="divPrincipal">                    
                    {Object.keys(historic).map((key) => {
                        return (
                            <div className="prod_grid" id={historic[key].productId} key={key}>
                                <p className="produtoName" value={historic[key].productName}>{historic[key].productName}</p>
                                <p className="produtoPrice" value={historic[key].purchaseDate} >{historic[key].purchaseDate}</p>
                                <button className='bttnHist'onClick={handleRevealCode} value={Object.values(historic[key])}>Revelar Código</button>
                            </div>
                        )
                    })}
                </div>
            </div> 
        </LayoutLogado>
    )

}

export default Desafio;
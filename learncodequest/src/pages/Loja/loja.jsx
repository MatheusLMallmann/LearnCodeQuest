import './lojaStyles.css';
import { React, useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import  LayoutLogado  from '../../components/layoutConteudos/layoutLogado'
import { json, Link } from 'react-router-dom';
//import img from '../../img/javaBootcamp.png';

export const Loja = () => {
    const[products, setProducts] = useState([])
    let carteira = 10000
    let playstation = false
    let xbox = false
    let pc = false

    const fetchProducts = useCallback(async () => {
        const response = await axios.get('http://localhost:80/store/produtos');
        if (response.status !== 200)
            return json({ error: 'Erro ao carregar carrinho!'});

        setProducts(products => [...response.data.produtos]);
    }, [setProducts]);

    function handleFiltro(){
        return null;
    }
    
    function handleSale(){
        return null;
    }

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return(
        <LayoutLogado>
            <h1>LOJA</h1>
            <div className="Store">      
                <div className="divStore">
                    <div className="divA">
                        <div className="filter">
                            <p>Filtrar:</p>
                            <div className="ckb_ps">
                                <input type="checkbox" className="ck_playstation" value={playstation} onChange={handleFiltro}/>
                                <p>Playstation</p>
                            </div>
                            <div className="ckb_xbox">
                                <input type="checkbox" className="ck_xbox" value={xbox} onChange={handleFiltro}/>
                                <p>Xbox</p>
                            </div>
                            <div className="ckb_pc">
                                <input type="checkbox" className="ck_pc" value={pc} onChange={handleFiltro}/>
                                <p>PC</p>
                            </div>
                        </div>
                    </div>
                    <div className="divB">
                        {Object.keys(products).map((key) => {
                            return (
                                <div className="prod_grid" id={products[key].id} key={key}>
                                    <p className="produtoName" value={products[key].name}>{products[key].name}</p>
                                    <p className="produtoPrice" value={products[key].price} >{products[key].price}</p>
                                    <p className="produtoCategory" value={products[key].category}>{products[key].category}</p>
                                    <button onClick={handleSale} value={Object.values(products[key])} disabled={products[key].price > carteira}>Comprar</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div> 
        </LayoutLogado>
    )

}

export default Loja;
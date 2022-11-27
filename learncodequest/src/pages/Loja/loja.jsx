import './lojaStyles.css';
import { React, useState, useCallback, useEffect, useRef } from 'react';
import axios from 'axios';
import  LayoutLogado  from '../../components/layoutConteudos/layoutLogado'
import { json, Link } from 'react-router-dom';
//import img from '../../img/javaBootcamp.png';

export const Loja = () => {
    const[products, setProducts] = useState([])
    const[allProducts, setAllProducts] = useState([])    
    const playstation = useRef(false)
    const xbox = useRef(false)
    const pc = useRef(false)
    let carteira = 10000

    const fetchProducts = useCallback(async () => {
        const response = await axios.get('http://localhost:80/store/produtos');
        if (response.status !== 200)
            return json({ error: 'Erro ao carregar carrinho!'});

        setProducts(products => [...response.data.produtos]);
        setAllProducts(allProducts => [...response.data.produtos]);
    }, [setProducts], [allProducts]);

    function handleInputFiltro(e){
        let input = e.target.name;
        if(input === 'playstation'){
            (playstation.current) ? playstation.current = false : playstation.current = true
        } else if(input === 'xbox'){
            (xbox.current) ? xbox.current = false : xbox.current = true
        } else {
            (pc.current) ? pc.current = false : pc.current = true
        }
        handleFiltro();
    }
    
    function handleFiltro() {
        let filtroProdutos = [];
        let prod = {};

        allProducts.forEach(products => {
            prod = {
                id: products.id,
                name: products.name,
                price: products.price,
                category: products.category
            }

            if(playstation.current && products.category === 'PLAYSTATION'){
                console.log('adicionou ps');
                filtroProdutos = [...filtroProdutos, prod];
            }

            if(xbox.current && products.category === 'XBOX'){
                console.log('adicionou xbox');
                filtroProdutos = [...filtroProdutos, prod];
            }

            if(pc.current && products.category === 'PC'){
                console.log('adicionou pc');
                filtroProdutos = [...filtroProdutos, prod];
            }

            
        })

        if(!playstation.current && !xbox.current && !pc.current){
            setProducts(allProducts);
            return;
        }

        console.log(filtroProdutos);
        setProducts(filtroProdutos);
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
                                <input type="checkbox" className="ck_playstation" name="playstation" value={playstation} onChange={handleInputFiltro}/>
                                <p>Playstation</p>
                            </div>
                            <div className="ckb_xbox">
                                <input type="checkbox" className="ck_xbox" name="xbox" value={xbox} onChange={handleInputFiltro}/>
                                <p>Xbox</p>
                            </div>
                            <div className="ckb_pc">
                                <input type="checkbox" className="ck_pc" name="pc" value={pc} onChange={handleInputFiltro}/>
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
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

    // CRIAR DUAS VARIÁVEIS PARA RECEBER: 
    //1) EMAIL DO USUÁRIO (ALTERAR LINHA 88 PARA ENVIAR O EMAIL DO USUÁRIO A API)
    //2) SALDO DO USUÁRIO (ALTERAR LINHA 138 PARA VALIDAR O SALDO E O PREÇO DO PRODUTO NA TAG DISABLE DO BUTTON)
    // APÓS ISSO, APAGAR ESSA VARIÁVEL CARTEIRA (L20)

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
                filtroProdutos = [...filtroProdutos, prod];
            }

            if(xbox.current && products.category === 'XBOX'){
                filtroProdutos = [...filtroProdutos, prod];
            }

            if(pc.current && products.category === 'PC'){
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

    function handleSale(e){
        const produto = e.target.value.split(',');
        console.log(produto);
        axios({
            method: 'POST',
            url: 'http://localhost:80/auth/shop',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'email': 'storm@gmail.com.br',
                'productId': produto[0],
                'productName': produto[1],
                'productPrice': Number(produto[2])
            }
        })
        .then(function (response) {
            if(response.status !== 200){
                console.log('error: ', response.data.error);
                return;
            }

            console.log('response: ' + response.data);
        })
        .catch((err) => console.log(err.response.data))
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
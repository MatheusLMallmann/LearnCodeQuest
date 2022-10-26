import "./Home-module.css";
import React from 'react';
import imgTela from "../../img/banner-API.png"

function Home(){

    return (
        <div>
            <div className="homePage">
                <h2 className="appName">LearnCodeQuest</h2>
                <text className="textoPage"> Aprenda de uma forma divertida <br/> e ganhe recompensas.</text>
            </div>
            <div className="imagem">
                <img src={imgTela} alt = "imagemDaPage" />
            </div>
        </div>
    )
}

export default Home
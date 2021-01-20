import React from 'react';
import './style.css';

import {TiScissorsOutline} from 'react-icons/ti';
import SmartArt from '../../assets/smart-art.png';

import Search from '../../assets/location.gif';

import Header from '../../components/header';


function Home(){
    return(
        <div>
            <Header/>
            <section className="banner">
                <div className="content-banner">
                    <h1>A MAIOR REDE DE BARBEIROS DO BRASIL</h1>
                    <h2>Encontre o melhor serviço prestado, favorite o seu barbeiro predileto.</h2>  
                </div>
                <a href="#" className="more-info">
                        SAIBA MAIS 
                        <TiScissorsOutline size={30} style={{marginLeft:10}}></TiScissorsOutline>
                </a>
            </section>
            <section className="info-app">
                <div>
                    <h1>NOSSO APP</h1>
                    <img src={SmartArt} alt="SmartPhone"/>
                </div>
                <div>
                    <h2>APLICATIVO DEV BABERS</h2>
                    <span>
                    Com nosso aplicativo você pode:
                    Agendar horários com nossos barbeiros;
                    Favoritar seu barbeiro preferido;
                    Mais comodidade e uma busca mais precisa dos barbeiros da sua região!
                    </span>
                </div>
                <figure>
                  
                </figure>
            </section>
            <section className="container-about">
                <h1>ENCONTRE SEU BARBEIRO</h1>
                <img src={Search} alt="location"/>
            </section>
            
        </div>
    );
}

export default Home;
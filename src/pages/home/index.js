import React, {useContext} from 'react';
import './style.css';

import {TiScissorsOutline} from 'react-icons/ti';
import SmartArt from '../../assets/smart-art02.png';

import GooglePlayLogo from '../../assets/google-play.png';

import Header from '../../components/header';
import Footer from '../../components/footer';
import { MyContext } from '../../contexts';



function Home(){
    const {theme,SetTheme} = useContext(MyContext);
    return(
        <div>
            <Header/>
            <section className="banner">
                <div className="content-banner">
                    <h1>A MAIOR REDE DE BARBEIROS DO BRASIL</h1>
                    <h2>Encontre o melhor serviço prestado, favorite o seu barbeiro predileto.</h2>  
                </div>
                <a href="/" className="more-info">
                        SAIBA MAIS 
                        <TiScissorsOutline size={30} style={{marginLeft:10}}></TiScissorsOutline>
                </a>
            </section>
            <section className="container-app" style={ theme === 'light' ? {
                    background:'#f8f8f8',
                }
                :
                {
                    background:'-webkit-gradient(linear, 28% 78%, 29% 28%, from(#000000), to(#070C18))'
                }
                }>
                <div>
                    <h1>NOSSO APP</h1>
                    <img src={SmartArt} alt="SmartPhone"/>
                </div>
                <div className="container-content-app">
                    <div>
                        <hgroup>
                            <h2>Baixe nosso App - Barbers</h2>
                            <h3>Com nosso aplicativo você pode:</h3>
                        </hgroup>
                    </div>
                    <div>
                        <ul>
                            <li>Agendar horários com nossos barbeiros.</li>
                            <li>Favoritar seu barbeiro preferido.</li>
                            <li>Mais comodidade e uma busca mais precisa dos barbeiros da sua região!</li>
                        </ul>
                    </div>
                    <div>
                        <a href="https://play.google.com/store">
                            <img  src={GooglePlayLogo} alt="logo-googleplay" id="icons-store"/>
                        </a>
                    </div>
                </div>
            </section>
            <Footer/>
            
        </div>
    );
}

export default Home;
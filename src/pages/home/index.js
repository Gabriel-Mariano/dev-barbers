import React from 'react';
import './style.css';


import Header from '../../components/header';

function Home(){
    return(
        <div>
            <Header/>
            <div className="banner">
                <div className="content-banner">
                    <h1>A MAIOR REDE DE BARBEIROS DO BRASIL</h1>
                    <h2></h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
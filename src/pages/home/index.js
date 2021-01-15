import React from 'react';
import './style.css';

import Header from '../../components/header';

function Home(){
    return(
        <div>
            <Header/>
            <div className="banner">
                <div className="">
                    <h1>A MAIOR REDE DE BARBEIROS DO BRASIL</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
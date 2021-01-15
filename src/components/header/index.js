import React from 'react';

import Logo from '../../assets/identidadeVisualTransparent.png';
import './style.css';

function Header(){
    return(
        <header>
           <img src={Logo} alt="logo"/>
           <span>BARBERS</span>         
        </header>
    );
}

export default Header;
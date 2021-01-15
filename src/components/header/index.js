import React from 'react';

import Logo from '../../assets/identidadeVisualTransparent.png';
import './style.css';

function Header(){
    return(
        <header>
            <figure className="visual-identity">
                <img src={Logo} alt="logo"/>
                <figcaption>
                {/*    <span>DEV/BARBERS</span> */}
                </figcaption>
            </figure>
           <nav className="menu-principal">
               <ul>
                   <li><a href="#">HOME</a></li>
                   <li><a href="#">SOBRE</a></li>
                   <li><a href="#">NOSSO APP</a></li>
               </ul>
            </nav>         
        </header>
    );
}

export default Header;
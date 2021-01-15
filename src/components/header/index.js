import React from 'react';
import {FaBars} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';

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
               <button className="" id="button-open">
                   <FaBars color="#FFF" size={24}></FaBars>
               </button>
               <button className="" id="button-close">
                   <MdClose color="#FFF" size={24}></MdClose>
               </button>
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
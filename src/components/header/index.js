import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';

import Logo from '../../assets/identidadeVisualTransparent.png';
import './style.css';

function Header(){
    const [activeMenu,SetActiveMenu] = useState(false);

    function openMenu(){
        SetActiveMenu(true);
    }
    function closeMenu(){
        SetActiveMenu(false);
    }
    return(
        <header>
            <figure className="visual-identity">
                <img src={Logo} alt="logo"/>
                <figcaption>
                {/*    <span>DEV/BARBERS</span> */}
                </figcaption>
            </figure>
            <button className="" id="button-open" onClick={openMenu}>
                    <FaBars color="#FFF" size={24} ></FaBars>
            </button> 
           <nav className="menu-principal" style={
               activeMenu === true ? {
                   display:'initial'
                   
               } : {
                   
               }
           }>
               {
                   /*
                   activeMenu === false ?
                    <button className="" id="button-open" onClick={openMenu}>
                        <FaBars color="#FFF" size={24} ></FaBars>
                    </button> 
                    
                    :

                    <button className="" id="button-close" onClick={closeMenu}>
                        <MdClose color="#FFF" size={24}></MdClose>
                    </button>

                    */
               }
               
               <button className="" id="button-close" onClick={closeMenu}>
                    <MdClose color="#FFF" size={34}></MdClose>
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
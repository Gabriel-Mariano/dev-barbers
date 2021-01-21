import React, { useContext, useState } from 'react';
import {FaBars, FaToggleOff, FaToggleOn} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';

import {MyContext} from '../../contexts';

import Logo from '../../assets/identidadeVisualTransparent.png';
import './style.css';

function Header(){
    const [activeMenu,SetActiveMenu] = useState(false);
    const {theme,SetTheme} = useContext(MyContext);

    function openMenu(){
        SetActiveMenu(true);
    }
    function closeMenu(){
        SetActiveMenu(false);
    }

    function toogleTheme(){
        if(theme === 'light'){
            SetTheme('dark');
        }else{
            SetTheme('light');
        }
        
    }
    return(
        <header>
            <figure className="visual-identity">
                <img src={Logo} alt="logo"/>
                <figcaption>
                {/*    <span>DEV/BARBERS</span> */}
                </figcaption>
            </figure>
            <button id="button-open" onClick={openMenu}>
                    <FaBars color="#FFF" size={24} ></FaBars>
            </button> 
           <nav className="menu-principal" style={
               activeMenu === true ? {
                   display:'initial'
                   
               } : {
                   display:'none'
               }
           }> 
               <button id="button-close" onClick={closeMenu}>
                    <MdClose color="#FFF" size={34}></MdClose>
               </button>
               <ul>
                   <li><a href="#">HOME</a></li>
                   <li><a href="#">SOBRE</a></li>
                   <li><a href="#">NOSSO APP</a></li>
                   <li onClick={toogleTheme}>
                    { theme === 'light' ?
                        <FaToggleOff size={25} color="#fff"/>
                            :
                        <FaToggleOn size={25} color="#fff"/>
                    }
                   </li>
               </ul>
            </nav>         
        </header>
    );
}

export default Header;
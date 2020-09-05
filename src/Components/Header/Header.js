import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const Header = (props) => {
    
    return (
        <div className="container header">
           <a href="/class"><img src={props.image} alt=""/>
           <strong><h1>Online Class For Developing Skills <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></h1></strong></a>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from "../../assets/logo_tienda_de_bordado.png"
import "./Sidebar.css"

export const Sidebar = () => {
    return<div>
        <img src={logo} alt="logo"/>
        <ul className='links'>
            <li><a href=""></a>Nombres</li>
            <li><a href=""></a>Material</li>
            <li><a href=""></a>Bordado</li>
            <li><a href=""></a>Ultimo producto</li>
            <li><a href=""></a>Total de productos</li>
        </ul>
    </div>;
};
import React from "react";
import { useEffect, useState } from "react";
import "./style.css";

const Soup = () =>{
    const [elemento, setElemento] = useState('--');

    const platoClick = (e)=>{
        e.stopPropagation();
        console.log('Tocaste el Plato')
        setElemento(e.target.className);
    }
    const sopaClick = (e)=>{
        e.stopPropagation();
        console.log('Tocaste la Sopa')
        setElemento(e.target.className);
    }
    const moscaClick = (e)=>{
        e.stopPropagation();
        console.log('Tocaste la Mosca')
        setElemento(e.target.className);
    }

    return(
        <>
        {elemento}
        <div className="Sopa" onClick={platoClick}>
            <div className="Mosca" onClick={moscaClick}></div>
            <div className="item1" onClick={sopaClick}></div>
            <div className="item2" onClick={sopaClick}></div>
            <div className="item3" onClick={sopaClick}></div>
            <div className="item4" onClick={sopaClick}></div>
        </div>
        </>
    )
}

export default Soup;
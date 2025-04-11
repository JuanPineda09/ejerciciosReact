import React from "react";
import { useEffect, useState } from "react";
import "./style.css";

const Reloj = ()=>{
    const [tiempo, setTiempo] = useState(new Date());


    useEffect (()=>{
        const intervalId = setInterval(() => {
            setTiempo(new Date());
        }, 1000); 
        return clearInterval(intervalId);
    },[])

    const segundos = {transform: `rotate(${tiempo.getSeconds() *6}deg)` } 
    const minutos = {transform: `rotate(${tiempo.getMinute() *6}deg)` } 
    const horas = {transform: `rotate(${tiempo.getHours() *30}deg)` } 
    
    return(
        <>
        <h1>RELOJ</h1>
        <div className="Fondo">
            <div className="Horario" style={segundos}></div>
            <div className="Minutero" style={minutos}></div>
            <div className="Secundero" style={horas}></div>
        </div>
        </>
    )
}

export default Reloj;
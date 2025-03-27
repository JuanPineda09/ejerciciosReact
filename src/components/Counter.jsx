import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
 const Counter = ()=>{

    const [count, setCount] = useState(10); 
    const [timer, setTimer] = useState(false);
    
    const detenerContador = () =>{
        setTimer(false);
    };
    const reiniciarContador = () =>{
        setTimer(false);
        setCount(10)
    };
    const iniciarContador = () =>{
        reiniciarContador();
        setTimer(true);
    };
    useEffect(() =>{
        if (timer) {
        const intervalId = setInterval(()=>{
            
             if (count == 0) {
                detenerContador();
             } else {
                setCount(prevCount => prevCount - 1);
             }   
        },1000);
        return () => clearInterval(intervalId)
    }    
    }, [timer, count]);
    return(
        <>
            <h1>{count}</h1>
            <button className={timer == true ?"btnInit":""} onClick={iniciarContador}>{timer == true ? "Reiniciar":"Iniciar"}</button>
            <button onClick={detenerContador}>Detener</button>
        </>
    );
}

export default Counter;
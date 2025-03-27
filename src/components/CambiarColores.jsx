import React from "react";
import { useState } from "react";
import "./style.css";

const CambiarColor =()=>{

    const [clase, setClase]= useState('');

    const clases = ['claseA', 'claseB', 'claseC'];

    const selectClase=(nombre)=>{
        setClase(nombre)
    }

    return(
        <>
        <h1 className={clase}>Cambiador de Color</h1>

        {clases.map((nombre, index)=>(
            <button key={index} onClick={()=>selectClase(nombre)}>{nombre}</button>
        ))
        }
        </>
    )
}

export default CambiarColor;
import React,{useState} from "react";
import './style.css';

const Dado =()=>{
    
    const [numero,setNumero] = useState(1)

    const round = ()=>{
        setNumero(Math.floor(Math.random()*6 + 1));
    } 
    
    return(
        <>
        <h1>{numero}</h1>
        <button onClick={round}> Tirar el dado</button>
        </>
    )
}

export default Dado;
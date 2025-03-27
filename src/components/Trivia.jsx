import React from 'react';
import { useState } from 'react';
import './style.css';


const Trivia =()=>{
    const [puntos, setPuntos] = useState(0);
    const [preguntaIndex, setPreguntaIndex] = useState(0);
    const [mostraRespuesta, setMostraRespuesta] = useState(false);

    const preguntas = [
        {
            pregunta: '¿Cuál es la capital de Canadá?',
            opciones: ['Ottawa','Toronto', 'Montreal', 'Vancouver'],
            respuesta: 'Ottawa'
        },
        {
            pregunta: 'Cuál es el mamífero más grande de la Tierra?',
            opciones: ['Elefante','Jirafa', 'Cocodrilo', 'Ballena'],
            respuesta: 'Ballena'
        },
        {
            pregunta: '¿Cuál es el río más largo del mundo?',
            opciones: ['Danubio','Nilo', 'Amarillo', 'Amazonas'],
            respuesta: 'Nilo'
        }
    ]
    
    const preguntaActual = preguntas[preguntaIndex]
    
    const validarRespuesta = (respuesta)=>{
        setMostraRespuesta(true);
        if (respuesta === preguntaActual.respuesta) {
            setPuntos(puntos + 1);
        }
    }

    const siguientePregunta =()=>{
        setMostraRespuesta(false);

        if (preguntaIndex < preguntas.length - 1) {
            setPreguntaIndex(preguntaIndex + 1);
        } else {
            setPreguntaIndex(0);
        }
    }


    return(
        <>
        <h1>Trivia</h1>
        <p>Puntos: <strong>{puntos}</strong></p>

        <div>
            <div>
                <h2>{preguntaActual.pregunta}</h2>
            </div>
            <div>
                <p>Opciones:</p>
                {preguntaActual.opciones.map((opcion)=>(
                    <button onClick={()=> validarRespuesta(opcion)}>{opcion}</button>
                ))}
            </div>
            {mostraRespuesta &&
                <p>La respuesta correcta es la {preguntaActual.respuesta}</p>
            }
            <button onClick={()=> siguientePregunta()}>Siguiente Pregunta</button>
        </div>
        
        
        

        
        </>
    )
}

export default Trivia;
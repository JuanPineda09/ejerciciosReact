import React,{useState, useEffect} from "react";
import './style.css';

const Arrows = ()=>{

    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const position = 10;
    
    useEffect(()=>{
        const handleKeyDown = (e)=>{
            switch (e.key) {
                case 'ArrowUp':
                    setPosY(setPosY  => setPosY - position)
                    break;
                case 'ArrowDown':
                    setPosY(setPosY  => setPosY + position)
                    break;
                case 'ArrowLeft':
                    setPosX(setPosX  => setPosX - position)
                    break;
                case 'ArrowRight':
                    setPosX(setPosX  => setPosX + position)
                    break;
                default:
                    break;
            }
        }

        document.addEventListener('keydown',handleKeyDown);
        return()=>{
            document.removeEventListener('keydown',handleKeyDown);
        };
    },[])

    return(
        <>
        <div className="cuadro" style={{
            top:`${posY}px`,
            left:`${posX}px`
        }}></div>
        </>
    )
}

export default Arrows;
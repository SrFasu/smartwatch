import React from "react";


const Cronometro = () =>{     
    return(
        <div className="crono">
        <div className="crono__tiempo">00:00:00</div>
        <div className="crono__controles">
        <button id="start">Iniciar</button>
        <button id="stop">Pausar</button>
        <button id="reset">Parar</button>
        </div>
        </div>
    );
}

export default Cronometro;


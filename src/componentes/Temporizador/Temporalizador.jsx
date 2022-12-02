import React from "react";

const Temporalizador = () => {
    return(
        <div className="container">
        <p id="hour-label" className="tempo__label">Hrs</p><p id="min-label" className="tempo__label">Mins</p><p id="sec-label" className="tempo__label">Segs</p>
        <input id="hour" type="number" max={99} min={0} defaultValue={0} className="tempo__tiempo" /><p id="p1" className="puntos">:</p><input id="minute" type="number" max={60} min={0} defaultValue={0} className="tempo__tiempo" /><p id="p2" className="puntos">:</p><input id="sec" type="number" max={60} min={0} defaultValue={0} className="tempo__tiempo" />
        <button id="start" className="tempo__btn">Iniciar</button>
        <button id="reset" className="tempo__btn">Reiniciar</button>
      </div>
    );
}

export default Temporalizador;
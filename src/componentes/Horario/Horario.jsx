import React from "react";
import { useState } from "react";

const Horario = () =>  {
    let time = new Date().toLocaleTimeString();
    const [, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime);

    let date = new Date().toLocaleDateString();

    return(
        <div className="reloj">
        <p className="reloj__tiempo">{time}</p>
        <p className="reloj__fecha">{date}</p>
    </div>
    );
}

export default Horario;
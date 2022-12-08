import React, { useState } from "react";

const Horario = () =>  {
    
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    
    setInterval(() => {
        updateTime()
    }, 1000);



    let date = new Date().toLocaleDateString();

    return(
        <div className="reloj">
        <p className="reloj__tiempo">{currentTime}</p>
        <p className="reloj__fecha">{date}</p>
    </div>
    );
}

export default Horario;
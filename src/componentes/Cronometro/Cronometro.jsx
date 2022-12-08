import React, { useEffect, useState } from "react";


const Cronometro = () => {
  const [isActive, setiIsActive] = useState(false);
  const [ispaused, setisPaused] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && ispaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, ispaused]);

  const handleStart = () => {
    setiIsActive(true);
    setisPaused(false);
  };

  const handlePaused = () => {
    setisPaused(!ispaused);
  };

  const handleReset = () => {
    setiIsActive(false);
    setTime(0);
  };

  return (
    <div className="crono">

      {console.log("time", time)}

      <div className="crono__tiempo">
          <p>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:{("0" + (Math.floor(time / 10) % 100)).slice(-2)} </p>
          </div>

          <div className="crono__controles">
        <button onClick={handleStart}>Iniciar</button>
        <button onClick={handlePaused}>Pausar</button>
        <button onClick={handleReset}>Parar</button>
        </div>
    </div>
  );
};

export default Cronometro;


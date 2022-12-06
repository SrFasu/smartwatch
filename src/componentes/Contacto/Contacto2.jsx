import React from "react";
import { useForm, ValidationError } from '@formspree/react';


const Contacto2 = () => {
    const [state, handleSubmit] = useForm("xzbwngad");
  if (state.succeeded) {
      return <div className="contacto__enviado"><p>Consulta enviada!!</p></div>;
  }
    return (
        <div className="contacto">
        <h1 className="contacto__title">C<span>ontáctanos</span></h1>
        <form className="contacto__form" onSubmit={handleSubmit} >
            <input
             type="text"
             className="contacto__input"
             name="nombre"
             id="nombre"
             placeholder="Nombre"
            />

            <input
             type="text"
             className="contacto__input"
             name="apellido"
             id="apellido"
             placeholder="Apellido"
            />

            <input
             type="email"
             className="contacto__input"
             name="email"
             id="email"
             placeholder="Email"
            />

            <input
             type="text"
             className="contacto__input"
             name="telefono"
             id="telefono"
             placeholder="Telefono"
            />
            
            <input
             type="text"
             className="contacto__input"
             name="consulta"
             id="consulta"
             placeholder="Consulta"
            />
            <button type="submit" className="contacto__enviar" disabled={state.submitting}>
            <p>Submit</p>
            </button>
        </form>
    </div>

    )
}

export default Contacto2;
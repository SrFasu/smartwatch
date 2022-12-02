import React from "react";
import { useForm } from 'react-hook-form';

const Contacto = () =>{     
    const { register, formState:{errors} ,handleSubmit } = useForm("");
    const onSubmit = (data) =>{
        console.log(data);
    }
    const alerta = () => {
        alert("Mensaje Enviado");
    }



    return(
        <div className="contacto">
            <h1 className="contacto__title">C<span>ontáctanos</span></h1>
            <form className="contacto__form" onSubmit={handleSubmit(onSubmit)} >
                <input
                 type="text"
                 className="contacto__input"
                 name="nombre"
                 placeholder="Nombre"
                 {...register('nombre',{required: true, maxLength:10})}
                />
                {errors.nombre?.type==='required' && <p className="contacto__error">Campo obligatorio</p>}

                <input
                 type="text"
                 className="contacto__input"
                 name="apellido"
                 placeholder="Apellido"
                />

                <input
                 type="email"
                 className="contacto__input"
                 name="email"
                 placeholder="Email"
                 {...register('email',{ pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })}
                />
                {errors.email?.type==='pattern' && <p className="contacto__error">Falta <span>@gmail.com</span></p>}

                <input
                 type="text"
                 className="contacto__input"
                 name="telefono"
                 placeholder="Telefono"
                 {...register('telefono',{required: true})}
                />
                {errors.telefono?.type==='required' && <p className="contacto__error">Campo obligatorio</p>}
                
                <input
                 type="text"
                 className="contacto__input"
                 name="consulta"
                 placeholder="Consulta"
                />
                <input  onClick={()=>alerta()} type="submit" className="contacto__enviar" defaultValue="Enviar" />
            </form>
        </div>
    );
}

export default Contacto;
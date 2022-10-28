import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
import { useForm } from 'react-hook-form'

function User() {

    const {login,user} = useContext(UserContext);
    const {register, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
        login(data.usuario,data.contraseña);
    }

    if (user === null){
        return (
      <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <label>Usuario</label>
          <input placeholder="Type here" className="input input-bordered w-full max-w-xs" type="text" {...register("usuario")}/>
      </div>
      <div>
          <label>Contraseña</label>
          <input placeholder="Type here" className="input input-bordered w-full max-w-xs" type="text" {...register("contraseña")}/>
      </div>
      <div>
          <input className="btn btn-outline" type="submit" value="Enviar"/>
      </div>
      </form>
      </>
        )
      }
      else{
      return(
      <>
      <div>Ya está logueado</div>
      </>
      )
      }
      }

export default User
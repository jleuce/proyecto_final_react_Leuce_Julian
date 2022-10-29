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
      <div className="shadow-xl content-center">
      <div className="card-body items-center text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <label className="text-center" >Usuario</label>
          <input placeholder="Type here" className="input input-bordered w-full max-w-xs text-center" type="text" {...register("usuario")}/>
      </div>
      <div>
          <label className="text-center">Contraseña</label>
          <input placeholder="Type here" className="input input-bordered w-full max-w-xs text-center" type="text" {...register("contraseña")}/>
      </div>
      <div>
      <div className="text-center">
          <input className="btn btn-outline" type="submit" value="Enviar"/>
          </div>
      </div>
      </form>
      </div>
      </div>
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
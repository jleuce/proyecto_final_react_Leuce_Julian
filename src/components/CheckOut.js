import React, { useContext, useEffect, useState } from 'react'
import {traerDatos} from '../context/FunctionsFireBase'
import UserContext from '../context/UserContext';


function CheckOut() {

  const {user} = useContext(UserContext);
  const [pedidos, setPedidos] = useState([]);
  const [loadingPedidos, setLoadingPedidos] = useState(true);

  useEffect(() => {
    if (user !== null) {
      traerDatos('Pedidos',setPedidos,setLoadingPedidos,'usuario',user)
    }
  }, [])

  console.log(pedidos);
  if (loadingPedidos === true || user === null){
    return(
      <div>O esta cargando o te tenes que loguear primero...</div>
    )
  }else{
    return (
      <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Usuario</th>
              <th>Items</th>
              <th>$ Total</th>
            </tr>
          </thead>
          {pedidos.map(pedido => <tbody>
                                        <tr>
                                          <th>{pedido.fechaPedido}</th>
                                          <td>{pedido.usuario}</td>
                                          <td>{pedido.totalProductos}</td>
                                          <td>$ {pedido.totalPrecio}</td>
                                        </tr>
                                  </tbody> )}
       
        </table>
      </div>
</>
    )
  }
}

export default CheckOut
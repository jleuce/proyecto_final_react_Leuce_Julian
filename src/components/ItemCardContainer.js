import React, { useContext, useState } from 'react'
import CartWidgetContext from '../context/CartWidgetContext';
import UserContext from '../context/UserContext';
import ItemCard from './ItemCard'

function ItemCardContainer({Item}) {

  const {addItemToCart} = useContext(CartWidgetContext);
  const {user} = useContext(UserContext);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0) 

  const agregarAlCarrito = () => {
    if(user == null){
      alert("Para agregar al carrito debes loguearte")
    }else{
      addItemToCart(Item,cantidadSeleccionada);
      setCantidadSeleccionada(0);
    }
  };

  const sumar = () => {
    if (cantidadSeleccionada < Item.stock){
        console.log("sumar 1");
        setCantidadSeleccionada(cantidadSeleccionada + 1);
    }
  };

  const restar = () => {
    if (cantidadSeleccionada > 0){
        console.log("restar 1");
        setCantidadSeleccionada(cantidadSeleccionada - 1);
    }
  };

  return (
    <div>
      <ItemCard 
        Item={Item} 
        cantidadSeleccionada={cantidadSeleccionada} 
        setCantidadSeleccionadaHandler={setCantidadSeleccionada}
        agregarAlCarritoHandler={agregarAlCarrito}
        sumarHandler={sumar}
        restarHandler={restar}
      />
    </div>
  )
}

export default ItemCardContainer
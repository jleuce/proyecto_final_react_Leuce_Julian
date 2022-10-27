import React, { useContext, useState } from 'react'
import CartWidgetContext from '../context/CartWidgetContext';
import ItemCard from './ItemCard'

function ItemCardContainer({Item}) {

  const {cart,addItemToCart,quitItemFromCart,} = useContext(CartWidgetContext);
  
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0) 

  const agregarAlCarrito = () => {
    addItemToCart(Item,cantidadSeleccionada);
    setCantidadSeleccionada(0);
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
import React from 'react'

function CartItem({ItemCant,quitItemFromCartHandler}) {
    
    const quitarProducto =  () => {
      quitItemFromCartHandler(ItemCant.id)
    };

  return (
    <div>
        <p> Producto: {ItemCant.producto} Cantidad: {ItemCant.cantidad} <button className="btn btn-third" onClick={quitarProducto}>Quitar</button></p> 
    </div>
  )
}

export default CartItem
import React, { useContext } from 'react'
import CartWidgetContext from '../context/CartWidgetContext'
import CartItem from './CartItem';

function Cart() {
    const {cart,quitItemFromCart} = useContext(CartWidgetContext);
    const limpiarCarrito = () => {
    };
    const comprar = () => {};
  return (
    <div>
      <div className="collapse">
        <input type="checkbox" className="peer" /> 
        <button className="btn btn-primary" onClick={limpiarCarrito}>Limpiar carrito</button>
        <button className="btn btn-primary" onClick={comprar}>Comprar</button>
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Carrito
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          {cart.map( e => <CartItem ItemCant={e} quitItemFromCartHandler={quitItemFromCart}></CartItem>)
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
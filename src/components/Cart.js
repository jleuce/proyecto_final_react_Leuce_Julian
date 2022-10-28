import React, { useContext } from 'react'
import CartWidgetContext from '../context/CartWidgetContext'
import UserContext from '../context/UserContext'
import CartItem from './CartItem';


function Cart() {
    const {cart,quitItemFromCart,cleanCart,buy} = useContext(CartWidgetContext);
    const {user} = useContext(UserContext)
    const comprar = () => {
      buy(user);
    };

  return (
    <div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        {(cart.length > 0)?<button className="btn btn-primary" onClick={cleanCart}>Limpiar carrito</button>:''}
        {(cart.length > 0)?<button className="btn btn-secondary" onClick={comprar}>Comprar</button>:''}
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        {cart.length>0?'Ver Carrito':'Agrega productos en el carrito'}
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          {cart.map( e => <CartItem key={e.id} ItemCant={e} quitItemFromCartHandler={quitItemFromCart}></CartItem>)
          }
        </div>
      </div>
    </div>
  )
}

export default Cart
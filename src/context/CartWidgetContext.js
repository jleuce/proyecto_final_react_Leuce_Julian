import { createContext, useState } from "react";

const CartWidgetContext = createContext([]);

export default CartWidgetContext;



export const CartWidgetContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
  
    const addItemToCart = (item,cantidad) => {
        const objeto = {...item,cantidad}
        setCart([...cart,objeto])
        console.log(`Se agrego item: al carrito`);
        console.log(objeto);
    };
    
    const quitItemFromCart = (id) => {
        console.log(`Quitando item ${id} del carrito`);
        const newCart = cart.filter(i => i.id != id);
        setCart(newCart);
    };
    
    const fcart = {
        cart, 
        addItemToCart,
        quitItemFromCart,
    }

    return (
        <CartWidgetContext.Provider value={fcart}>
            {children}
        </CartWidgetContext.Provider>
      );
    
}

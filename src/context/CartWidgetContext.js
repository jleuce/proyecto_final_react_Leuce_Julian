import { createContext, useState } from "react";
import { updateSomething, writeSomething} from './FunctionsFireBase';

const CartWidgetContext = createContext([]);

export default CartWidgetContext;

export const CartWidgetContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [refrescar, setRefrescar] = useState(false);
  
    const actualizarStockProductosDB = () => {
        cart.forEach(e => {
            const newAtributo = {
                stock: (e.stock - e.cantidad)
            }
            updateSomething('Items',e.id,newAtributo)
        })
    }

    const enviarPedido = (user,cart) => {
        
        let sumaCompra = (0);
        cart.forEach(p => {
            sumaCompra += (p.cantidad * p.precio);
        })
        const order = {
            usuario: user,
            productos: cart,
            totalProductos:cart.length,
            totalPrecio: sumaCompra,
            fechaPedido: (new Date()).toISOString().split('T')[0]
        }
        writeSomething('Pedidos',order) 
    }

    const addItemToCart = (item,cantidad) => {
        if ((cart.find(p => p.id === item.id)) === undefined){
            const objeto = {...item,cantidad}
            setCart([...cart,objeto])
            console.log(`Se agrego item: al carrito`);
            console.log(objeto);
        }else{
            const eCartEditado = cart.find(p=> p.id === item.id);
            eCartEditado.cantidad += cantidad;
            const newCart = cart.filter(c=> c.id != item.id);
            setCart([...newCart,eCartEditado]);
        }  
    };
    
    const quitItemFromCart = (id) => {
        console.log(`Quitando item ${id} del carrito`);
        const newCart = cart.filter(i => i.id != id);
        setCart(newCart);
    };

    const cleanCart = () => {
        setCart([]);
        setRefrescar(!refrescar);
    }
    
    const buy = (user) => {
        enviarPedido (user,cart);
        actualizarStockProductosDB();
        cleanCart();
        alert("Pedido enviado, podes consultarlo en VER TUS PEDIDOS");
        setRefrescar(!refrescar);
    }

    const fcart = {
        refrescar,
        cart, 
        addItemToCart,
        quitItemFromCart,
        cleanCart,
        buy,
    }

    return (
        <CartWidgetContext.Provider value={fcart}>
            {children}
        </CartWidgetContext.Provider>
      );
    
}

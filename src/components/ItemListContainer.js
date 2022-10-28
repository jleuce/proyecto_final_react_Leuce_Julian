import React, { useContext, useEffect, useState } from 'react'
import CartWidgetContext from '../context/CartWidgetContext';
import {traerDatos} from '../context/FunctionsFireBase'
import Cart from './Cart';
import ItemList from './ItemList';

function ItemListContainer() {

    const [loadingProductos, setLoadingProductos] = useState(true);
    const [productos, setProductos] = useState([]);
    const [productosInternos, setProductosInternos] = useState([]);
    const {cart,refrescar} = useContext(CartWidgetContext);
    
    useEffect(() =>{
      traerDatos('Items',setProductos,setLoadingProductos);
    }
    ,[])

    useEffect(() =>{
      traerDatos('Items',setProductos,setLoadingProductos);
    }
    ,[refrescar])

    useEffect(() =>{
      const newArray = productos.map(pr => { 
        const objetoProducto = {...pr};
        const objetoCarrito = cart.find(pc => pc.id === objetoProducto.id);
        if (objetoCarrito === undefined){
          return objetoProducto;
        }else{
          objetoProducto.stock = objetoProducto.stock - objetoCarrito.cantidad;
          return objetoProducto;
        }
      })
      setProductosInternos(newArray);
    }
    ,[productos,cart])

    if (loadingProductos){
        return (
            <div>Cargando...</div>
          )
    }else{
        return (
          <>
            <Cart></Cart>
            <ItemList Items={productosInternos}></ItemList>
          </>
          )
    }
    }
  


export default ItemListContainer
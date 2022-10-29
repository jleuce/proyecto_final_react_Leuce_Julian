import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { traerDatos } from '../context/FunctionsFireBase'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    
    const {nombre} = useParams ();
    const [producto, setProducto] = useState({});
    const [loadingProducto, setLoadingProducto] = useState(true);


    useEffect(() => {
        traerDatos('Items',setProducto,setLoadingProducto,'producto',nombre)
    }, [])

    if (loadingProducto === true){
        return (
            <div>Cargando...</div>
          )  
    }else{
        return (
            <ItemDetail producto={producto[0]}></ItemDetail>
        )
    }
}

export default ItemDetailContainer
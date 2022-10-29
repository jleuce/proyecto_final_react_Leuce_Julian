import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard({Item,cantidadSeleccionada,agregarAlCarritoHandler,sumarHandler,restarHandler}) {

  return (
    <div className="Card">
        <div className="card w-96 bg-base-100 shadow-xl">
            {Item.stock === 0?<p>Sin stock</p>:''}          
            <figure className="main-img">
                <img src={Item.imagen} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{Item.producto}</h2>
                <h3 className="card-title">$ {Item.precio}</h3>
                <p>Stock disponible: {Item.stock}</p>
                <div className="card-actions">
                    <Link to={`/productos/${Item.producto}`} className="btn btn-primary" >Ver detalle</Link>
                </div>
                <div>
                    <p type="text">{cantidadSeleccionada}</p>
                    <button className="btn btn-primary" onClick={sumarHandler} >+</button>
                    <button className="btn btn-primary" onClick={restarHandler}>-</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={agregarAlCarritoHandler}>Agregar al carrito</button>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard
import React, { useState } from 'react'

function ItemCard({Item,cantidadSeleccionada,agregarAlCarritoHandler,sumarHandler,restarHandler}) {

  return (
    <div className="Card">
        <div className="card w-96 bg-base-100 shadow-xl">
            <p>Cartelito si no hay stock</p>            
            <figure className="px-10 pt-10">
                <img src={Item.imagen} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{Item.producto}</h2>
                <p>{Item.stock}</p>
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={agregarAlCarritoHandler}>Agregar al carrito</button>   
                </div>
                <div>
                    <p type="text">{cantidadSeleccionada}</p>
                    <button className="btn btn-primary" onClick={sumarHandler} >+</button>
                    <button className="btn btn-primary" onClick={restarHandler}>-</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary" >Ver detalle</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard
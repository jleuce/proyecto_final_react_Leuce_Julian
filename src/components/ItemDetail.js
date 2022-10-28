import React from 'react'

function ItemDetail({producto}) {

  return (
    <div className="Card">
        <div className="card w-96 bg-base-100 shadow-xl">          
            <figure className="px-10 pt-10">
                <img src={producto.imagen} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{producto.producto}</h2>
                <p>{producto.descripcion}</p>
                <div>
                    <p type="text">{producto.precio}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
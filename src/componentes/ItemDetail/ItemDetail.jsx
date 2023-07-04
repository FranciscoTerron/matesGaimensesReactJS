import React from 'react'

const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio : {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam odit, ipsa perferendis, delectus a vero doloremque corporis error, iure tempore in voluptatibus dolorem. Eaque placeat, vero esse dolor inventore id.</p>
        <img src={img} alt={nombre} />

    </div>
  )
}

export default ItemDetail
import{Link} from "react-router-dom"

const Item = ({id,nombre,precio,img}) => {
  return (
    <div id ="cartas">
        <img src={img} alt="{nombre}" />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: {precio}</p>
        <p>Id: {id} </p>
        <Link to={`/item/${id}`}> Ver detalles </Link>

    </div>
  )
}

export default Item
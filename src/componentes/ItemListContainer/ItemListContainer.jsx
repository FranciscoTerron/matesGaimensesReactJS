import { useState,useEffect } from "react";
import {getProductos,getProductosPorCategoria} from "../../asyncmock";
import ItemList from "../ItemList.jsx/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = (props) => {
    // creo el estado que nos almacena el array de productos
    const [productos,setProductos] = useState([]);
    const {idCategoria} = useParams();


    useEffect(() => {
        const funcion = idCategoria ? getProductosPorCategoria : getProductos;
        funcion(idCategoria)
            .then(res => setProductos(res))
    },[idCategoria])
    return (
        <>
        <h2>{props.greeting}</h2>
        <ItemList productos={productos}/>
        </>
    )
}

export default ItemListContainer
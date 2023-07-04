const misProductos = [
    {id : "1", nombre : "plan1", precio : 300, img:"../img/plan1.jpg",idCat:"2"},
    {id : "2", nombre : "plan2", precio : 1500, img : "./img/plan2.jpg",idCat:"2"},
    {id : "3", nombre : "plan3", precio : 500, img : "./img/plan3.jpg",idCat:"3"},
    {id : "4", nombre : "plan4", precio : 3000, img : "./img/plan4.jpg",idCat:"3"}

]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

// Funcion similar pero retorna un solo item:

export const getUnProducto = (id) =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        },100)
    })
}

// Funcion para retornan la categoria 

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}


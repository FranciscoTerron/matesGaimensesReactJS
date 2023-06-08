import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://images.emojiterra.com/google/android-12l/512px/1f6d2.png"
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito De Compras" />
            <strong>20</strong>
        </div>
    )
}

export default CartWidget
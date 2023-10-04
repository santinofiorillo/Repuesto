import carrito from './assets/carrito.png' 

const CardWidget = () => {
    return(
        <div>
            <img src= {carrito} alt="cart-widget" />
            <p>0</p>
        </div>
    )

}
export default CardWidget
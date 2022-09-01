import React from 'react'
import carrito from '../assets/compra.png'

const CartWidget = ({cart}) => {
    return (
    <div>
        <a href='#' className='numero'><img className='carrito' src={carrito} width='32' height='31'></img>{cart}</a>
    </div>
    )
}

export default CartWidget
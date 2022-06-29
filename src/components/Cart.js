import React from 'react'
import { useCartContext } from './Context/CartContext'

const Cart = () => {
  const { cart, totalPrice, removeProduct, clear } = useCartContext()

  const eliminarProducto = () => {
    removeProduct()
  }

  cart.map((productos) => { 
  return (
    <div key={productos.id}>
      <h1>Tu Carrito</h1>
      <img src={productos.image}/>
      <p>{productos.name}</p>
      <h3>Total: {totalPrice}</h3>
      <button onClick={eliminarProducto}>Eliminar producto</button>
      <button onClick={clear}>Vaciar Carrito</button>
    </div>
  )}
)}

export default Cart
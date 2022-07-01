import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './Context/CartContext'

const Cart = () => {
  const {quantity, cart, totalPrice, removeProduct, clear } = useCartContext()

  console.log(quantity)

  /*cart.map((productos) => { 
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
  )

return (
  <div>
  {cart.map((prod) =>{
    <div key={prod.id}>
      <h1>Tu Carrito</h1>
      <img src={prod.image}/>
      <p>{prod.name}</p>
      <h3>Total: {totalPrice}</h3>
      <button onClick={eliminarProducto}>Eliminar producto</button>
      <button onClick={clear}>Vaciar Carrito</button>
    </div>
  })
}</div>)*/

{if(quantity === 0) 
  {return (
    <div>
        <p>No hay productos agregados aun. </p>
        <Link to="/" >Podes ir acá para empezar tu compra.</Link>
    </div>
)} else {cart.map(prod =>
  <div key={prod.id}>
    <h1>Tu Carrito</h1>
    <img src={prod.image}/>
    <p>{prod.name}</p>
    <h3>Total: {totalPrice}</h3>
    <button onClick={removeProduct}>Eliminar producto</button>
    <button onClick={clear}>Vaciar Carrito</button>
  </div>)}
}
}

export default Cart
import React from 'react'
import { useCartContext } from './Context/CartContext'

const Cart = () => {
  const {quantity, cart, totalPrice, removeProduct, clear } = useCartContext()

  console.log(quantity)

return (
  <>
      {cart.length === 0 ? (
          <div className="empty">Tu carrito está vacio.</div>
      ) : (
          <>
              <div className="cart">
                  {cart.map((prod) => (
                      <div className="infoCart" key={prod.id}>
                          <img className='img-cart'
                              src={prod.image}
                              alt={prod.name}
                          />
                          <div className='cart2'>
                            <h2 className='titulo-cart'>{prod.name}</h2>
                            <h2>${prod.price}</h2>
                            <h2>Cantidad: {prod.quantity}</h2>
                            <button className='btn btn-danger' onClick={() => removeProduct(prod.id)}>
                                Eliminar
                            </button>
                          </div>
                      </div>
                  ))}
                  <div className="cartBtn">
                      <h2>Total: ${totalPrice}</h2>
                      <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
                  </div>
              </div>
              </>
                  )}
                  </>
)}

export default Cart
import React from 'react'
import { contexto } from './Context/CartContext'
import { useContext } from 'react'

const Cart = () => {
  const { carrito, totalPrice, clear, removeItem, cartCounter } = useContext(contexto)
  return (
    <section className="cartList mt-3">
            <h4>Carrito</h4>
            {carrito.map(item => (
                <div class="row g-0 ml-5 mb-5 mt-5">
                    <div class="col-md-3">
                        <img src={item.image} class="img-fluid rounded-start img-cart" alt="..."/>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body" key={item.id}>
                          <h5 class="card-title">{item.title}</h5>
                          <div class="row">
                              <p class="ml-3 mr-5">{item.quantity} x ${item.price}</p>
                              <p>Total Parcial : ${item.quantity * item.price}</p>
                          </div> 
                          <button className= 'btn btn-danger' onClick={() => removeItem(item.id)} >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-trash' viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                              </svg>
                          </button>
                          <hr className='mt-5'></hr>
                      </div>
                    </div> 
                </div>
            ))}
            <div className='totalprice-cart row'>
                {totalPrice() === 0 ? null : <h4 className='mr-5'>Precio total: ${totalPrice()}</h4>}
                {cartCounter() === 0 ? <h4>El carrito está vacio</h4> : <button className="btn btn-outline-info ml-5" onClick={() => { clear() }} >Vaciar Carrito</button>}
            </div>
        </section>
  )
}

export default Cart
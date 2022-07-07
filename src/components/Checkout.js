import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { useCartContext } from './Context/CartContext'
import { db } from './Firebase/firebase'

const Checkout = () => {
    const [data, setData] = useState({name: '', email: '', phone: ''})
    const [orders, setOrders] = useState("")
    const {cart, totalPrice, clear} = useCartContext()

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({...data, 
            [name]:value,})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cart.map((prod) => {
            return{ 
            id: prod.id,
            title: prod.name,
            price: prod.price,
    }})
        const orden = {
            buyer : {
                name: data.name,
                phone: data.phone,
                email: data.email
            },
            items,
            cart,
            total: totalPrice(),
            date:serverTimestamp(),
        }
        const ref = collection(db, 'orders')
        addDoc(ref, orden).then((resp) => {
            setOrders(resp.id)
            clear()
        })
    }

    if(orders !== '') {
        return(
        <h1>Gracias por tu compra! Tu numero de pedido es: {orders}</h1>
    )}

return (
    <>
    {cart.length === 0 ? (
        <div className="empty">Tu carrito está vacio.</div>
        ) : (
    <div>
        <div>
            <h1>Termina tu compra!</h1>
            <h4>Rellena el formulario para finalizar.</h4>
        </div>
        <form onSubmit={handleSubmit} onChange={handleChange} data={data}>
        <ul>
            <li>
                <label>Nombre:</label>
                <input type="text" name="name" placeholder='nombre' onChange={handleChange} value={data.name} required/>
            </li>
            <li>
                <label>E-mail:</label>
                <input type="email" name="email" placeholder='e-mail' onChange={handleChange} value={data.email} required/>
            </li>
            <li>
                <label>Teléfono:</label>
                <input type="number" name="phone" placeholder='teléfono' onChange={handleChange} value={data.phone} required/>
            </li>

            <button className='btn btn-danger' disabled={data.name === "" || data.email === "" || data.phone === ""} onSubmit={handleSubmit} >Finalizar Compra</button>
        </ul>
    </form>
</div>
)} 
</>
)}

export default Checkout
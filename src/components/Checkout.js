import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
        <div className='finalizar-compra'>
            <div className='cuadro-checkout'>
                <span className="simbolo-checkout material-symbols-outlined">check_circle</span>
                <h2>¡Gracias por tu compra!</h2> 
                <h5 className='orden-checkout'>Tu número de orden es: {orders}</h5>
                <Link to='/' className='btn btn-danger'>Volver al Inicio</Link>
            </div>
        </div>
    )}

return (
    <>
    {cart.length === 0 ? (
        <div className="empty">Tu carrito está vacío.</div>
        ) : (
    <div className='form'>
        <div className='box-form'>
            <div className='titulo-formulario'>
                <h1>Finaliza tu compra!</h1>
                <h4>Completa con tus datos el siguiente formulario.</h4>
            </div>
            <form className='formulario-relleno' onSubmit={handleSubmit} onChange={handleChange} data={data}>
                <ul>
                    <li className='li-checkout'>
                        <label className='label'>Nombre:</label>
                        <input className='input' type="text" name="name" placeholder='Nombre' onChange={handleChange} value={data.name} required/>
                    </li>
                    <li className='li-checkout'>
                        <label className='label'>E-mail:</label>
                        <input className='input' type="email" name="email" placeholder='E-mail' onChange={handleChange} value={data.email} required/>
                    </li>
                    <li className='li-checkout'>
                        <label className='label'>Teléfono:</label>
                        <input className='input' type="number" name="phone" placeholder='Teléfono' onChange={handleChange} value={data.phone} required/>
                    </li>
                    <div className='alineacion-btn'>
                        <button className='btn btn-danger' disabled={data.name === "" || data.email === "" || data.phone === ""} onSubmit={handleSubmit}>Finalizar Compra</button>
                        <Link to='/' className='btn checkout-inicio btn-outline-danger'> Volver al Inicio</Link>
                    </div>
                </ul>
            </form>
        </div>
    </div>
)} 
</>
)}

export default Checkout
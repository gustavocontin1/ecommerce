import ItemCount from './ItemCount'
import { useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './Context/CartContext'

const ItemDetail = ({item}) => {
    const [activo, setActivo] = useState(true)
    const { addToCart } = useCartContext()

    const onAdd = (quantity) => {
        addToCart({item, quantity })
        setActivo(false)
    }

    return (
    <div className="producto-detail">
        <h3 className="titulo-detail">{item.name}</h3>
        <img className="img-detail" src={item.image} alt={item.name}/>
        <div className='container-descripcion'>
            <h4 className='descripcion-producto'>{item.descripcion}</h4>
            <p className="precio-detail">AR$ {item.price}</p>
            {activo ? <ItemCount initial={1} stock={5} onAdd={onAdd}/> :
            <Link to={`/cart`} className="btn-confirmar btn btn-outline-danger">Terminar compra</Link>}
        </div>
    </div>
)
}

export default ItemDetail
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
return (
    <div className="producto-detail">
        <h3 className="titulo-producto">{item.name}</h3>
        <img className="img-detail" src={item.image} alt={item.name}/>
        <div className='container-descripcion'>
            <h4 className='descripcion-producto'>{item.descripcion}</h4>
            <p className="precio-detail">AR$ {item.price}</p>
            <ItemCount initial={1} stock={5} onAdd={() => {}}/>
        </div>
    </div>
)
}

export default ItemDetail
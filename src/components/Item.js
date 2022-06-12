import ItemCount from "./ItemCount"
function Item({id, name, price, image}) {
return (
    <div className="tarjeta">
        <h3>{name}</h3>
        <img className="img" src={image} alt={name}/>
        <p>${price}</p>
        <ItemCount initial={1} stock={5} onAdd={() => {}}/>
    </div>
)
}

export default Item
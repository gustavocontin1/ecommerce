import Item from "./Item";

const ItemList = ({product}) => {
return (
    product.map(p => 
        <Item
        id={p.id}
        name={p.name}
        image={p.image}
        price = {p.price}
        description ={p.descripcion}
        key={p.id}
        />)
)
}

export default ItemList
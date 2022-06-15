function Item({id, name, price, image}) {
return (
    <div className="producto">
        <h3 className="titulo-producto">{name}</h3>
        <img className="img" src={image} alt={name}/>
        <p className="precio-producto">AR$ {price}</p>
    </div>
)
}

export default Item
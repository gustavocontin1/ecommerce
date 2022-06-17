import { Link } from "react-router-dom"

function Item({name, price, image}) {
return (
    <div className="producto">
        <h3 className="titulo-producto">{name}</h3>
        <img className="img" src={image} alt={name}/>
        <p className="precio-producto">AR$ {price}</p>
        <Link className="btn btn-danger" to={'/detail/${id}'}>Ver Detalle</Link> 
    </div>
)
}

export default Item
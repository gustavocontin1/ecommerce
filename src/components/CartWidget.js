import { contexto } from "./Context/CartContext"
import { useContext } from "react"
import { NavLink } from "react-router-dom"

const CartWidget = () => {
const valor = useContext(contexto)
return (
    <NavLink to={`/cart`} className="box" href="#">
    CARRITO<span className="material-symbols-outlined">
    shopping_cart
    </span> {valor}
    </NavLink> 
    
)
}

export default CartWidget
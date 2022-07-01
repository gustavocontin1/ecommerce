import { NavLink } from "react-router-dom"
import { useCartContext } from "./Context/CartContext"

const CartWidget = () => {
    const { quantity} = useCartContext(0)
return (
    <NavLink to={`/cart`} className="box" href="#">
    CARRITO<span className="material-symbols-outlined">
    shopping_cart
    </span> {quantity}
    </NavLink> 
    
)
}

export default CartWidget
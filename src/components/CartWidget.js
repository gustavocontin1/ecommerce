import { NavLink } from "react-router-dom"
import { useCartContext } from "./Context/CartContext"

const CartWidget = () => {
    const { cart} = useCartContext()
return (
    <NavLink to={`/cart`} className="box" href="#">
    CARRITO<span className="material-symbols-outlined">
    shopping_cart
    </span> {cart}
    </NavLink> 
    
)
}

export default CartWidget
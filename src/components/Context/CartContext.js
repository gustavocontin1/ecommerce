import { createContext, useState } from "react"
export const contexto = createContext()
const Provider = contexto.Provider

const CartContext = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.find(prod => prod.id == id)
    }

    const addToCart = (item, quantity) => {
        if (isInCart == true) {
            setCart(cart.map(prod => {
            if (item == id) { 
                let nuevaCantidad = prod.cantidad + quantity
                return {...prod, quantity: nuevaCantidad}
    }else {
		return {...prod, quantity: quantity} }
    }))}}
    
    const valorProvider = {
        isInCart: isInCart,
        addToCart: addToCart
    }

return (
    <Provider value={valorProvider}>
        {children}
    </Provider>
)
}

export default CartContext
import { createContext, useContext, useState } from "react"
const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContexto = ({children}) => {
    const [cart, setCart] = useState([])
    
    const isInCart = (id) => cart.find(prod => prod.id === id)

    const addToCart = (item, quantity) => {
        if (isInCart === true) {
            setCart(cart.map(prod => {
            if (item.id === prod.id) { 
                let nuevaCantidad = prod.quantity + quantity
                return {...prod, quantity: nuevaCantidad}
    }else {
		return {...prod, quantity: quantity} }
    }))}}

    const totalPrice = () => {
        let total = 0 
        cart.forEach(item => total += item.quantity * item.price)
        return total
    }

    const removeProduct = (id) => setCart(cart.filter(prod => prod.id !== id)) 

    const clear = () => {
        setCart([])
    }

    const valorProvider = {
        cart,
        isInCart,
        addToCart, 
        totalPrice,
        removeProduct,
        clear
    }

return (
    <CartContext.Provider value={valorProvider}>
        {children}
    </CartContext.Provider>
)
}

export default CartContexto

import { createContext, useContext, useState } from "react"
const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContexto = ({children}) => {
    const [cart, setCart] = useState([])
    
    const isInCart = (id) => cart.find(prod => prod.id === id)

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            sumarCantidad(item, quantity)
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }

    const sumarCantidad = (item, quantity) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    quantity: prod.quantity + quantity,
                }
                return newProduct
            } else {
                return prod
            }
        })
        setCart(newProducts)
    }

    const totalPrice = () => {
        let total = 0
        cart.forEach(cart => {
             total += cart.quantity * cart.price
        })
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

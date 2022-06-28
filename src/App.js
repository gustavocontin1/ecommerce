import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartContext from './components/Context/CartContext'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
        <BrowserRouter>
        <CartContext>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='Productos'/>} />
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos'/>} />
            </Routes>
        </CartContext>
        </BrowserRouter>
        <Footer/>
        </>
    )
}

export default App
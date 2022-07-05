import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartContexto from './components/Context/CartContext'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartWidget from './components/CartWidget'

const App = () => {
    return (
        <>
        <BrowserRouter>
        <CartContexto>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='Productos'/>} />
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/cart' element={<CartWidget/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos'/>} />
            </Routes>
        </CartContexto>
        </BrowserRouter>
        <Footer/>
        </>
    )
}

export default App
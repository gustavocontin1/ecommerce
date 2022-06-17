import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer greeting='Productos'/>} />
                <Route path='/detail/:id' element={<ItemDetailContainer/>} /> 
            </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
}

export default App
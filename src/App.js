import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
        <Navbar/>
        <ItemListContainer mensaje='Productos'/>
        <Footer/>
        </>
    )
}

export default App
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDeatilContainer from './components/ItemDeatilContainer'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
        <Navbar/>
        <ItemListContainer greeting='Productos'/>
        <ItemDeatilContainer/>
        <Footer/>
        </>
    )
}

export default App
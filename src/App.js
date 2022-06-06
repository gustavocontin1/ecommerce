import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import { useState } from 'react'



const App = () => {
    useState()
    return (
        <>
        <Navbar/>
        <ItemListContainer greeting='Productos'/>
        <Footer/>
        </>
    )
}

export default App
import asyncMock from "./asyncMock"
import productos from "./productos"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { productosCategorias } from "./productos"

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId}= useParams()

    useEffect(() => {
        setLoading(true)
        if(!categoryId){
            asyncMock(2000, productos)
            .then(resultado => {
                setItems(resultado) 
                setLoading(false)}
        )} 
        else { 
            productosCategorias(2000, categoryId)
            .then(response => {
                setItems(response)
                setLoading(false)}
            )} 
    }, [categoryId])

return (
    <main>
        <div className="list-container">
            <h3 className='mensaje'>{greeting}</h3>
            {loading ? <div className="loader"><div></div><div></div><div></div><div></div></div> : <ItemList product={items}/>}
        </div>
    </main>
)
}

export default ItemListContainer
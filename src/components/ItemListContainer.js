import asyncMock from "./asyncMock"
import productos from "./productos"
import ItemList from "./ItemList"
import { useState } from "react"
import { useEffect } from "react"

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        asyncMock(2000, productos)
        .then(resultado => setItems(resultado))
    }, [items])

return (
    <main>
        <div className='list-container'>
            <h3 className='mensaje'>{greeting}</h3>
            <ItemList product={items}/>
        </div>
    </main>
)
}

export default ItemListContainer
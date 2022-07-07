import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collectionProductos} from "./Firebase/firebase"
import { getDocs, query, where} from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId}= useParams()

    useEffect(() => {
    const ref = categoryId ? query(collectionProductos, where('categoryId', '==', categoryId)) : collectionProductos

    getDocs(ref).then((resultado) =>{
        const products = resultado.docs.map((doc)=>{
            return {
                id: doc.id,
                ...doc.data(),
            }
    })
    setItems(products)
    setLoading(false)
    })
    .catch((error) => {
        console.log(error)
    })
},[categoryId] )

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
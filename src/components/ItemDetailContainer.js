import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { traerProducto } from "./productos";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { collectionProductos } from "./firebase";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams() 

    useEffect(() => {
        setLoading(false)
        const ref = doc(collectionProductos, id)
        getDoc(ref).then((response) => {
            setItem({
                id: response.id,
                ...response.data(),
            })
        })
    }, [id])

return (
    <div className="detail-container">
        {loading ? <div className="loader"><div></div><div></div><div></div><div></div></div> : <ItemDetail item={item}/>}
    </div>
)
}

export default ItemDetailContainer
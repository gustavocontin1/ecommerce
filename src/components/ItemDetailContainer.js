import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { traerProducto } from "./productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams() 

    useEffect(() => {
        setLoading(true)
        traerProducto(2000, parseInt(id))
        .then(resultado => {
            setItem(resultado)
            setLoading(false)})
    }, [])
return (
    <div className="detail-container">
        {loading ? <div className="loader"><div></div><div></div><div></div><div></div></div> : <ItemDetail item={item}/>}
    </div>
)
}

export default ItemDetailContainer
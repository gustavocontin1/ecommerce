import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { traerProducto } from "./productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    console.log(traerProducto)
    const [Item, setItem] = useState({});
    const {id} = useParams() 
    
    useEffect(() => {
        traerProducto(2000, parseInt(id))
        .then(resultado => setItem(resultado))
    }, [Item])
return (
    <div className="detail-container">
        <ItemDetail item={Item}/>
    </div>
)
}

export default ItemDetailContainer
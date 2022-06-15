import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { traerProducto } from "./productos";

const ItemDeatilContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        traerProducto(2000, traerProducto)
        .then(resultado => setItem(resultado))
    }, [item])
return (
    <div className="detail-container">
        <ItemDetail item={item}/>
    </div>
)
}

export default ItemDeatilContainer
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador>=0 && contador<5){
            setContador(contador + 1)
    }
    }

    const disminuirContador = () => {
        if(contador<=5 && contador>0){
            setContador(contador - 1)
    }
}
    const confirmarCompra = () => {
    }
    return (
    <div>
        <p>Agregar: {contador}</p>
        <button onClick={disminuirContador}type="button" className="btn btn-danger"><span className="material-symbols-outlined">
        do_not_disturb_on
        </span></button>  
        <button onClick={confirmarCompra} type="button" className="btn btn-outline-danger">Agregar al Carrito</button>
        <button onClick={aumentarContador} type="button" className="btn btn-danger"> <span className="material-symbols-outlined">
        add_circle
        </span></button>
    </div>
)
}

export default ItemCount
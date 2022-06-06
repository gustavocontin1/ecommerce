import Carrito from './CartWidget'
const Header = () =>{
    return (
        <header className='contenedor'>
            <h1>Depor T</h1>
            <nav className='nav'>
                <a className='box' href='#'>Incio<span className="material-symbols-outlined">
                home
                </span></a>
                <a className='box' href='#'>Productos<span className="material-symbols-outlined">
                category
                </span></a>
                <a className='box' href='#'>Contacto<span className="material-symbols-outlined">
                mail
                </span></a> 
                <Carrito/>
            </nav>
        </header>
    )
}

export default Header
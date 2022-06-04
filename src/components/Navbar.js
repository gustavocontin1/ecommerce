import Carrito from './CartWidget'
const Header = () =>{
    return (
        <header className='contenedor'>
            <h1>Depor T</h1>
            <nav className='nav'>
                <a className='box' href='#'>Incio</a>
                <a className='box' href='#'>Productos</a>
                <a className='box' href='#'>Contacto</a> 
                <Carrito/>
            </nav>
        </header>
    )
}

export default Header
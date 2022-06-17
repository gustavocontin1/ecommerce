import Carrito from './CartWidget'
const Header = () =>{
    return (
        <header className='contenedor'>
            <h1>Depor T</h1>
            <nav className='nav'>
                <a className='box' href='#'>INICIO<span className="material-symbols-outlined">
                home
                </span></a>
                <li className="alinear-dropdown nav-item dropdown">
                    <a className="box nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                    PRODUCTOS<span className="material-symbols-outlined">
                    category
                    </span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">CAMISETAS</a>
                        <a className="dropdown-item" href="#">PELOTAS</a>
                        <a className="dropdown-item" href="#">BOTINES</a>
                        <a className="dropdown-item" href="#">OTROS</a>
                    </div>
                </li>
                <a className='box' href='#'>CONTACTO<span className="material-symbols-outlined">
                mail
                </span></a> 
                <Carrito/>
            </nav>
        </header>
    )
}

export default Header
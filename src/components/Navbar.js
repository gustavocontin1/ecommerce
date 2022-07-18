import Carrito from './CartWidget'
import { Link } from 'react-router-dom'

const Header = () =>{
    return (
        <header className='contenedor'>
            <h1 ><Link to='/' className='titulo' >D x T</Link></h1>
            <nav className='nav'>
                <Link to='/' className='box'>INICIO<span className="material-symbols-outlined">
                home
                </span></Link>
                <li className="alinear-dropdown nav-item dropdown">
                    <Link to='/' className="box nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                    PRODUCTOS<span className="material-symbols-outlined">category</span>
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link to='category/camisetas' className="dropdown-item">CAMISETAS</Link>
                        <Link to='category/pelotas' className="dropdown-item" >PELOTAS</Link>
                        <Link to='category/botines' className="dropdown-item" >BOTINES</Link>
                        <Link to='category/otros' className="dropdown-item">OTROS</Link>
                    </div>
                </li>
                <Carrito/>
            </nav>
        </header>
    )
}

export default Header
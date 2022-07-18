import { Link } from "react-router-dom"
import {FaWhatsapp, FaInstagram, FaFacebook} from "react-icons/fa"


const Footer = () => {
return (
    <footer className="footer">
        <div className="productos-footer">
            <h5>Productos</h5>
            <li className="subprod"><Link to='/category/camisetas'>Camisetas</Link></li>
            <li className="subprod"><Link to='/category/pelotas'>Pelotas</Link></li>
            <li className="subprod"><Link to='/category/botines'>Botines</Link></li>
            <li className="subprod"><Link to='/category/otros'>Otros</Link></li>
        </div>
        <div className="redes-box productos-footer">
            <h5>Nuestras Redes</h5>
            <div className="redes-prod">
                <a href="https://www.whatsapp.com"><FaWhatsapp className="whatsapp"/></a>
                <a href="https://www.instagram.com"><FaInstagram className="instagram"/></a>
                <a href="https://www.facebook.com"><FaFacebook className="facebook"/></a>
            </div>
        </div>

        <div className="productos-footer">
            <h5 className="info-footer">Ayuda</h5>
            <h5 className="info-footer">Información al usuario</h5>
            <h5 className="info-footer">Términos y condiciones</h5>
            <h6 className="copyright">Copyright 2022 - Gustavo Contin</h6>
        </div>
    </footer>
)
}

export default Footer
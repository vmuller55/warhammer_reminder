import "../assets/styles/components/header.scss"
import Logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom"

function Header () {
    return (
        <div>
            <header>
                <Link to={"/"}>
                    <img src={Logo} alt="Logo" />
                </Link>
                <ul>
                    <li>Se connecter</li>
                    <li>S'inscrire</li>
                </ul>
            </header>
        </div>
    )
}

export default Header
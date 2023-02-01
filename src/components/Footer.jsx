import "../assets/styles/components/footer.scss"
import Logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom"

function Footer () {
    return (
        <div>
            <footer>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </li>
                    <li><a href="https://github.com/vmuller55?tab=repositories"> Git Hub </a></li>
                    <li><a href="https://www.linkedin.com/in/muller-vincent-dev-web/"> Linkedin </a></li>
                    <li></li>
                    <li></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
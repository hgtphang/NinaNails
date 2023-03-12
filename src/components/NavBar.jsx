import { Link } from "react-scroll";
import "./styles.css";

export default function NavBar() {
    return (
        <div className="NavBar">
            <div className="left-nav">
                <Link 
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>Services</Link>
                <Link 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>Contact</Link>
            </div>
            <div className="store-logo">
                <Link 
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                    Nina
                </Link>
            </div>
        </div>
    )
}
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s1.png'
import LogoSubtitle from '../../assets/images/logo_sub1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser  } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
<div className = 'nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt='logo' />
        <img className="sub-logo" src={LogoSubtitle} alt='classic' />
    </Link>

    <nav>
        <NavLink exact="true" activeclassname="active" to="/" >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>

    <ul>
        <li>
            <a target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/classickeys"
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"
            rel="noreferrer"
            href="https://www.github.com/classickeys"
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/itsclassickeys"
            >
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
        </li>
    </ul>

</div>
)

export default Sidebar
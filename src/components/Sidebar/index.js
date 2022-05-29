import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import Logo from '../Sidebar/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
<div className='navbar'>
    <Link className='logo' to='/'>
        <img src={Logo} alt="logo"/>
    </Link>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="white"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about" to="/about">
            <FontAwesomeIcon icon={faUser} color="white"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="white"/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="#">
                <FontAwesomeIcon icon={faLinkedin} color="white"/>
            </a>
            </li>
    </ul>
    </div>
)

export default Sidebar
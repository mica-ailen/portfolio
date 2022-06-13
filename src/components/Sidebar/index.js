import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import Logo from '../Sidebar/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faBars, faM} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

        return(
<div className='navbar'>
<div className="logo">
            <FontAwesomeIcon icon={faM} className="faM" color= "white"/>
            </div>
            <div>
    <FontAwesomeIcon icon={faBars} onClick={showNavbar} className="bars" color="white"></FontAwesomeIcon>
    </div>
    <div className="nav-container">
    <ul className="nav-links">
    <NavLink exact="true" activeclassname="active" to="/">
    <li> <a href="#">Home</a></li>
        </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/about">
    <li> <a href="#">About</a></li>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/projects">
            <li> <a href="#">Projects</a></li>
        </NavLink>
    <li> <a href="https://www.linkedin.com/in/micaela-pawlowski-5677b6238/" target="_blank">Contact</a></li>
    </ul>
    </div>
    </div>
    
)
}

export default Sidebar
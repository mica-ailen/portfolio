import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import Logo from '../Sidebar/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope, faBars} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
<div className='navbar'>
    {/* <Link className='logo' to='/'>
        <img src={Logo} alt="logo"/>
</Link> 
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="white"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="white"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="white"/>
            </NavLink>
            </nav>
            <ul className='icons'>
        <li>
            <a target="_blank" rel="noreferrer" href="#">
                <FontAwesomeIcon icon={faLinkedin} color="white"/>
            </a>
            </li>
            <li>
            <a target="_blank" rel="noreferrer" href="#">
                <FontAwesomeIcon icon={faGithub} color="white"/>
            </a>
            </li>
    </ul>*/}
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
    <div>
    <FontAwesomeIcon icon={faBars} className="bars" color="white"/>
    </div>
    </ul>
    </div>
    </div>
    
)

export default Sidebar
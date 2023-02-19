import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faM } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="navbar">
      <div>
        <NavLink to="/" className="logo">
          <FontAwesomeIcon icon={faM} className="faM" color="white" />
        </NavLink>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faBars}
          className={`bars ${isOpen && 'open'}`}
          onClick={() => setIsOpen(!isOpen)}
          color="white"></FontAwesomeIcon>
      </div>
      <div className={`nav-container ${isOpen && 'open'}`}>
        <ul className="nav-links">
          <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setIsOpen(!isOpen)}
            className="link">
            <li>
              {' '}
             Home
            </li>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="link"
            to="/about"
            onClick={() => setIsOpen(!isOpen)}>
            <li>
              {' '}
              About
            </li>
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/projects"
            onClick={() => setIsOpen(!isOpen)}
            className="link">
            <li>
              {' '}
            Projects
            </li>
          </NavLink>
          <li>
            {' '}
            <a href="https://www.linkedin.com/in/micaela-paw/" target="_blank" className='link'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

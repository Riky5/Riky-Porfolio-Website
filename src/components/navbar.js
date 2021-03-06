import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faIcons } from './layout.module.css'

const Navbar = () => {
  return (
    <nav className='navbar is-black is-fixed-top pl-5 pr-5' role="navigation" aria-label="main navigation">
        <div className='navbar-brand'>
          <div className="navbar-item">
            <Link to="/" activeStyle={{ borderBottom: "1px solid white" }}>Home
            </Link>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item mr-6'>
            <Link to="/about" activeStyle={{ borderBottom: "1px solid white" }}>About</Link>
          </div>
          <div className='navbar-item mr-6'>
            <Link to="/projects" activeStyle={{ borderBottom: "1px solid white" }} partiallyActive={true}>Projects</Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-item"><Link to="">Contacts</Link></div>
            <div className="navbar-dropdown">
              <a href="https://www.linkedin.com/in/rikymoroni/" className="navbar-item" style={{ textTransform: "none" }}>
                <FontAwesomeIcon icon={faLinkedinIn} size="1x" style={{ backgroundColor: "#0a66c2" }} className={faIcons} />LinkedIn</a>
              <a href="mailto:riky.moroni5@gmail.com" className="navbar-item" style={{ textTransform: "none" }}>
                <FontAwesomeIcon icon={faAt} size="1x" className={faIcons} style={{ backgroundColor: "red" }} />Gmail</a>
              <a href="https://codepen.io/your-work/" className="navbar-item" style={{ textTransform: "none" }}>
                <FontAwesomeIcon icon={faCodepen} size="1x" className={faIcons} style={{ backgroundColor: "black" }} />Codepen</a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar;
import * as React from 'react'
import { Link } from 'gatsby'
import { body } from './layout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bulma/css/bulma.min.css'
import { faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={body}>
      <title>{pageTitle}</title>
      <nav className='navbar is-black is-fixed-top pl-5 pr-5' role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/" activeStyle={{ color: "white" }}>Home
              {/* add my own img logo
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo'/> */}
            </Link>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'><Link to="/about" activeStyle={{ color: "white" }}>About</Link></div>
          <div className='navbar-item'><Link to="/projects" activeStyle={{ color: "white" }} partiallyActive={true}>Projects</Link></div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-item"><Link to="" activeStyle={{ color: "white" }}>Contacts</Link></div>
            <div className="navbar-dropdown">
              <Link to="https://www.linkedin.com/in/rikymoroni/" className="navbar-item"><FontAwesomeIcon icon={faLinkedinIn} size="1x" className='pr-2' />LinkedIn</Link>
              <Link to="mailto:riky.moroni5@gmail.com" className="navbar-item"><FontAwesomeIcon icon={faAt} size="1x" className='pr-2' />Gmail</Link>
              <Link to="https://codepen.io/your-work/" className="navbar-item"><FontAwesomeIcon icon={faCodepen} size="1x" className='pr-2' />Codepen</Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="has-navbar-fixed-top">
        {children}
      </main>
    </div>
  )
}
export default Layout
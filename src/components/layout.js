import * as React from 'react'
import { Link } from 'gatsby'
import { body } from './layout.module.css'
import 'bulma/css/bulma.min.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={body}>
      <title>{pageTitle}</title>
      <nav className="navbar is-fixed-top is-transparent p-5" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">Home
              {/* add my own img logo
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo'/> */}
            </Link>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'><Link to="/about">About</Link></div>
          <div className='navbar-item'><Link to="/projects">Projects</Link></div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-item"><Link to="">Contacts</Link></div>
            <div className="navbar-dropdown">
              <Link to="" className="navbar-item">LinkedIn</Link>
              <Link to="" className="navbar-item">Gmail</Link>
              <Link to="" className="navbar-item">Codepen</Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout
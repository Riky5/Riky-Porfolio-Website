import * as React from 'react'
import { Link } from 'gatsby'
import { body } from './layout.module.css'
import 'bulma/css/bulma.min.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={body}>
      <title>{pageTitle}</title>
      <nav className="navbar is-light has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div class="navbar-item">
            <Link to="/">
              {/* add my own img logo */}
              {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo'/> */}
            </Link>
          </div>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'><Link to="/about">About</Link></div>
          <div className='navbar-item'><Link to="/projects">Projects</Link></div>
          <div className='navbar-item'><Link to="/contacts">Contacts</Link></div>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout
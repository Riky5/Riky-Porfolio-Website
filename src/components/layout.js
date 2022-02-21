import * as React from 'react'
import { Link } from 'gatsby'
import 'bulma/css/bulma.min.css'
import { body } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={body}>
      <title>{pageTitle}</title>
      <nav className="navbar is-light has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <Link to="/">
              {/* add my own img logo */}
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </Link>
          </a>
        </div>
        <div className='navbar-end'>
          <a className='navbar-item'><Link to="/about">About</Link></a>
          <a className='navbar-item'><Link to="/">Projects</Link></a>
          <a className='navbar-item'><Link to="/">Contacts</Link></a>
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout
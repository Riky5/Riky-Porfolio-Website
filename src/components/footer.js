import React from 'react'
import { footer, topSection } from './layout.module.css'

const Footer = () => {
  return (
    <div className={footer}>
      <div className={topSection}></div>
      <div className='navbar is-black pl-5 pr-5'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            Portfolio © {new Date().getFullYear()}
          </div>
        </div>
        
        <div className='navbar-end'>
          <div className="navbar-item has-dropdown has-dropdown-up is-hoverable is-boxed">
            <a href="/" class="navbar-link is-arrowless">
              Built with love 💙
            </a>

            <div className="navbar-dropdown">
              <a href="https://www.gatsbyjs.com/" className="navbar-item">
                Gatsbyjs
              </a>
              <a href="https://graphql.org/" className="navbar-item">
                GraphQL
              </a>
              <a href="https://www.sanity.io/" className="navbar-item">
                Sanity.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
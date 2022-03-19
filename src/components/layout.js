import * as React from 'react'
import 'bulma/css/bulma.min.css'
import Scroll from "./locomotiveScroll"
import Navbar from './navbar'
import { body } from './layout.module.css'
import "./locomotiveScroll.css"

const Layout = ({ pageTitle, children, location }) => {
  return (
    <div className={body}>
      <title>{pageTitle}</title>
      <Scroll callbacks={location} />
      <Navbar />
      <main data-scroll-section>
        {children}
      </main>
    </div>
  )
}
export default Layout
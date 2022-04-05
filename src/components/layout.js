import * as React from 'react'
import 'bulma/css/bulma.min.css'
import Scroll from "./locomotiveScroll"
import Navbar from './navbar'
import Footer from './footer'
import { body } from './layout.module.css'
import "./locomotiveScroll.css"

const Layout = ({ pageTitle, children, location }) => {
  return (
    <div className={body} data-scroll-section>
      <title>{pageTitle}</title>
      <Scroll callbacks={location} />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout
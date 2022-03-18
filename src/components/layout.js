import * as React from 'react'
import { body } from './layout.module.css'
import 'bulma/css/bulma.min.css'
import Navbar from './navbar'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={body}>
      <title>{pageTitle}</title>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout
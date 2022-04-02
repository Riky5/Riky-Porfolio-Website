import React from 'react'
import { homepage, bigButton } from '../components/layout.module.css'

const Person = ({id, name, role}) => {
  return (
    <section key={id} className={homepage} data-scroll-section>
      <div>
        <h4>{name}</h4>
        <button className={bigButton}><a href='https://github.com/Riky5'>Github</a></button>
      </div>
      <h1 data-scroll data-scroll-speed="2">{role}</h1>
    </section>
  )
}

export default Person;
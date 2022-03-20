import React from 'react'
import { about } from '../components/layout.module.css'

const Education = ({ eduAndGurus }) => {
  return (
    <section className={about}>
      <h1 data-scroll data-scroll-speed="1">Education</h1>
      {eduAndGurus.map((item) => {
        return (
          <div key={item._key}>
            <h2>{item.name}</h2>
          </div>
        )
      })}
    </section>
  )
}

export default Education;
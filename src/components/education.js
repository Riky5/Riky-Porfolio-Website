import React from 'react'
import { eduSection } from '../components/layout.module.css'

const Education = ({ eduAndGurus }) => {
  return (
    <section className={eduSection}>
      <h1 data-scroll data-scroll-speed="1">Education & Gurus</h1>
        {eduAndGurus.map((item) => {
          return (
            <div key={item._key}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          )
        })}
    </section>
  )
}

export default Education;
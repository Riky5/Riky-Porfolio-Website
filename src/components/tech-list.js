import React from 'react'
import { techSection } from '../components/layout.module.css'

const TechList = ({ techs }) => {
  return (
    <section className={techSection}>
      <h1 data-scroll data-scroll-speed="1">Techs</h1>
      <div>
        {techs.map((tech) => {
          return (
            <div key={tech._key}>
              <p>{tech.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechList;
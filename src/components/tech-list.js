import React from 'react'
import { about } from '../components/layout.module.css'

const TechList = ({ techs }) => {
  return (
    <section className={about}>
      <h1 data-scroll data-scroll-speed="1">Techs</h1>
      <div>
        {techs.map((tech) => {
          return (
            <ul>
              <li>{tech.name}</li>
            </ul>
          )
        })}
      </div>
    </section>
  )
}

export default TechList;
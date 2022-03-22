import React from 'react'
import { aboutSection } from '../components/layout.module.css'

const Profile = ({ name, paragraphs}) => {
  return (
    <section className={aboutSection}>
      <h1 data-scroll data-scroll-speed="2">{name}</h1>
      <div data-scroll data-scroll-speed="2">
        {paragraphs.map((p, i) => {
          return (
            <p key={i}>{p}</p>
          );
        })}
      </div>
    </section>
  )
}

export default Profile;
import React from 'react'
import { about } from '../components/layout.module.css'

const Profile = ({ name, paragraphs }) => {
  return (
    <section className={about}>
      <h1 data-scroll data-scroll-speed="1">{name}</h1>
      <div data-scroll data-scroll-speed="2">
        {paragraphs.map((p) => {
          return (
            <p>{p}</p>
          );
        })}
      </div>
    </section>
  )
}

export default Profile;
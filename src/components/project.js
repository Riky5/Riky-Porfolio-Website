import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Project = ({ imageData, name, description, url }) => {
  return (
    <div className="project">
      <h1>{name}</h1>
      <GatsbyImage alt={name} image={imageData} />
      <p>{description}</p>
      <a href={url}>
        <p>You can find out more details on Github</p>
      </a>
    </div>
  ) 
}

export default Project;
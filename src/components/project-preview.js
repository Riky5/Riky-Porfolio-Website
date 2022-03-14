import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { projectPreview } from './layout.module.css'

const ProjectPreview = ({ id, imageData, name, description }) => {
  return (
    <div className={projectPreview}>
      <h2>
        <Link to={`/projects/${name}/`}>{name}</Link>
      </h2>
      <Link to={`/projects/${name}/`}>
        <GatsbyImage image={imageData} alt={name} />
      </Link>
      <p>{description}</p>
      <p>
        <Link to={`/projects/${name}/`}>View this project &rarr;</Link>
      </p>
    </div>
  ) 
}

export default ProjectPreview;
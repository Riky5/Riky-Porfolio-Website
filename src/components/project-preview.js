import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { projectPreview } from './layout.module.css'

const ProjectPreview = ({ imageData, name, description }) => {
  return (
    <div className={projectPreview}>
      <h2>
        <Link to={`/projects/${name}/`}>{name}</Link>
      </h2>
      <Link to={`/projects/${name}/`}>
        <GatsbyImage image={imageData} alt={name} style={{ borderRadius: "20px" }} />
      </Link>
      <p>{description}</p>
      <p>
        <Link to={`/projects/${name}/`}>View this project &rarr;</Link>
      </p>
    </div>
  ) 
}

export default ProjectPreview;
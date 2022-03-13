import React from 'react'
import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'

const ProjectPreview = ({ slug, imageData, url, name, description }) => {
  return (
    <div className="project-preview">
    <Link to={`/${slug}/`}>
      {/* <StaticImage src={imageData} alt={name} /> */}
    </Link>
    <h2>
      <Link to={`/projects/${slug}/`}>{name}</Link>
    </h2>
    <p>{description}</p>
    <p>
      <Link to={`/projects/${slug}/`}>View this project &rarr;</Link>
    </p>
  </div>
  ) 
}

export default ProjectPreview
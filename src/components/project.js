import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { projectSection, projectImage, title } from '../components/layout.module.css'

const Project = ({ imageData, name, description, url, techUsed }) => {
  return (
    <div className={projectSection}>
      <h1 className={title} data-scroll data-scroll-speed="2">{name}</h1>
      <div className='columns'>
        <GatsbyImage alt={name} image={imageData} className={projectImage} />
        <p>{description}</p>
      </div>
      <div className='is-flex'>
        <h3 className='mr-2'>Built with:</h3>
          {techUsed.map((tech) => {
            return (
              <div key={tech._key} className="ml-2 mr-2 is-flex">
                <p>✨{tech.name}</p>
              </div>        
            ) 
          })}
      </div>
      <a href={url}>
        <p data-scroll data-scroll-speed="2"><span>You can find  more details on Github</span></p>
      </a>
    </div>
  ) 
}

export default Project;
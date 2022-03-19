import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import ProjectPreview from '../components/project-preview'
import { title, projectsGridContainer } from '../components/layout.module.css'

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject {
        edges {
          node {
            _id,
            name,
            description,
            githubURL,
            imagePreview {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allSanityProject.edges;

  return (
    <Layout pageTitle="Projects">
      <h1 className={title}>Projects</h1>
      <div className={projectsGridContainer}>
        {projects.map(({ node: project }) => {
          const id = project._id
          const name = project.name;
          const description = project.description;
          // const url = project.githubURL;
          const imageData = project.imagePreview.asset.gatsbyImageData;

          return (
            <ProjectPreview
              id={id}
              name={name}
              description={description}
              imageData={imageData}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default ProjectsPage;
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import ProjectPreview from '../components/project-preview'

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
      <h1>Projects</h1>
      {projects.map(({ node: project }) => {
        const id = project._id
        const name = project.name;
        const description = project.description;
        const url = project.githubURL;
        const imageData = project.imagePreview.asset.gatsbyImageData;

        return (
          <ProjectPreview
            id={id}
            name={name}
            description={description}
            url={url}
            imageData={imageData}
          />
        )
      })}
    </Layout>
  )
}

export default ProjectsPage;
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"
import ProjectPreview from '../components/project-preview'

export default () => {
    const data = useStaticQuery(graphql`
      {
        allSanityProject {
          edges {
            node {
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
        const name = project.name;
        const description = project.description;
        const slug = project.slug;
        const url = project.githubURL;
        const imageData = project.imagePreview.asset.gatsbyImageData;

        return (
          <ProjectPreview
            name={name}
            description={description}
            slug={slug}
            url={url}
            imageData={imageData}
          />
        )
      })}
    </Layout>
  )
}
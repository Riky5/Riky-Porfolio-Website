import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Project from '../components/project'

export const query = graphql`
query ($name: String!) {
  sanityProject(name: {eq: $name}) {
    name
    description
    githubURL
    imagePreview {
      asset {
        gatsbyImageData
      }
    }
  }
}
`;

const ProjectTemplate = ({ data }) => {
  const project = data.sanityProject;
  const name = project.name;
  const description = project.description;
  const imageData = project.imagePreview.asset.gatsbyImageData;
  const url = project.githubURL;

  return (
    <Layout>
      <Project
        name={name}
        description={description}
        imageData={imageData}
        url={url}
      />
    </Layout>
  )
};

export default ProjectTemplate;
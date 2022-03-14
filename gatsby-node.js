exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
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
      }
    }
  `);
  if (result.error) {
    reporter.panic('There was an error loading your projects!');
    return;
  }

  const projects = result.data.allSanityProject.edges;
  console.log(projects)
  
  projects.forEach(({ node: { name } }) => {
    actions.createPage({
      path: `/projects/${name}/`,
      component: require.resolve('./src/templates/project.js'),
      context: { name }
    });
  });
};
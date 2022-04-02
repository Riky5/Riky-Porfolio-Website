import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Person from "../components/person"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPerson {
        edges {
          node {
            _id
            name
            role
          }
        }
      }
    }
  `);

  const person = data.allSanityPerson.edges;

  return (
      <Layout pageTitle='My Portfolio'>
        {person.map(({node: person}) => {
          const id = person._id;
          const name = person.name;
          const role = person.role;

            return (
              <Person
                id={id}
                name={name}
                role={role}
              />
            )
          })}
      </Layout>
  )
}

export default IndexPage

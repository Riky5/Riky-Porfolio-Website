import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { homepage, bigButton } from '../components/layout.module.css'

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
              <div key={id} className={homepage} data-scroll-section>
                <div>
                  <h4>{name}</h4>
                  <button className={bigButton}><a href='https://github.com/Riky5'>Github</a></button>
                </div>
                <h1 data-scroll data-scroll-speed="2">{role}</h1>
              </div>
            )
          })}
      </Layout>
  )
}

export default IndexPage

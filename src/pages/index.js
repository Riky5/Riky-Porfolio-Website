import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { homepage, bigButton } from '../components/layout.module.css'
// import { StaticImage } from "gatsby-plugin-image"

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
                <h2>{name}</h2>
                <h1 data-scroll data-scroll-speed="2">{role}</h1>
              </div>
            )
          })}
        <button href='#' className={bigButton}>Explore</button>
        {/* <StaticImage
        alt='my drawing of a dog called Bernie'
        src='../images/bernie.jpg'
        height='700'
        >
        </StaticImage> */}
      </Layout>
  )
}

export default IndexPage

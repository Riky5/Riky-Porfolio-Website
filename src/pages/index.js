import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { homepage, homepageText, bigButton } from '../components/layout.module.css'
// import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPerson {
        edges {
          node {
            name
            role
          }
        }
      }
    }
  `);

  // const person = data.allSanityPerson.edges;

  return (
      <Layout pageTitle='My Portfolio'>
        <div className={homepage}>
          <h1 className={homepageText}>Junior Software Developer</h1>
        </div>
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

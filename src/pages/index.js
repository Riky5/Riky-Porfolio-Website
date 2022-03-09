import * as React from "react"
import Layout from "../components/layout"
import { homepage, homepageText } from '../components/layout.module.css'
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
      <Layout pageTitle='My eCV'>
        <div className={homepage}>
          <h1 className={homepageText}>Junior Software Developer</h1>
        </div>
        <StaticImage
        alt='my drawing of a dog called Bernie'
        src='../images/bernie.jpg'
        height='700'
        >
        </StaticImage>
      </Layout>
  )
}

export default IndexPage

import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { about } from "../components/layout.module.css"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPerson {
        edges {
          node{
            _id
            name
            about
            tech {
              name
            }
            educationAndGurus {
              name
            }
          }
        }
      }
    }
  `);

    const info = data.allSanityPerson.edges;

  return (
    <Layout pageTitle="About">
      <div>
      {info.map(({node: info}) => {
        const id = info._id;
        const name = info.name;
        const paragraphs = info.about;
        const techs = info.tech;
        return (
          <div key={id}>
            <section className={about}>
              <h1 data-scroll data-scroll-speed="1">{name}</h1>
              <div data-scroll data-scroll-speed="2">
                {paragraphs.map((p) => {
                  return (
                    <p>{p}</p>
                  );
                })}
              </div>
            </section>
            <section className={about}>
              <h1 data-scroll data-scroll-speed="1">Techs</h1>
              <div>
                {techs.map((tech) => {
                  return (
                    <ul>
                      <li>{tech.name}</li>
                    </ul>
                  )
                })}
              </div>
            </section>
            <section className={about}>
              <h1 data-scroll data-scroll-speed="1">Education</h1>
            </section>
          </div>
        );
      })}
      </div>
    </Layout>
  )
}

export default AboutPage
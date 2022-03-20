import * as React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Profile from "../components/profile";
import TechList from '../components/tech-list';
import Education from '../components/education';

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
            <Profile 
              name = {name}
              paragraphs = {paragraphs}
            />
            <TechList
              techs = {techs}
            />
            <Education />
          </div>
        );
      })}
      </div>
    </Layout>
  )
}

export default AboutPage
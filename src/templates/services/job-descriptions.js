import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { ContactLink, Breadcrumbs } from '../../components/Navigation'

export const JobDescriptionsPageTemplate = ({ hero, location }) => {
  return (
    <div>
      <section className="section header-compliance">
        <div className="container">
          <h1 className="has-text-centered">{hero.heading}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section className="section is-primary is-medium">
        <div className="container has-text-centered">
          <h1>What is it that you do exactly?</h1>
          <h3>The development of job descriptions to comply with FLSA and ensure all appropriate requirements are included based on the essential functions, physical demands, industry standards, safety, etc. </h3>
          <ContactLink location={location} className="button is-light is-outlined is-large m-t-25">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></ContactLink>
        </div>
      </section>
    </div>
  )
}

const JobDescriptionsPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <JobDescriptionsPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default JobDescriptionsPage

export const jobDescriptionsPageQuery = graphql`
  query JobDescriptionsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        hero {
          heading
          subheading
        }
      }
    }
  }
`

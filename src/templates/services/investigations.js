import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'

export const InvestigationsPageTemplate = ({ hero, location }) => {
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

      <section className="section is-light is-medium">
        <div className="container">
          <h1 className="has-text-centered has-text-primary">Discrimination Investigations</h1>
          <h3 className="has-text-centered">Investigations based on discrimination of a protected characteristics.  Investigations based on internal allegation, DDOL or EEOC.</h3>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <h1 className="has-text-centered">Harassment Investigations</h1>
          <h3 className="has-text-centered">Investigations based on an allegation of any form of harassment.  Investigations based on internal allegation, DDOL or EEOC.</h3>
        </div>
      </section>
    </div>
  )
}

const InvestigationsPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <InvestigationsPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default InvestigationsPage

export const investigationsPageQuery = graphql`
  query InvestigationsPage($id: String!) {
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

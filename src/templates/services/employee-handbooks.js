import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'
import { Breadcrumbs } from '../../components/Navigation'

export const EmployeeHandbooksPageTemplate = ({ hero, location }) => {
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
          <h3>New Employee Handbook</h3>
          <p>An Employee Handbook will incorporate all of your current policies and practices while ensuring compliance with Federal and State Labor and Employment Laws.  Develop or enhance your current policies to limit the company’s exposure to litigation while providing some flexibility to allow discretion to management in their decision making process.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>Handbook Revisions</h3>
          <h5>The modification and enhancement of an organization’s handbook to meet the changing needs of the business or legislative requirements.</h5>
          <Link to="/contact" className="button is-primary is-large m-t-25">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
        </div>
      </section>
    </div>
  )
}

const EmployeeHandbooksPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <EmployeeHandbooksPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default EmployeeHandbooksPage

export const employeeHandbooksPageQuery = graphql`
  query EmployeeHandbooksPage($id: String!) {
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

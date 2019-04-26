import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'

export const MandatedTrainingPageTemplate = ({ hero, location }) => {
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

      <section className="section is-light">
        <div className="container m-t-100">
          <h4>To help maintain a safe and productive workplace, employers should adequately train their employees on their obligations under the law and to the company.</h4>
          <h5 className="m-t-50 m-b-10 is-size-4">Not sure what your company's requirements are?</h5>
          <Link to="/contact" className="button is-primary is-large">We can help with that<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
          <h3 className="has-text-centered m-t-100">Here's what is required in Delaware:</h3>
        </div>
      </section>

      <section className="section is-primary has-blue-gradient-primary-stripe-background">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <div className="tile card">
                <div className="card-content">
                  <h4>Interactive Sexual Harassment Prevention</h4>
                  <p className="m-b-25">Required every two years for companies with 50 or more employees in Delaware.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4"></div>
            <div className="column is-8">
              <div className="tile card">
                <div className="card-content">
                  <h4>Supervisor Reasonable Suspicion Testing</h4>
                  <p className="m-b-25">Required annually for all companies working on New Castle County Projects.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8">
              <div className="tile card">
                <div className="card-content">
                  <h4>Drug use and its effect on personal health, safety and the workplace for Employees</h4>
                  <p className="m-b-25">Is required biennially for all companies working on New Castle County Projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-primary">
        <div className="container has-text-centered">
          <Link to="/contact" className="button is-light is-outlined is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
        </div>
      </section>
    </div>
  )
}

const MandatedTrainingPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <MandatedTrainingPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default MandatedTrainingPage

export const mandatedTrainingPageQuery = graphql`
  query MandatedTrainingPage($id: String!) {
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

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { ContactLink, Breadcrumbs } from '../../components/Navigation'

export const AdditionalTrainingPageTemplate = ({ hero, location }) => {
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
          <h1 className="has-text-centered has-text-primary">We do more than legally mandated training</h1>
          <h3 className="has-text-centered">Here's just a sample of other training programs we offer:</h3>

          <div className="tile is-ancestor m-t-50">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-chalkboard-teacher"></i> Coaching and Counseling</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-exclamation-triangle"></i> Conflict Resolution</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-clipboard"></i> Documentation and Termination</p>
                </div>
              </div>
            </div>
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-universal-access"></i> Diversity and Inclusion</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="far fa-comments"></i> Effective Communication</p>
                </div>
              </div>
            </div>
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-list-ol"></i> Interviewing Do’s and Don’ts</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-users"></i> New Supervisor Training</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-chart-bar"></i> Performance Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>Don't see what you are looking for?</h3>
          <h5>Additional customized training programs can be developed upon request. We take pride in tailoring our programs to exactly what your company needs.</h5>
          <ContactLink location={location} className="button is-primary is-large m-t-25">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></ContactLink>
        </div>
      </section>
    </div>
  )
}

const AdditionalTrainingPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <AdditionalTrainingPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default AdditionalTrainingPage

export const additionalTrainingPageQuery = graphql`
  query AdditionalTrainingPage($id: String!) {
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

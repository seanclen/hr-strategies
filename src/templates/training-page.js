import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Breadcrumbs } from '../components/Navigation'

export const TrainingPageTemplate = ({ hero, location }) => {
  return (
    <div>
      <section className="section header-compliance">
        <div className="container">
          <h1 className="has-text-centered">{hero.heading}</h1>
          <h3 className="has-text-centered">Regulations are always changing, so should your company's policies.</h3>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <h4>Get the exact results you want with customized training to meet your organization’s culture, philosophy and schedule.</h4>
          <p>HR Strategies will develop and deliver training for your employees that will support your current and future business needs.</p>
          <Link to="/contact" className="button is-primary is-large m-t-25">Talk to Us<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
          <h3 className="has-text-centered m-t-50">How We Can Help</h3>
          <Link to="/training/mandated-training" className="m-t-100 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Mandated Training</h1>
                <p>In every company, Human Resources (HR) training in many employee-related and legally-related topics is mandatory, especially for managers and supervisors. You need to equip your employees to handle their employee relations responsibilities competently and legally.</p>
                <strong><Link to="/training/mandated-training">Learn more</Link></strong>
              </div>
            </div>
          </Link>
          <Link to="/training/additional-training" className="m-t-50 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Additional Training</h1>
                <p>We cover more than your legally mandated training courses. Topics like Coaching and Counseling, Conflict Resolution, Diversity and Inclusion, Documentation and Termination, Effective Communication, Interviewing Do’s and Don’ts, New Supervisor Training, and Performance Management are offered.</p>
                <strong><Link to="/training/additional-training">Learn more</Link></strong>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container has-text-centered">
          <h4 className="has-text-primary">Ready to take your employee and manager training to the next level?</h4>
          <div className="m-t-100">
            <Link to="/contact" className="button is-primary is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const TrainingPage = ({ data, location }) => {
  const { markdownRemark: query } = data
  return(
    <Layout>
      <TrainingPageTemplate
        hero={query.frontmatter.hero}
        location={location} />
    </Layout>
  )
}

export default TrainingPage

export const trainingPageQuery = graphql`
  query TrainingPage($id: String!) {
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

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'

export const EmployeeRelationsPageTemplate = ({ hero, location }) => {
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
          <h3 className="has-text-centered has-text-primary">Career and Succession Planning</h3>
          <h5 className="has-text-centered">The process for identifying and developing new leaders who can replace others when they leave the organization. It increases the availability of experienced and capable employees that are prepared to assume these roles as they become available.</h5>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>Coaching and Counseling</h3>
          <h5>Coaching focuses on the developmental side of acquiring knowledge and skills to help employees effectively perform and counseling focuses on changing behavior.</h5>
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <h3 className="has-text-centered has-text-primary">Onboarding Programs</h3>
          <h5 className="has-text-centered">An effective onboarding includes teaching new hires about the mission, vision, values and culture of the organization; it also ensures that new employees fully understand their roles and how they relate to the organization’s big picture operations. New employees should learn what’s expected, how to deliver, and how and when they will be evaluated.</h5>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>Performance Management</h3>
          <h5>The process for planning, monitoring, and assessing an employee's work objectives and overall contribution to the organization. It involves aligning an employee's skills, competencies, and development plans with the overall business strategy to plan work and set expectations.</h5>
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <h3 className="has-text-centered has-text-primary">Reference Checks</h3>
          <h5 className="has-text-centered">When an employer contacts a job applicant's previous employers, schools, colleges, and other sources to learn more about his or her employment history, educational background, and qualifications for a job.</h5>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>Retention Programs</h3>
          <h5>Managing for employee retention involves strategic actions to keep employees motivated and focused so they elect to remain employed and fully productive for the benefit of the organization. A comprehensive employee retention program can play a vital role in both attracting and retaining key employees, as well as in reducing turnover and its related costs. All of these contribute to an organization's productivity and overall business performance. </h5>
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <h3 className="has-text-centered has-text-primary">Wellness Intervention</h3>
          <h5 className="has-text-centered">When you have healthy employees, your company reaps the benefits. A correctly designed wellness program can increase productivity, boost moral and reduce stress. Wellness programs help employees make smart and healthy choices that can reduce health care costs, increase vitality and diminish absenteeism.</h5>
        </div>
      </section>
    </div>
  )
}

const EmployeeRelationsPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <EmployeeRelationsPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default EmployeeRelationsPage

export const employeeRelationsPageQuery = graphql`
  query EmployeeRelationsPage($id: String!) {
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

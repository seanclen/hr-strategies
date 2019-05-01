import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Breadcrumbs } from '../components/Navigation'

export const CompliancePageTemplate = ({ hero, location }) => {
  return (
    <div>
      <section className="section header-compliance">
        <div className="container">
          <h1 className="has-text-centered">{hero.heading}</h1>
          <h3 className="has-text-centered">Protect your company from legal problems.</h3>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <h4>HR Strategies, LLC will ensure your organization is in compliance with Federal, State, and Local employment and labor laws which are determined by the company size, location and industry.</h4>
          <Link to="/contact" className="button is-primary is-large m-t-25">Talk to Us<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
          <h3 className="has-text-centered m-t-50">How We Can Help</h3>
          <Link to="/compliance/affirmative-action" className="m-t-100 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Affirmative Action Plans</h1>
                <p>Under federal law, government contractors and subcontractors with 50 or more employees who have entered into at least one contract of $50,000 or more with the federal government must prepare and maintain a written affirmative action program, which must be developed within 120 days from the commencement of the contract and <strong>must be updated annually</strong>. Many states also have affirmative action program requirements for state government contractors.</p>
                <strong><Link to="/compliance/affirmative-action">Learn more</Link></strong>
              </div>
            </div>
          </Link>
          <Link to="/compliance/diversity-programs" className="m-t-50 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Diversity Programs</h1>
                <p>When an organization embarks on a process of culture change that seeks to incorporate “diversity and inclusion” as part of that change, this is a recognition that an organization’s most valuable assets are its people and that because each person is unique, everyone brings different potential contributions to the workplace.</p>
                <strong><Link to="/compliance/diversity-programs">Learn more</Link></strong>
              </div>
            </div>
          </Link>
          <Link to="/compliance/assessment" className="m-t-50 tile card">
            <div className="card-content">
              <div className="content">
                <h1>HR Assessments</h1>
                <p>An HR assessment will be conducted to ensure your organization is compliant with current mandated federal, state, and local labor and employment laws.  The HR Assessment will provide your organization with Recommendations for Immediate Action, Recommendations for Reducing Exposure to Litigation, and suggestions for future HR enhancements.</p>
                <strong><Link to="/compliance/assessment">Learn more</Link></strong>
              </div>
            </div>
          </Link>
          <Link to="/compliance/policy-development" className="m-t-50 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Policy Development</h1>
                <p>As new legislation becomes effective or your business needs change, HR Strategies can develop policies to support these changes.  Examples are Anti-harassment, Workplace Bullying, Social Media, Paid Leave, etc.</p>
                <strong><Link to="/compliance/policy-development">Learn more</Link></strong>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="section is-primary">
        <div className="container has-text-centered">
          <Link to="/contact" className="button is-light is-large is-outlined">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
        </div>
      </section>
    </div>
  )
}

const CompliancePage = ({ data, location }) => {
  const { markdownRemark: query } = data
  return(
    <Layout>
      <CompliancePageTemplate
        hero={query.frontmatter.hero}
        location={location} />
    </Layout>
  )
}

export default CompliancePage

export const compliancePageQuery = graphql`
  query CompliancePage($id: String!) {
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

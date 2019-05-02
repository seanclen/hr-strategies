import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ContactLink, Breadcrumbs } from '../components/Navigation'

export const ServicesPageTemplate = ({ hero, location }) => {
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
          <h4>HR services that grant you the freedom to focus on growth and opportunity</h4>
          <p>We take into consideration your industry, culture, philosophy, business model and your current or pressing needs to collaboratively develop a recommended path forward to achieve your goals.</p>
          <ContactLink location={location} className="button is-primary is-large m-t-25">Talk to Us<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></ContactLink>
          <h3 className="has-text-centered m-t-50">How We Can Help</h3>
          <Link to="/services/employee-relations" className="m-t-100 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Employee Relations</h1>
                <p>We cover all aspects of your employee services. From Career and Succession Planning, to Performance Management, we can help you attract and retain the best talent.</p>
                <strong><Link to="/services/employee-relations">Learn more</Link></strong>
              </div>
            </div>
          </Link>
          <Link to="/services/compensation-benefits" className="m-t-50 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Compensation & Benefits</h1>
                <p>When is the last time a compensation study was conducted on your company’s critical positions and what was included?</p>
                <strong><Link to="/services/compensation-benefits">Learn more</Link></strong>
              </div>
            </div>
          </Link>
          <Link to="/services/employee-handbooks" className="m-t-50 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Employee Handbooks</h1>
                <p>Develop or enhance your current policies to limit the company’s exposure to litigation while providing some flexibility to allow discretion to management in their decision making proces.</p>
                <strong><Link to="/services/employee-handbooks">Learn more</Link></strong>
              </div>
            </div>
          </Link>
          <Link to="/services/job-descriptions" className="m-t-50 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Job Descriptions</h1>
                <p>Development of job descriptions to comply with FLSA and ensure all appropriate requirements are included based on the essential functions, physical demands, industry standards, safety, etc. </p>
                <strong><Link to="/services/job-descriptions">Learn more</Link></strong>
              </div>
            </div>
          </Link>
          <Link to="/services/investigations" className="m-t-50 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Investigations</h1>
                <p>Investigations based on an allegation of any form of harassment or discrimination of a protected characteristics.</p>
                <strong><Link to="/services/investigations">Learn more</Link></strong>
              </div>
            </div>
          </Link>
          <Link to="/services/recruiting-staffing" className="m-t-50 tile card">
            <div className="card-content">
              <div className="content">
                <h1>Recruiting & Staffing</h1>
                <p>If your organization has job openings and needs assistance in filling those open positions, contact HR Strategies for support.</p>
                <strong><Link to="/services/recruiting-staffing">Learn more</Link></strong>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

const ServicesPage = ({ data, location }) => {
  const { markdownRemark: query } = data
  return(
    <Layout>
      <ServicesPageTemplate
        hero={query.frontmatter.hero}
        location={location} />
    </Layout>
  )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
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

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'

export const RecruitingStaffingPageTemplate = ({ hero, location }) => {
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
          <h1 className="has-text-primary">Looking to expand?</h1>
          <h1 className="has-text-primary-light">Need to fill an opening?</h1>
          <h3>We've got you covered.</h3>
          <Link to="/contact" className="button is-white is-large m-t-25">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
        </div>
      </section>

      <section className="section has-background-info">
        <div className="container">
          <h1 className="has-text-white">Experience over <span className="has-text-weight-bold">65%</span> savings.</h1>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <h3>Save money by doing less.</h3>
          <h5>In the past our clients have experienced an average 56.78% savings in their recruiting costs which have positively impacted their bottom line.</h5>
          <br />
          <p>If your organization has job openings and needs assistance in filling those open positions, contact HR Strategies for support.  We can focus on your recruiting needs so that you can focus on your business needs.  Our recruiting processes have proven that we are able to save our clients’ money.  </p>
        </div>
      </section>
    </div>
  )
}

const RecruitingStaffingPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <RecruitingStaffingPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default RecruitingStaffingPage

export const recruitingStaffingPageQuery = graphql`
  query RecruitingStaffingPage($id: String!) {
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

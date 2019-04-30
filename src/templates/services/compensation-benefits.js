import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'

export const CompensationBenefitsPageTemplate = ({ hero, location }) => {
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
          <h2>Compensation Studies</h2>
          <p>When is the last time a compensation study was conducted on your company’s critical positions and what was included?  Organizational factors that must be taken into consideration include size; whether it is a profit, non-profit or government entity; the organization’s financial stability; pay philosophy; and skill required; creative, intuitive, resourcefulness and management abilities; responsibility for company assets such as money and large clients; physical requirements and working conditions.</p>
          <br />
          <p>If recruitment or turnover is an issue, it’s important to find out why people are leaving or not joining your team. If compensation is the deciding factor for them, it’s time to conduct a compensation study for your organization.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3>Benefit Program Evaluations</h3>
          <h5>Additional customized training programs can be developed upon request. We take pride in tailoring our programs to exactly what your company needs.</h5>
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

const CompensationBenefitsPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <CompensationBenefitsPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default CompensationBenefitsPage

export const compensationBenefitsPageQuery = graphql`
  query CompensationBenefitsPage($id: String!) {
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

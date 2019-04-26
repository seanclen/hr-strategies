import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'

export const PolicyDevelopmentPageTemplate = ({ hero, location }) => {
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

      <section className="section is-primary is-medium">
        <div className="container">
          <h4>2018 proved to be a busy year, new and amended employment-related laws took effect in 27 states, many applying to all employers.</h4>
          <h5 className="m-t-50 m-b-10 is-size-4">Not sure if your company's policies are still compliant?</h5>
          <Link to="/contact" className="button is-light is-outlined is-large">We can help with that<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-narrow">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-handshake fa-stack-1x fa-inverse"></i>
              </span>
            </div>
            <div className="column">
              <h3>Let HR Strategies simplify your compliance efforts.</h3>
              <h6>Employment law has become increasingly complex with the trend toward regional legislation at the state and municipal level. We will stay up to date with new legislation and policies so you don't need to waste time or precious resources.</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <h3 className="has-text-centered">Here's just a sample of what we can do:</h3>
          <div className="tile is-ancestor m-t-50">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fab fa-accessible-icon"></i> Reasonable Accomodations</p>
                  <p>Allowing people who have certain conditions public access to employee restrooms.</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-home"></i> Leaves of Absense</p>
                  <p>ew Jersey was one of several states that passed a statewide paid-sick-leave law.</p>
                </div>
              </div>
            </div>
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-coins"></i> Equal Pay</p>
                  <p>States and localities are aggressively pushing to pass pay-equity laws to achieve fair pay across the board.</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-smoking-ban"></i> Smoke-Free Workplace</p>
                  <p>More states are including e-cigarettes and other tobacco substitutes in their laws prohibiting smoking in the workplace.</p>
                </div>
              </div>
            </div>
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-user-shield"></i> Anti-Sexual Harassment</p>
                  <p>Harassment laws have resulted in requirements for policy inclusions and exclusions, anti-sexual harassment training, and employee communication.</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="title"><i class="fas fa-cog"></i>Whatever You Need</p>
                  <p>Let us review your polices and practices. Protect your people and your company.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <h4 className="has-text-primary">We stay updated on all of the new legislation and policies so you don't have to.</h4>
          <p className="m-t-25 subtitle">Do what you do best, we'll take it from here.</p>
          <div className="has-text-centered m-t-100">
            <Link to="/contact" className="button is-primary is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const PolicyDevelopmentPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <PolicyDevelopmentPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default PolicyDevelopmentPage

export const PolicyDevelopmentPageQuery = graphql`
  query PolicyDevelopmentPage($id: String!) {
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

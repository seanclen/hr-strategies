import React from 'react'
import { graphql, Link } from 'gatsby'
import Content, { HTMLContent } from '../../components/Content'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'

export const AffirmativeActionPageTemplate = ({ hero, content, contentComponent, location }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <section className="section is-light">
        <div className="container">
          <h1 className="has-text-centered">{hero.heading}</h1>
          <h3 className="has-text-centered">{hero.subheading}</h3>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <h3 className="has-text-centered">Does this describe your company?</h3>
          <div className="level p-t-50 p-b-50">
            <div className="level-item has-text-centered">
              <div>
                <h1 className="has-text-primary is-size-0 has-text-weight-bold"><i className="fas fa-flag-usa" /></h1>
                <h1 className="heading is-size-5">Government Contractor</h1>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <h1 className="has-text-primary is-size-0 has-text-weight-bold">50<span className="has-text-primary-light">+</span></h1>
                <h1 className="heading is-size-5">Employees</h1>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <h1 className="has-text-primary is-size-0 has-text-weight-bold">
                  $50k <span className="has-text-primary-light is-size-3">or higher</span>
                </h1>
                <h1 className="heading is-size-5">Contract</h1>
              </div>
            </div>
          </div>
          <div className="tile card">
            <div className="card-content">
              <h3 className="has-text-centered">If so, your business is legally required to prepare and maintain an AAP.</h3>
              <div className="has-text-centered m-t-25">
                <Link to="/contact" className="button is-primary is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-info">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-2 has-text-centered">
              <h1 className="has-text-white"><i className="fas fa-exclamation" style={{fontSize: '10rem'}} /></h1>
            </div>
            <div className="column">
              <h2>Stay Compliant with the Law.</h2>
              <p>Under federal law, government contractors and subcontractors with 50 or more employees who have entered into at least one contract of $50,000 or more with the federal government must prepare and maintain a written affirmative action program, which must be developed within 120 days from the commencement of the contract and <strong>must be updated annually</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-shadow p-t-150">
        <div className="container">
          <h3 className="has-text-centered">Another Title</h3>
          <p>Depending upon the size of contracts at issue, government contractors are required to develop affirmative action programs to comply with regulations that prohibit employment discrimination and require contractors to exercise good faith efforts so that protected classes have the opportunity to be hired and advance in employment.</p>
        </div>
      </section>
      <section className="section is-primary has-blue-gradient-primary-stripe-background">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <div className="tile card">
                <div className="card-content">
                  <h4>Executive Order 11246</h4>
                  <p>Prohibits discrimination on the basis of race, color, religion, sex, or national origin.</p>
                  <a href="https://en.wikipedia.org/wiki/Executive_Order_11246">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4"></div>
            <div className="column is-8">
              <div className="tile card">
                <div className="card-content">
                  <h4>Rehabilitation Act of 1973</h4>
                  <p>Prohibits discrimination on the basis of disability.</p>
                  <a href="https://en.wikipedia.org/wiki/Rehabilitation_Act_of_1973">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8">
              <div className="tile card">
                <div className="card-content">
                  <h4>Vietnam Era Veterans Readjustment Assistance Act of 1974 (VEVRAA)</h4>
                  <p>Prohibits discrimination against certain classes of veterans.</p>
                  <a href="https://en.wikipedia.org/wiki/Vietnam_Era_Veterans%27_Readjustment_Assistance_Act">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-primary is-medium">
        <div className="container">
          <h1>Failure to Comply</h1>
          <PageContent className="content" content={content} />
        </div>
      </section>
    </div>
  )
}

const AffirmativeActionPage = ({ data, location }) => {
  const { markdownRemark: query } = data;

  return (
    <Layout>
      <AffirmativeActionPageTemplate
        contentComponent={HTMLContent}
        hero={query.frontmatter.hero}
        content={query.html}
        location={location}
      />
    </Layout>
  )
}

export default AffirmativeActionPage

export const AffirmativeActionPageQuery = graphql`
  query AffirmativeActionPage($id: String!) {
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

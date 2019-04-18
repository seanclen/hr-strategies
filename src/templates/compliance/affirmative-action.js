import React from 'react'
import { graphql, Link } from 'gatsby'
import Content, { HTMLContent } from '../../components/Content'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'

import landingjpg from '../../assets/img/video/Diagonal.jpg'

export const AffirmativeActionPageTemplate = ({ hero, content, contentComponent, location }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <section className="section header-compliance is-medium">
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
              <h3 className="has-text-centered">If so, your business is <strong>legally required</strong> to prepare and maintain an AAP.</h3>
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
              <h4><strong>Failure to Comply</strong> considered a violation of the government contract!</h4>
              <p>The Department of Labor’s Office of Federal Contract Compliance Program (OFCCP) has the authority to audit your company.</p>
              <Link to="/compliance/affirmative-action#failure-to-comply" className="button is-white m-t-25">What does an audit look like?</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-dark is-medium">
        <div className="container">
          <h1 className="has-text-centered m-b-25">Stay Compliant with the Law.</h1>
          <div className="columns is-vcentered">
            <div className="column">
              <h4>It's The Law:</h4>
              <p>Under <strong>federal law</strong>, government contractors and subcontractors with 50 or more employees who have entered into <strong>at least one contract</strong> of $50,000 or more with the federal government must prepare and maintain a written affirmative action program, which must be developed within 120 days from the commencement of the contract and <strong>must be updated annually</strong>.</p>
            </div>
            <div className="column">
              <h4 className="is-italic has-text-grey-light">"...must be developed within 120 days and updated annually."</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-shadow is-medium">
        <div className="container">
          <div className="columns">
            <div className="column is-5">
              <figure className="image">
                <img src="https://assets.entrepreneur.com/content/3x2/2000/20170525170822-GettyImages-537155143.jpeg" />
              </figure>
              <small>John F. Kennedy</small>
            </div>
            <div className="column">
              <h3>Created in 1961, changes as recent as 2014</h3>
              <hr />
              <p>First signed by President John F. Kennedy, the first iteration of AAP required that government contractors "take affirmative action to ensure that applicants are employed, and employees are treated during employment, without regard to their race, creed, color, or national origin"</p>
              <br />
              <p>Over the years <Link to="/compliance/affirmative-action#ammendments">ammendments have been passed</Link>. Discrimination based on sex is prohibited and recently new regulations were passed in 2014 that require identification and an evaluation of the company’s <em>good faith efforts</em> to recruit protected veterans and disabled individuals.  This obligation will necessitate the contractor to list all of the recruiting efforts the company made during the calendar year, time period to recruit veterans and disabled individuals — along with an evaluation of the effectiveness of each effort.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="ammendments" className="section is-primary has-blue-gradient-primary-stripe-background">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <div className="tile card">
                <div className="card-content">
                  <h4>Executive Order 11246</h4>
                  <p className="m-b-25">Prohibits discrimination on the basis of race, color, religion, sex, or national origin.</p>
                  <strong><a href="https://en.wikipedia.org/wiki/Executive_Order_11246">Learn more</a></strong>
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
                  <p className="m-b-25">Prohibits discrimination on the basis of disability.</p>
                  <strong><a href="https://en.wikipedia.org/wiki/Rehabilitation_Act_of_1973">Learn more</a></strong>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-8">
              <div className="tile card">
                <div className="card-content">
                  <h4>Vietnam Era Veterans Readjustment Assistance Act of 1974 (VEVRAA)</h4>
                  <p className="m-b-25">Prohibits discrimination against certain classes of veterans.</p>
                  <strong><a href="https://en.wikipedia.org/wiki/Vietnam_Era_Veterans%27_Readjustment_Assistance_Act">Learn more</a></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="failure-to-comply" className="section is-primary is-medium">
        <div className="container">
          <h1>Failure to Comply</h1>
          <div class="content">
            <p>Failure to comply with the non-discrimination or affirmative action provisions in a contract is considered a violation of government contract. The Department of Labor’s Office of Federal Contract Compliance Program (OFCCP) is the agency with authority to enforce these laws by auditing a company’s AAPs and employment practices.</p>
          </div>
          <h4 className="m-t-25">Your company may be susceptible to:</h4>
          <div className="tile is-ancestor m-t-25">
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle">AAP audit</p>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle">Employment practices audit</p>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle">Compliance evaluations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle">Off-site review of records</p>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle">On-site review of records and interviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <h4 className="has-text-primary">In every OFCCP audit, the Compliance Officer will request to review the current year AAP and possibly the previous two year's AAP.</h4>
          <p className="m-t-25 subtitle">It is extremely important to ensure that all AAPs are properly updated each year and retained.</p>
          <div className="has-text-centered m-t-100">
            <Link to="/contact" className="button is-primary is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
          </div>
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

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'
import { Breadcrumbs } from '../../components/Navigation'

export const AssessmentsAuditsPageTemplate = ({ hero, location }) => {
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
          <div className="content">
            <h1>Curious about your company’s compliance and efficiency?</h1>
            <p>Nothing in the business world is static and in todays fast-paced business landscape, it can be difficult to maintain a competitive edge that separates you from your competitors. Whether you are looking to stay compliant with ever-changing laws and regulations, seeking to retain top talent at your company, or just want to ensure that your business is running as efficiently and effectively as possible, we can help you gain a clear picture of where you currently stand and offer advice for your next steps.</p>
          </div>
        </div>
      </section>

      <section className="section is-primary is-medium">
        <div className="container">
          <h4>This is where we come in.</h4>
          <p>An HR Assessment from us will provide your organization with the following reports:</p>
          <div className="columns m-t-25">
            <div className="column">
              <div className="card is-child">
                <div className="card-content">
                  <h5><i class="fas fa-chevron-right m-r-10"></i> Immediate Action</h5>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card is-child">
                <div className="card-content">
                  <h5><i class="fas fa-chevron-right m-r-10"></i> Reducing Exposure to Litigation</h5>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card is-child">
                <div className="card-content">
                  <h5><i class="fas fa-chevron-right m-r-10"></i> Recommended HR Enhancements</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-text-centered">
        <div className="level">
          <p className="level-item"><span className="subtitle m-r-25">Are you satisfying all laws &amp; regulations?</span> <Link to="/contact" className="button is-primary is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link></p>
        </div>
      </section>


    </div>
  )
}

const AssessmentsAuditsPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <AssessmentsAuditsPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default AssessmentsAuditsPage

export const AssessmentsAuditsPageQuery = graphql`
  query AssessmentsAuditsPage($id: String!) {
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

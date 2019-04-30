import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'
import { Breadcrumbs } from '../../components/Navigation'

export const AssessmentPageTemplate = ({ hero, location }) => {
  return (
    <div>
      <section className="section header-compliance">
        <div className="container">
          <h1 className="has-text-centered">{hero.heading}</h1>
          <h3 className="has-text-centered">Be proactive in protecting your company from litigation.</h3>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <h1 className="has-text-right">Nothing in the business world is static</h1>
          <h3 className="m-t-100">In todays fast-paced business landscape, it can be difficult to maintain a competitive edge that separates you from your competitors.</h3>
          <p className="has-text-centered m-t-100"><Link to="/contact" className="button is-info is-large">We can help you find out how<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link></p>
        </div>
      </section>

      <section className="section is-primary is-medium">
        <div className="container">
          <h2 className="has-text-centered">We let you know where your company stands.</h2>
          <h5 className="has-text-centered">An HR Assessment from us will provide your organization with the following reports:</h5>
          <div className="timeline m-t-100">
            <div className="timeline-item is-danger">
              <div className="timeline-marker is-danger m-t-10"></div>
              <div className="timeline-content">
                <p className="title">Immediate Action</p>
                <div className="card is-child is-white">
                  <div className="card-content">
                    <div class="columns">
                      <div className="column is-narrow"><h1 className="m-t--10"><i className="fas fa-exclamation has-text-primary m-r-10"></i></h1></div>
                      <div className="column">
                        <h5>Your company is currently in violation of existing regulations or missing important policies.</h5>
                        <p>Points that need your immediate attention. Often times your company has grown and with it come new responsibilities.</p>
                        <div className="p-l-25 p-t-10">
                          <p><i className="fas fa-chevron-circle-right has-text-primary m-r-10"></i> Enhance Equal Employment Opportunity Policy to include new regulation definitions</p>
                          <p><i className="fas fa-chevron-circle-right has-text-primary m-r-10"></i> Modify Sexual Harassment Policy to include procedures and forms for witnessing or experiencing sexual harassment</p>
                          <p><i className="fas fa-chevron-circle-right has-text-primary m-r-10"></i> Replace Timekeeping, Overtime, Meal Periods Policies, and Administrative Pay Corrections with Safe Harbor Policy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning m-t-10"></div>
              <div className="timeline-content">
                <p className="title">Reducing Exposure to Litigation</p>
                <div className="card is-child is-white">
                  <div className="card-content">
                    <div class="columns">
                      <div className="column is-narrow"><h1 className="m-t--10"><i className="fas fa-balance-scale has-text-primary m-r-10"></i></h1></div>
                      <div className="column">
                        <h5>Your company is may run into noncompliance issues in the future.</h5>
                        <p>Protect your business from potential legal issues by implimenting policies before a problem arises.</p>
                        <div className="p-l-25 p-t-10">
                          <p><i className="fas fa-chevron-circle-right has-text-primary m-r-10"></i> Combine Drug and Alcohol Use, Drug Testing policies, and Security Inspections to a Drug-free Workplace Policy</p>
                          <p><i className="fas fa-chevron-circle-right has-text-primary m-r-10"></i> Replace Computer, Internet and Email Usage with an Electronic Communications Policy</p>
                          <p><i className="fas fa-chevron-circle-right has-text-primary m-r-10"></i> Problem Resolution Policy – include rights, responsibilities and procedure, timeline</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item is-success">
              <div className="timeline-marker is-success m-t-10"></div>
              <div className="timeline-content">
                <p className="title">Recommended HR Strategies</p>
                <div className="card is-child is-white">
                  <div className="card-content">
                    <div class="columns">
                      <div className="column is-narrow"><h1 className="m-t--10"><i className="fas fa-search-plus has-text-primary m-r-10"></i></h1></div>
                      <div className="column">
                        <h5>Attract top talent with expanded benefits and employee programs.</h5>
                        <p>Your company should do more than just stay compliant. Attract and retain the best by offering programs that go beyond legal requirements.</p>
                        <div className="p-l-25 p-t-10">
                          <p><i className="fas fa-chevron-circle-right has-text-primary m-r-10"></i> Charitable Contributions Policy</p>
                          <p><i className="fas fa-chevron-circle-right has-text-primary m-r-10"></i> Stress management (massages, pedicures/manicures)</p>
                          <p><i className="fas fa-chevron-circle-right has-text-primary m-r-10"></i> Training (allowed to attend a seminar of employee’s choice)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <p className="is-size-5">Whether you are looking to stay compliant with ever-changing laws and regulations, seeking to retain top talent at your company, or just want to ensure that your business is running as efficiently and effectively as possible, we can help you gain a clear picture of where you currently stand and offer advice for your next steps.</p>
        </div>
        <div className="level m-t-100">
          <p className="level-item"><span className="subtitle m-r-25">Are you satisfying all laws &amp; regulations?</span> <Link to="/contact" className="button is-info is-large">Get a Report<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link></p>
        </div>
      </section>


    </div>
  )
}

const AssessmentPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <AssessmentPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default AssessmentPage

export const AssessmentPageQuery = graphql`
  query AssessmentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        hero {
          heading
        }
      }
    }
  }
`

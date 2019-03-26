import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-light">
        <div className="container">
          <h1 className="has-text-centered">Our Team</h1>
          <div className="p-t-25 columns is-centered">
            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Tricia <span className="is-size-7 has-text-grey-lighter">SHRM-SCP, GPHR, SPHR</span></p>
                      <p className="subtitle is-6">President</p>
                    </div>
                  </div>
                  <div className="content">
                     Tricia is the first and only person in Delaware to achieve
                     all three of these certifications. She has over thirty
                     years of progressive human resources experience with
                     fortune 100 companies, international organizations and
                     small to midsize companies. She has been recognized in her
                     profession with the HR Consultant of the Year Award, ABC
                     Associate Supplier Award, SHRM Innovation Award, Ron Shane
                     HR Lifetime Achievement Award and most recently a finalist
                     for the HR Person of the Year Award. Tricia has been singled
                     out by her clients for her ability to identify and analyze
                     the developmental needs of the leaders she coaches while
                     understanding the impact of their business issues.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Dave <span className="is-size-7 has-text-grey-lighter">SHRM-SCP</span></p>
                      <p className="subtitle is-6">Vice President of HR Operations</p>
                    </div>
                  </div>
                  <div className="content">
                     Dave is leading the Training and Development, and the Talent
                     Acquisition divisions of the business. He continuously
                     develops creative and interactive training programs to
                     ensure engagement and learning objectives are met. His
                     ability to find the right talent, the first time, for
                     diverse organizations has reduced their expenses and
                     helped grow client’s bottom line. He brings thirty plus
                     years of leadership, training, coaching and development
                     as well as recruitment to our organization. Dave is a
                     SHRM-CP and attends 20 to 30 training programs annually
                     to keep apprised of compliance requirements, benchmarking
                     and best practice trends so that he can develop solutions
                     for our client’s needs.
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Chris <span className="is-size-7 has-text-grey-lighter">SHRM-SCP</span></p>
                      <p className="subtitle is-6"> HR Business Partner</p>
                    </div>
                  </div>
                  <div className="content">
                     Chris is a team player credited with supporting
                     organizations and honoring commitments that have been
                     consistently successful. He is a catalyst for a wide range
                     of innovative initiatives involving talent acquisition and
                     team building programs that have positively impacted our
                     clients. Chris has a BS in Organizational and Community
                     Leadership from the University of Delaware and has
                     successfully achieved SHRM-CP. He brings seven plus years
                     of recruiting, multiple years of teambuilding and problem
                     solving to our organization.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import landingjpg from '../assets/img/video/Diagonal.jpg'
import landingmp4 from '../assets/img/video/Diagonal.mp4'

export const AboutPageTemplate = ({ mission, about, story, team, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className="hero is-fullheight has-video-background is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-centered">
              <div className="column is-10 has-text-centered">
                <h4 class="has-text-white">{mission.title}</h4>
                <h1 class="has-text-white has-text-weight-bold">{mission.statement}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="video-viewport">
          <video width="1920" height="1280" autoPlay muted loop>
            <source src={landingmp4} type="video/mp4" />
          </video>
          <img src={landingjpg} alt="People walking" />
        </div>
      </section>
      <section className="section is-dark is-medium">
        <div className="container">
          <h1 className="has-text-centered">{about.title}</h1>
          <div className="tile is-ancestor m-t-25">
            <div className="tile is-parent is-8">
              <div className="tile card is-child">
                <div className="card-content">
                  <h4 className="has-text-primary-light">Your People are Our Business</h4>
                  <p className="is-size-5">
                    {about.body}
                  </p>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <Link to="/" className="tile card is-child is-primary">
                <div className="card-content">
                  <h5>Our Approach</h5>
                </div>
              </Link>
              <Link to="/" className="tile card is-child is-primary">
                <div className="card-content">
                  <h5>Testimonials</h5>
                </div>
              </Link>
              <Link to="/" className="tile card is-child is-primary">
                <div className="card-content">
                  <h5>Case Studies</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <div className="container">
          <h1 className="has-text-centered">Our Story</h1>
        </div>
      </section>
      <section className="section is-light is-medium">
        <div className="container">
          <h1 className="has-text-centered">Our Team</h1>
          <div className="tile is-ancestor m-t-25">
            <div className="tile is-parent">
              <article className="tile card is-child has-background-white">
                <div className="card-content">
                  <p>
                    <span className="title">Tricia Clendening</span> <span className="is-size-5 has-text-grey-lighter">SHRM-SCP, GPHR, SPHR</span>
                  </p>
                  <p className="subtitle">President</p>
                  <div className="content">
                    <p>
                      Tricia, SHRM-SCP, GPHR, SPHR is the President of HR Strategies, LLC.
                      She is the first and only person in Delaware to achieve
                      all three of these certifications. She has over thirty
                      years of progressive human resources experience with fortune
                      100 companies, international organizations and small to midsize
                      companies. She has been recognized in her profession with the
                      HR Consultant of the Year Award, ABC Associate Supplier Award,
                      SHRM Innovation Award, Ron Shane HR Lifetime Achievement Award
                      and most recently a finalist for the HR Person of the Year Award.
                      Tricia has been singled out by her clients for her ability to
                      identify and analyze the developmental needs of the leaders she
                      coaches while understanding the impact of their business issues.
                      She works effectively and collaboratively with her clients to
                      diagnose issues, offer potential solutions, and support chosen
                      recommendations. During times of change, transition and growth,
                      Tricia maintains a results-oriented focus.
                    </p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a className="level-item">
                        <span className="icon is-small"><i className="fab fa-facebook-f"></i></span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small"><i className="fab fa-twitter"></i></span>
                      </a>
                      <a className="level-item">
                        <span className="icon is-small"><i className="fab fa-linkedin-in"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile card is-child has-background-white">
                <div className="card-content">
                  <p>
                    <span className="title">Dave Clendening</span> <span className="is-size-5 has-text-grey-lighter">SHRM-SCP</span>
                  </p>
                  <p className="subtitle">Vice President of HR Operations</p>
                  <div className="content">
                    <p>
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
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile card is-child has-background-white">
                <div className="card-content">
                  <p>
                    <span className="title">Chris Clendening</span> <span className="is-size-5 has-text-grey-lighter">SHRM-SCP</span>
                  </p>
                  <p className="subtitle">HR Business Partner</p>
                  <div className="content">
                    <p>
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
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  mission: PropTypes.shape({
    title: PropTypes.string,
    statement: PropTypes.string,
  }),
  about: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  story: PropTypes.shape({
    body: PropTypes.string,
  }),
  team: PropTypes.shape({
    founder: PropTypes.shape({
      name: PropTypes.string,
      certifications: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      facebook: PropTypes.string,
      twitter: PropTypes.string,
      linkedin: PropTypes.string,
    }),
    other: PropTypes.arrayOf({
      name: PropTypes.string,
      certifications:PropTypes.string,
      title: PropTypes.string,
      description :PropTypes.string,
    }),
  }),
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout hasClearNavbar={true}>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        mission={frontmatter.mission}
        about={frontmatter.about}
        story={frontmatter.story}
        team={frontmatter.team}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        mission: PropTypes.object.isRequired,
        about: PropTypes.object.isRequired,
        story: PropTypes.object.isRequired,
        team: PropTypes.object.isRequired,
      }),
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        mission {
          title
          statement
        }
        about {
          title
          body
        }
        story {
          body
        }
        team {
          founder {
            name
            certifications
            title
            description
            facebook
            twitter
            linkedin
          }
          other {
            name
            certifications
            title
            description
          }
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { v4 } from 'uuid'

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
                  <h4 className="has-text-primary-light">{about.subtitle}</h4>
                  <p className="is-size-5">
                    <PageContent content={about.body} />
                  </p>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <Link to="/" className="tile card is-child is-primary">
                <div className="card-content">
                  <h5>Case Studies</h5>
                </div>
              </Link>
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
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <div className="container">
          <h1 className="has-text-centered">Our Story</h1>
          <PageContent content={story.body} />
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
                    <span className="title">{team.founder.name}</span> <span className="is-size-5 has-text-grey-lighter">{team.founder.certifications}</span>
                  </p>
                  <p className="subtitle">{team.founder.title}</p>
                  <div className="content">
                    <p>{team.founder.description}</p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a href={team.founder.facebook} className="level-item">
                        <span className="icon is-small"><i className="fab fa-facebook-f"></i></span>
                      </a>
                      <a href={team.founder.twitter} className="level-item">
                        <span className="icon is-small"><i className="fab fa-twitter"></i></span>
                      </a>
                      <a href={team.founder.linkedin} className="level-item">
                        <span className="icon is-small"><i className="fab fa-linkedin-in"></i></span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            {team.other.map((member) => (
              <div className="tile is-parent">
                <article key={v4()} className="tile card is-child has-background-white">
                  <div className="card-content">
                    <p>
                      <span className="title">{member.name}</span> <span className="is-size-5 has-text-grey-lighter">{member.certifications}</span>
                    </p>
                    <p className="subtitle">{member.title}</p>
                    <div className="content">
                      <p>{member.description}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
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
    subtitle: PropTypes.string,
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
          subtitle
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

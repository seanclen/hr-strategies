import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { v4 } from 'uuid'

import triciaHeadshot from '../assets/img/TriciaClendening_headshot.png'
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
              <div className="tile card is-child is-white">
                <div className="card-content">
                  <h4>{about.subtitle}</h4>
                  <p className="is-size-5 m-t-10">
                    <PageContent content={about.body} />
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
              <Link to="/about/partners" className="tile card is-child is-primary">
                <div className="card-content">
                  <h5>Our Partners</h5>
                </div>
              </Link>
              <Link to="/about/testimonials-case-studies" className="tile card is-child is-primary">
                <div className="card-content">
                  <h5>Testimonials & Case Studies</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <div className="container">
          <h1 className="has-text-centered">Our Story</h1>
          <div className="timeline is-centered m-t-25">
            <header className="timeline-header">
              <span className="tag is-medium is-primary">2002</span>
            </header>
            <div className="timeline-item is-primary">
              <div className="timeline-marker is-primary"></div>
              <div className="timeline-content">
                <p>Our founder had the vision to bring the same high level HR expertise to companies that either didn’t have a HR function or had limited HR knowledge as that of a Fortune 100 company.</p>
              </div>
            </div>
            <div className="timeline-item is-primary">
              <div className="timeline-marker is-primary is-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">February 2002</p>
                <p>HR Strategies, LLC is established to provide HR outsourcing to enhance an organizations’ efficiency, improve productivity and positively impact their bottom line with a staff of certified professionals.</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2005</span>
            </header>
            <div className="timeline-item is-primary">
              <div className="timeline-marker is-primary"></div>
              <div className="timeline-content">
                <p className="heading">June 2005</p>
                <p>Our founder earned her Senior Professional in Human Resources (SPHR) certification.</p>
              </div>
            </div>
            <div className="timeline-item is-primary">
              <div className="timeline-marker is-primary"></div>
              <div className="timeline-content">
                <p className="heading">August 2005</p>
                <p>ABC Delaware Diversity Committe Chair</p>
                <small><i>10 years</i></small>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2008</span>
            </header>
            <div className="timeline-item is-primary">
              <div className="timeline-marker is-primary is-icon">
                <i className="fa fa-globe-americas"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">August 2008</p>
                <p>Founder earned her Global Professional in Human Resources (GPHR).</p>
                <small><i className="fas fa-gem m-l-10 m-r-10"></i>At the time, there were only 402 people worldwide with both GPHR and SPHR certifications.</small>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2012</span>
            </header>
            <div className="timeline-item is-primary">
              <div className="timeline-marker is-primary"></div>
              <div className="timeline-content">
                <p className="heading">August 2012</p>
                <p>Delaware SHRM President</p>
                <small><i>2 years</i></small>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2014</span>
            </header>
            <div className="timeline-item is-primary">
              <div className="timeline-marker is-primary"></div>
              <div className="timeline-content">
                <p className="heading">June 2014</p>
                <p>Founder is the first person in Delaware to earn her SHRM-SCP certification.</p>
                <small><i className="fas fa-gem m-l-10 m-r-10"></i>She is the only person in Delaware to achieve the GPHR, SPHR, and SHRM-SCP certifications.</small>
              </div>
            </div>
            <div className="timeline-item is-primary">
              <div className="timeline-marker is-primary"></div>
              <div className="timeline-content">
                <p className="heading">September 2014</p>
                <p>SHRM Delaware State Council, Inc. State Director</p>
                <small><i>4 years</i></small>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2017</span>
            </header>
            <div className="timeline-item is-primary">
              <div className="timeline-marker is-primary is-icon">
                <i className="fas fa-bookmark"></i>
              </div>
              <div className="timeline-content">
                <p className="heading">March 2017</p>
                <p>HR Strategies, LLC has distinguished itself by being the only all SHRM Certified and Women Business Enterprise (WBE) HR firm in the region.</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="has-text-primary">More to Come!</span>
            </header>
          </div>
        </div>
      </section>
      <section className="section is-light is-medium">
        <div className="container">
          <h1 className="has-text-centered">Our Team</h1>
          <div className="tile is-ancestor m-t-25">
            <div className="tile is-parent">
              <article className="tile card is-child has-background-white">
                <div className="card-content">
                  <div className="columns is-vcentered">
                    <div className="column is-narrow">
                      <img src={triciaHeadshot} alt="Tricia Clendening Headshot" />
                    </div>
                    <div className="column">
                      <p>
                        <span className="title">{team.founder.name}</span> <span className="is-size-5 has-text-grey-lighter">{team.founder.certifications}</span>
                      </p>
                      <p className="subtitle">{team.founder.title}</p>
                      <div className="level is-mobile">
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
                      </div>
                      <div className="content">
                        <p>{team.founder.description}</p>
                      </div>
                    </div>
                  </div>
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

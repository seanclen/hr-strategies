import React from "react";
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import { ContactLink, Breadcrumbs } from '../components/Navigation'

import landingjpg from '../assets/img/video/Productive-Morning.jpg'
import landingmp4 from '../assets/img/video/Productive-Morning.mp4'

const HRStartupPage = ({ data, location }) => {
  const { edges: blogPosts } = data.blogPosts
  return (
    <Layout hasClearNavbar={true}>
      <section className="hero is-fullheight has-video-background is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-centered">
              <div className="column is-10 has-text-centered">
                <h4 class="has-text-white">HR Startup</h4>
                <h1 class="has-text-white has-text-weight-bold">HR Strategies will develop an organization's human resources foundation and processes, the right way.</h1>
                <Link to="/hr-startup#content" className="button is-info is-large m-t-10">Let's Get Started <span className="m-l-10 icon"><i className="fas fa-arrow-down"></i></span></Link>
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

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section id="content" className="section is-light is-medium">
        <div className="container">
          <h3 className="has-text-centered">Here are the Essentials:</h3>
          <div className="tile is-ancestor m-t-50">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <div className="columns is-vcentered">
                    <div className="column is-narrow">
                      <p className="title"><i class="fas fa-book has-text-info"></i></p>
                    </div>
                    <div className="column">
                      <p className="title">Employee-Handbook</p>
                    </div>
                  </div>
                  <p>Develop a company handbook to ensure compliance with all Federal, State, and local employment and labor laws.</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <div className="columns is-vcentered">
                    <div className="column is-narrow">
                      <p className="title"><i class="fas fa-clipboard-check has-text-info"></i></p>
                    </div>
                    <div className="column">
                      <p className="title">HR Practices</p>
                    </div>
                  </div>
                  <p>Develop process to ensure personnel files meet regulatory compliance.</p>
                </div>
              </div>
            </div>
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <div className="columns is-vcentered">
                    <div className="column is-narrow">
                      <p className="title"><i class="fas fa-briefcase has-text-info"></i></p>
                    </div>
                    <div className="column">
                      <p className="title">Job Descriptions</p>
                    </div>
                  </div>
                  <p>Evaluate and revise companywide job descriptions to ensure FLSA compliance.</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <div className="columns is-vcentered">
                    <div className="column is-narrow">
                      <p className="title"><i class="fas fa-chalkboard-teacher has-text-info"></i></p>
                    </div>
                    <div className="column">
                      <p className="title">Orientation / Onboarding</p>
                    </div>
                  </div>
                  <p>Develop new hire packets and HR forms to ensure compliance of laws and company policies.</p>
                </div>
              </div>
            </div>
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <div className="columns is-vcentered">
                    <div className="column is-narrow">
                      <p className="title"><i class="fas fa-coins has-text-info"></i></p>
                    </div>
                    <div className="column">
                      <p className="title">Compensation and Benefits</p>
                    </div>
                  </div>
                  <p>Review salary survey and make recommendations as warranted.</p>
                </div>
              </div>
              <div className="tile is-child card">
                <div className="card-content">
                  <div className="columns is-vcentered">
                    <div className="column is-narrow">
                      <p className="title"><i class="fas fa-signal has-text-info"></i></p>
                    </div>
                    <div className="column">
                      <p className="title">Performance Management</p>
                    </div>
                  </div>
                  <p>Develop a program that ties into the organizations Mission, Goals, and Objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-t-100 has-text-centered">
          <ContactLink location={location} className="button is-primary is-large">Ask Us for Help<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></ContactLink>
        </div>
      </section>

      <section className="section is-white">
        <div className="container">
          <div className="content">
            <h2>More About HR Practices</h2>

          </div>
        </div>

        <div className="container m-t-100">
          <div className="content">
            <h2>More About Performance Management</h2>

          </div>
        </div>
      </section>

      <section className="section is-light">
        <div className="container">
          <h3 className="has-text-weight-bold has-text-centered">Recommended Content</h3>
          <div className="tile is-ancestor m-t-50">
            {blogPosts.map(({ node: post }) => (
              <div className="tile is-parent">
                <div className="tile is-child box has-text-centered">
                  <h5>{post.frontmatter.title}</h5>
                  <p className="has-text-grey m-t-25">{post.excerpt}</p>
                  <Link className="button is-info is-uppercase m-t-25" to={post.fields.slug}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section is-primary">
        <div className="container has-text-centered">
          <ContactLink location={location} className="button is-light is-outlined is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></ContactLink>
        </div>
      </section>
    </Layout>
  )
}

export default HRStartupPage

export const hrStartupPageQuery = graphql`
  query {
    blogPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

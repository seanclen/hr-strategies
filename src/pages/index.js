import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ToastContainer, toast } from 'react-toastify';

import logo from '../img/logo-short.svg'

// import landingjpg from '../img/landing/Ground-Zero.jpg'
import landingmp4 from '../img/landing/Ground-Zero.mp4'
// import landingwebm from '../img/landing/Ground-Zero.webm'

function BlogPost(props) {
  return (
    <article key={props.id} className="tile card is-child has-background-white">
      <div className="card-content">
        <small>{props.date}</small>
        <p className="title">{props.title}</p>
        <strong>
          <Link className="is-uppercase" to={props.slug}>
            Read More
          </Link>
        </strong>
      </div>
    </article>
  );
}

function VerticalBlogPosts(props) {
  return (
    <div className="tile is-parent is-vertical">
      { props.posts.slice(!props.start ? 0 : props.start,
                          !props.end ? props.posts.length : props.end)
                   .map(({ node: post }) => (
        <BlogPost
                id={post.id}
                date={post.frontmatter.date}
                title={post.frontmatter.title}
                slug={post.fields.slug} />
      ))}
    </div>
  );
}

function Newsletter(props) {
  return (
    <div className="tile is-parent">
      { props.newsletter.map(({node: data }) => (
        <article className="tile is-child card is-primary">
          <div className="card-content">
            <small>Newsletter &bull; {data.frontmatter.date}</small>
            <p className="title">{data.frontmatter.title}</p>
            <div className="content" dangerouslySetInnerHTML={{__html: data.excerpt}}></div>
            <strong>
              <Link className="is-uppercase" to={props.slug}>
                Read More
              </Link>
            </strong>
          </div>
        </article>
      ))}
    </div>
  );
}

function LandingNotification(props) {
  return (
    <div className="notification landing">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <div>
              <p className="title">New FCRA Disclosure Notice</p>
              <p className="content">The Fair Credit Reporting Act (FCRA) will apply for third-party background checks.</p>
            </div>
          </div>
        </div>
        <div className="level-right margin-left-50">
          <div className="level-item">
            <div className="buttons">
              <span className="button is-warning has-text-weight-bold">Learn more</span>
              <a onClick={props.closeToast} className="button is-light">
                <span className="icon is-small">
                  <i className="fas fa-times"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.blogposts
    const { edges: newsletter } = data.newsletter
    toast(<LandingNotification />, {closeButton: false})

    return (
      <Layout>
        <ToastContainer className="columns is-mobile is-centered" toastClassName="column is-narrow" position="bottom-center" autoClose={false} closeOnClick={false} draggable />
        <section id="landing-hero" className="hero is-fullheight has-video-background">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-mobile is-centered">
                <div className="column is-narrow">
                  <h1>Leading <span className="hrs-blue">People</span>.</h1>
                  <h1>Leading <span className="hrs-blue-light">Business</span>.</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="video-viewport">
            <video width="1920" height="1280" autoPlay muted loop>
              <source src={landingmp4} type="video/mp4" />
              <source src="../img/landing/Ground-Zero.webm" type="video/webm" />
            </video>
          </div>

        </section>

        <section className="is-white padding-top-100 padding-bottom-100">
          <div className="container">
            <h4 className="subtitle has-text-centered padding-bottom-50 is-size-4">Human Resources support for businesses of any size.</h4>
            <hr />
            <div className="columns padding-top-50">
              <div className="column is-half">
                <article className="tile is-child">
                  <div className="card-content">
                    <p className="title has-text-weight-bold">Legal compliance with employment and labor laws</p>
                    <div className="content">
                      <p>Most small to mid-size organizations cannot afford to staff a qualified HR professional. HR Strategies provides the level of support without the ongoing costs of having additional staff on their payroll.</p>
                      <strong>
                        <a className="is-uppercase">
                          Explore Our Services
                        </a>
                      </strong>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-primary padding-top-100 padding-bottom-100">
          <div className="container">

          </div>
        </section>

        <section className="section is-yellow padding-top-50 padding-bottom-50">
          <div className="container">
            <div className="columns is-mobile is-centered">
              <div className="column is-narrow">
                <div className="level">
                  <div className="level-left">
                    <div className="level-item">
                      <div className="">
                        <h1 className="title is-size-1 has-text-white margin-bottom-0">15%</h1>
                        <h1 className="title is-size-1 has-text-white">OFF</h1>
                      </div>
                    </div>
                  </div>
                  <div className="level-right margin-left-50">
                    <div className="level-item">
                      <div>
                        <p className="title has-text-white">New Client Discount</p>
                        <p>New clients receive discount if scheduled before December 15, 2018.</p>
                        <strong>
                          <a className="is-uppercase">
                            Explore Our Services
                          </a>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section padding-top-100 padding-bottom-100 is-white">
          <div className="container has-text-centered">
            <h1 className="title">Personal. Qualified. Affordable</h1>
            <h5 className="subtitle is-5">Here’s what some of our clients have to say</h5>
          </div>
          <div className="columns padding-top-50 is-mobile is-vcentered is-centered">
            <div className="column is-half">
              <div className="quote">
                <p>The biggest benefit in working with HR Strategies is that, unlike the big HR or PEO companies we’ve used in the past, we know the people we’re working with. I know the team by name, and they know  us.</p>
                <strong>
                  <a className="is-uppercase">
                    Explore Our Services
                  </a>
                </strong>
              </div>
            </div>
            <div className="column is-narrow">
              <img src={logo} width="100" alt="HR Strategies" />
            </div>
          </div>
        </section>

        <section id="landing-news" className="section is-light">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Stay Informed</h1>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <VerticalBlogPosts posts={posts} start={0} end={2} />
                  <VerticalBlogPosts posts={posts} start={2} end={4} />
                </div>
                <div className="tile is-parent has-flex-grow-0">
                  <article className="tile is-child card is-warning">
                    <div className="card-content">
                      <p className="title">New FCRA Disclosure Notice</p>
                      <div className="content">
                        <p>The Fair Credit Reporting Act (FCRA) will apply for third-party background checks.</p>
                        <strong>
                          <a className="is-uppercase">
                            Read More
                          </a>
                        </strong>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <Newsletter newsletter={newsletter} />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query {
    blogposts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
      limit: 4
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
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
    newsletter: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "newsletter-post" } }}
      limit: 1
    ) {
      edges {
        node {
          excerpt(pruneLength: 400, format: HTML)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM YYYY")
          }
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import { ToastContainer, toast } from 'react-toastify'
import { BlogPostCard, NewsletterCard, NotificationCard } from '../components/Cards'
import Notification from '../components/Notification'
import Affiliations from '../components/Affiliations'

// import landingjpg from '../img/homepage/Ground-Zero.jpg'
// import landingwebm from '../img/homepage/Ground-Zero.webm'
import landingmp4 from '../img/homepage/Ground-Zero.mp4'
import logo from '../img/logo-short.svg'

function VerticalBlogPosts(props) {
  return (
    <div className="tile is-parent is-vertical">
      { props.posts.slice(!props.start ? 0 : props.start,
                          !props.end ? props.posts.length : props.end)
                   .map(({ node: post }) => (
        <BlogPostCard
                date={post.frontmatter.date}
                title={post.frontmatter.title}
                slug={post.fields.slug} />
      ))}
    </div>
  );
}

export const HomePageTemplate = ({
  blogPosts,
  newsletter,
  content,
}) => {
  // Render the notification if the display switch is true
  if (content.notification.display) {
    toast(<Notification
        title={content.notification.title}
        message={content.notification.message}
        link={content.notification.link}
      />,
      {closeButton: false})
  }

  return (
    <div>
      <ToastContainer className="columns is-mobile is-centered" toastClassName="column is-narrow" position="bottom-center" autoClose={false} closeOnClick={false} draggable />
      <section id="homepage-hero" className="hero is-fullheight has-video-background">
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
            <source src="../img/homepage/Ground-Zero.webm" type="video/webm" />
          </video>
        </div>
      </section>

      <Affiliations items={content.affiliations} />

      <section className="section is-white p-t-100 p-b-100">
        <div className="container">
          <h4 className="subtitle has-text-centered p-b-50 is-size-4">Human Resources support for businesses of any size.</h4>
          <hr />
          <div className="columns p-t-50">
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

      <section className="section is-primary p-t-100 p-b-100">
        <div className="container">

        </div>
      </section>

      <section className="section is-yellow p-t-50 p-b-50">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-narrow">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="">
                      <h1 className="title is-size-1 has-text-white m-b-0">15%</h1>
                      <h1 className="title is-size-1 has-text-white">OFF</h1>
                    </div>
                  </div>
                </div>
                <div className="level-right m-l-50">
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

      <section className="section p-t-100 p-b-100 is-white">
        <div className="container has-text-centered">
          <h1 className="title">Personal. Qualified. Affordable</h1>
          <h5 className="subtitle is-5">Here’s what some of our clients have to say</h5>
        </div>
        <div className="columns p-t-50 is-mobile is-vcentered is-centered">
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

      <section id="homepage-news" className="section is-light">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Stay Informed</h1>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <VerticalBlogPosts posts={blogPosts} start={0} end={2} />
                <VerticalBlogPosts posts={blogPosts} start={2} end={4} />
              </div>
              {content.notification.display &&
                <div className="tile is-parent has-flex-grow-0">
                  <NotificationCard
                    title={content.notification.title}
                    message={content.notification.message}
                    link={content.notification.link} />
                </div>
              }
            </div>
            <div className="tile is-parent">
              { newsletter.map(({node: data }) => (
                <NewsletterCard
                  date={data.frontmatter.date}
                  title={data.frontmatter.title}
                  excerpt={data.excerpt}
                  slug={data.fields.slug} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

HomePageTemplate.propTypes = {
  blogPosts: PropTypes.array,
  newsletter: PropTypes.array,
  content: PropTypes.shape({
    notification: PropTypes.shape({
      display: PropTypes.bool,
      link: PropTypes.string,
      message: PropTypes.string,
      title: PropTypes.string,
    }),
    affiliations: PropTypes.array,
  }),
}

const HomePage = ({ data }) => {
  const { edges: blogPosts } = data.blogPosts
  const { edges: newsletter } = data.newsletter
  const { frontmatter } = data.content

  return (
    <Layout>
      <HomePageTemplate
        blogPosts={blogPosts}
        newsletter={newsletter}
        content={frontmatter}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    blogPosts: PropTypes.shape({
      edges: PropTypes.array,
    }),
    newsletter: PropTypes.shape({
      edges: PropTypes.array,
    }),
    content: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!){
    blogPosts: allMarkdownRemark(
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
    },
    content: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        templateKey
        notification {
          display
          link
          message
          title
        }
        affiliations {
          heading
          subheading
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

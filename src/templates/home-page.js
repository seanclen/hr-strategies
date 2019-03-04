import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import { ToastContainer, toast } from 'react-toastify'
import { BlogPostCard, NewsletterCard, NotificationCard } from '../components/Cards'
import Notification from '../components/Notification'
import Affiliations from '../components/Affiliations'
import Testimonials from '../components/Testimonials'
import { v4 } from 'uuid'

// import landingjpg from '../img/homepage/Ground-Zero.jpg'
// import landingwebm from '../img/homepage/Ground-Zero.webm'
import landingmp4 from '../img/homepage/Ground-Zero.mp4'
import logo from '../img/logo-short.svg'
import img1 from '../img/rawpixel-340966-unsplash.jpg'
import img2 from '../img/rawpixel-703120-unsplash.jpg'
import img3 from '../img/dmitrij-paskevic-44124-unsplash.png'

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

function Statistics(props) {
  const { statistics: stats } = props.statistics
  return (
    <div className="level p-t-100 p-b-50">
      {stats.slice(0, stats.length).map((item) => (
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">{item.title}</p>
            <p className="title has-text-white">{item.statistic}</p>
            <Link to={item.linkUrl} className="button is-primary m-t-10">{item.linkText}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

function Discount(props) {
  if (!props.discount) { return(<span></span>) }
  return (
    <section className="section is-tan p-t-50 p-b-50">
      <div className="columns is-centered is-vcentered">
        <div className="column is-narrow">
          <h1 className="title is-size-1 has-text-white m-b-0">{props.discount.percentage}</h1>
          <h1 className="title is-size-1 has-text-white">OFF</h1>
        </div>
        <div className="column is-narrow">
          <p className="title has-text-white">{props.discount.title}</p>
          <p>{props.discount.description}</p>
          <strong>
            <Link to={props.discount.linkUrl} className="is-uppercase">{props.discount.linkText}</Link>
          </strong>
        </div>
      </div>
    </section>
  )
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
      <ToastContainer className="columns is-centered" toastClassName="column is-narrow" position="bottom-center" autoClose={false} closeOnClick={false} draggable />
      <section id="homepage-hero" className="hero is-fullheight has-video-background">
        {blogPosts.slice(0,1).map(({ node: post }) => (
          <Link to={post.fields.slug} className="hero-news tile is-4">
            <article key={v4()} className="content">
              <p className="has-text-white">Recent News</p>
              <h3 className="has-text-white m-t-0">{post.frontmatter.title}</h3>
              <p className="has-text-white excerpt">{post.excerpt}</p>
            </article>
          </Link>
        ))}
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-centered">
              <div className="column is-narrow">
                <h1>Leading <span className="hrs-blue">People</span>.</h1>
                <h1>Leading <span className="hrs-blue-light">Business</span>.</h1>
                <hr />
                <div className="tagline is-size-5 is-size-6-touch">
                  <p>{content.hero.tagline}</p>
                </div>
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

      <section className="section is-white p-t-25 p-b-0">
        <div className="container">
          <h4 className="has-text-centered p-t-100 p-b-100 is-size-3">{content.section1.statement}</h4>
        </div>
        <div className="container">
          <div className="columns is-vcentered p-t-50">
            <div className="column is-half">
              <article key={v4()} className="tile is-child">
                <div className="card-content">
                  <p className="title has-text-weight-bold">{content.section1.heading}</p>
                  <div className="content">
                    <p>{content.section1.description}</p>
                    <strong>
                      <Link to={content.section1.linkUrl} className="is-uppercase">
                        {content.section1.linkText}
                      </Link>
                    </strong>
                  </div>
                </div>
              </article>
            </div>
            <img src={img3} />
          </div>
        </div>
      </section>

      <section className="section is-dark p-t-100 p-b-100">
        <div className="container has-text-centered">
          <h2 className="has-text-white m-b-0">{content.statistics.heading}</h2>
          <h5>{content.statistics.subheading}</h5>
          <Statistics statistics={content.statistics} />
        </div>
      </section>

      <Discount discount={content.discount} />

      <section className="section p-t-100 p-b-100 is-white">
        <div className="container m-b-25 has-text-centered">
          <h2>Personal. Qualified. Affordable.</h2>
          <h5>Here’s what some of our clients have to say</h5>
        </div>
        <Testimonials items={content.testimonials} />
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
    hero: PropTypes.shape({
      tagline: PropTypes.string,
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
        hero {
          tagline
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
        section1 {
          statement
          heading
          description
          linkText
          linkUrl
        }
        statistics {
          heading
          subheading
          statistics {
            title
            statistic
            linkText
            linkUrl
          }
        }
        discount {
          display
          title
          description
          percentage
          linkText
          linkUrl
        }
        testimonials {
          quote
          author
          image {
            childImageSharp {
              fluid(maxWidth: 128, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

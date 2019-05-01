import React from "react";
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'

const ThanksPage = ({ data, location }) => {
  const name = (location.state) ? location.state.name : ''
  const firstName = name.substr(0, name.indexOf(" "))
  const { edges: blogPosts } = data.blogPosts
  return (
    <Layout hasClearNavbar={true}>
      <section className="section header-compliance is-medium">
        <div className="container has-text-centered">
          <h1>Thanks {firstName}!</h1>
          <h5>We have received your message and one of our HR experts will get back to you shortly.</h5>
          { location.state && location.state.contactFrom &&
            <Link to={location.state.contactFrom.pathname} className="button is-primary m-t-25"><i class="fas fa-arrow-left m-r-10"></i> Return to {location.state.contactFrom.name}</Link>
          }
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
    </Layout>
  )
}

export default ThanksPage

export const contactThankYouPageQuery = graphql`
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

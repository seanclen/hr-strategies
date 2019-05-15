import React from "react";
import { navigate } from "gatsby-link";
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { ContactLink, Breadcrumbs } from '../../components/Navigation'

export const PartnersPageTemplate = ({
  location,
  testimonials,
  otherPartners
}) => {
  return (
    <div>
      <section className="section header-compliance">
        <div className="container">
          <h1 className="has-text-centered">Our Strategic Business Partners</h1>
          <h3 className="has-text-centered">We have partnered with industry-leading businesses to offer the best solutions for all of our current and potential clients.</h3>
        </div>
      </section>

      <section className="section is-light">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          { testimonials.map((item) => (
            <div className="content">
              <p className="m-t-50 m-b-50">
                <a href={item.linkUrl}>
                  <PreviewCompatibleImage imageInfo={item.image} imgStyle={{ borderRadius: '0px', width: '256px' }} />
                </a>
              </p>
              <blockquote>
                {item.quote}
              </blockquote>
              <div className="columns is-vcentered">
                { item.authors.map((author) => (
                  <div className="column is-narrow">
                    <p className="subtitle">
                      {author.author}<br />
                      <small>{author.title} &mdash; {author.company}</small>
                    </p>
                  </div>
                ))}
              </div>
              <hr />
            </div>

          ))}

          <div className="columns is-vcentered">
            { otherPartners.map((item) => (
              <div className="column is-narrow">
                <a href={item.linkUrl}>
                  <PreviewCompatibleImage imageInfo={item.image} imgStyle={{ borderRadius: '0px', width: '256px' }} />
                </a>
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
    </div>
  )
}

const PartnersPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark
  return(
    <Layout>
      <PartnersPageTemplate
        location={location}
        testimonials={frontmatter.testimonials}
        otherPartners={frontmatter.otherPartners} />
    </Layout>
  )
}

export default PartnersPage

export const partnersPageQuery = graphql`
  query PartnersPage($id: String!){
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        testimonials {
          image {
            childImageSharp {
              fluid(maxWidth: 256, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          linkUrl
          quote
          authors {
            author
            title
            company
          }
        }
        otherPartners {
          image {
            childImageSharp {
              fluid(maxWidth: 256, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          linkUrl
        }
      }
    }
  }
`

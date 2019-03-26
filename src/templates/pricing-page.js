import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PricingTemplate = ({ hero, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section is-light">
      <div className="container">
        <h1 className="has-text-centered">{hero.heading}</h1>
        <h3 className="has-text-centered">{hero.subheading}</h3>
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

const PricingPage = ({ data }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <PricingTemplate
        contentComponent={HTMLContent}
        hero={query.frontmatter.hero}
        content={query.html}
      />
    </Layout>
  )
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        hero {
          heading
          subheading
        }
      }
    }
  }
`

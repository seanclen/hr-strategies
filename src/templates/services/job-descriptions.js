import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'
import { Breadcrumbs } from '../../components/Navigation'

export const JobDescriptionsPageTemplate = ({ hero, content, contentComponent, location }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section is-light">
      <div className="container">
        <h1 className="has-text-centered">{hero.heading}</h1>
        <h3 className="has-text-centered">{hero.subheading}</h3>
        <Breadcrumbs location={location} />
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

const JobDescriptionsPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <JobDescriptionsPageTemplate
        contentComponent={HTMLContent}
        hero={query.frontmatter.hero}
        content={query.html}
        location={location}
      />
    </Layout>
  )
}

export default JobDescriptionsPage

export const jobDescriptionsPageQuery = graphql`
  query JobDescriptionsPage($id: String!) {
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
